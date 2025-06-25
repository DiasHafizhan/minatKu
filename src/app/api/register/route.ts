import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const {username, email, password} = data
    const user = await prisma.user.create({
      data : {
        username, 
        email,
        password
      }
    })
    return NextResponse.json(user)
  } catch (error) {
    return NextResponse.json({
      message: error
    }, {
      status: 500
    })
  }
}