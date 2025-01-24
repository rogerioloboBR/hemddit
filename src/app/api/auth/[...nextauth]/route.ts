import NextAuth from "next-auth/next";
import { authOptins } from "@/lib/auth";

const handler = NextAuth(authOptins)

export { handler as GET, handler as POST }  