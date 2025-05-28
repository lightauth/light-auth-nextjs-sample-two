import { Google } from "arctic";
import { CreateLightAuth } from "@light-auth/nextjs";

const googleProvider = {
  providerName: "google",
  arctic: new Google(process.env.GOOGLE_CLIENT_ID!, process.env.GOOGLE_CLIENT_SECRET!, process.env.REDIRECT_URI!),
};

export const { providers, handlers, signIn, signOut, getAuthSession, getUser } = CreateLightAuth({
  providers: [googleProvider],
});
