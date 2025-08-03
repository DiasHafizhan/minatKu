import { auth } from "@/auth";
import { NextResponse } from "next/server";

const PUBLIC_ROUTES = ["/login", "/register"];

export default auth((req) => {
  const { nextUrl } = req;
  const loggedIn = req.auth;
  const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);
 
  if (isPublicRoute && loggedIn)
   return Response.redirect(new URL("/", nextUrl));
 
  if (!loggedIn && !isPublicRoute)
   return Response.redirect(new URL("/login", nextUrl));

  return NextResponse.next();
 });

export const config = {
  matcher: '/((?!.\.).)',
};