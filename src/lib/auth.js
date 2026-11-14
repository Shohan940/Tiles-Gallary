
import { betterAuth } from "better-auth/minimal";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { client, db } from "@/lib/mongodb";

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),

  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },

  socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID , 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET , 
        }, 
    },
});
