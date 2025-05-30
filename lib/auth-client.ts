import { CreateLightAuthClient } from "@light-auth/nextjs/client";
import { MyLightAuthSession, MyLightAuthUser } from "./session-user";
const { signOut, getAuthSession, getUser, signIn } = CreateLightAuthClient<MyLightAuthSession, MyLightAuthUser>();
export { signOut, getAuthSession, getUser, signIn };
