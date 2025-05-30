"use client";

import { signOut } from "../../lib/auth-client";
import { Button } from "../ui/button";

/**
 * This component is used to create a logout button that triggers the sign-out process.
 */
export function ClientLogoutButton() {
  return (
    <Button type="button" onClick={() => signOut(true, "/")} variant="outline" className="w-full">
      Logout from Client Side with revoke token
    </Button>
  );
}
