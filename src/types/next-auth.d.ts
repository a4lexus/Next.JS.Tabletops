import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      googleId: ReactNode;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string | null;
    };
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    googleId?: string | null;
    role?: string | null;
  }
}