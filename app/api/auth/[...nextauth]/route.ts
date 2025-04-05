import NextAuth from "next-auth";

const handler = NextAuth({
  /* next-auth configuration */
});
export { handler as GET, handler as POST };
