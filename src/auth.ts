import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials"
import { prisma } from "./lib/prisma";


export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [ 
    Credentials({
     credentials: {
      email: {},
      password: {}
     } ,
     authorize: async (credentials) => {
      const user = await prisma.user.findUnique({
        where: {
          email: credentials?.email as string
        }
      })
       if(user?.password === credentials?.password){ 
        return user;
       }else{
        return null
       }
     }
    })
  ],
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth;
    },

    async session({ session, token }) {
        session.user = token.user as any
        return session;
      },
      async jwt({ token, user }) {
        if (user) {
          token.user = user;
        }
        return token;
      },
  },
  session: {
    strategy: "jwt",
  },
  trustHost: true,
});