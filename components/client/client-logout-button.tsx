"use client";

import { CreateLightAuthClient } from "@light-auth/nextjs/client";
import { Button } from "../ui/button";

const { signOut } = CreateLightAuthClient();

/**
 * This component is used to create a logout button that triggers the sign-out process.
 * It uses the `signOut` function exported from `CreateLightAuthClient` to handle the logout process.
 */
export function ClientLogoutButton() {
  return (
    <Button type="button" onClick={() => signOut(true, "/")} variant="outline" className="w-full">
      Logout from Client Side with revoke token
    </Button>
  );
}
