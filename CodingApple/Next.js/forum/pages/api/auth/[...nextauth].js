import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "Ov23lig34Y943WOS5UUh",
      clientSecret: "f0ff792b774021f3e1f4352e3ac7e2a6fa66fcdc",
    }),
  ],
  secret: "djwjrnwjwjrn1346",
  adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
