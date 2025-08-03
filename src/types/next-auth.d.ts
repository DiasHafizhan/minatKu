import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      username: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: number;
    username: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: number;
      username: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}