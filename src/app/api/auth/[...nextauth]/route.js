import User from "@/models/User";
import connect from "@/utils/db";
import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
const handler = NextAuth({
  providers: [
    CredentialProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await connect();
        try {
          const user = await User.findOne({ email: credentials.email });

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("Invalid Credentials");
            }
          } else {
            throw new Error("User Not Found");
          }
        } catch (error) {
          throw new Error("Try Again later", error);
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
