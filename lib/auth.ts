import { Google } from "arctic";
import { CreateLightAuth } from "@light-auth/nextjs";
import { MyLightAuthSession, MyLightAuthUser } from "./session-user";

const googleProvider = {
  providerName: "google",
  arctic: new Google(process.env.GOOGLE_CLIENT_ID!, process.env.GOOGLE_CLIENT_SECRET!, process.env.REDIRECT_URI!),
};

export const { providers, handlers, signIn, signOut, getAuthSession, getUser } = CreateLightAuth<MyLightAuthSession, MyLightAuthUser>({
  providers: [googleProvider],

  onSessionSaving: async (session, tokens) => {
    if (!tokens) return session;
    if (!tokens.idToken()) return session;

    // optional: Add custom claims to the user
    // This example adds the first and last name from the idToken to the user
    const idToken = JSON.parse(Buffer.from(tokens.idToken().split(".")[1], "base64").toString());

    if ("given_name" in idToken && typeof idToken.given_name === "string") session.firstName = idToken.given_name;
    if ("family_name" in idToken && typeof idToken.family_name === "string") session.lastName = idToken.family_name;

    return session;
  },

  onUserSaving: async (user, tokens) => {
    if (!tokens) return user;
    if (!tokens.idToken()) return user;

    // optional: Add custom claims to the user
    // This example adds the first and last name from the idToken to the user
    const idToken = JSON.parse(Buffer.from(tokens.idToken().split(".")[1], "base64").toString());

    if ("iss" in idToken && typeof idToken.iss === "string") user.iss = idToken.iss;
    if ("email_verified" in idToken && typeof idToken.email_verified === "boolean") user.email_verified = idToken.email_verified;
    if ("sub" in idToken && typeof idToken.sub === "string") user.sub = idToken.sub;

    return user;
  },
});
