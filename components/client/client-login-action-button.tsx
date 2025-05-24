"use client";

import { login } from "@/app/api/actions";
import { Button } from "../ui/button";
import Image from "next/image";
import googleSvg from "@/public/google.svg";

/**
 * this component is used to create a login button that triggers the login action for a specific provider.
 * It uses the `login` function from the API actions to handle the login process.
 */
export function ClientLoginActionButton({ children, providerName, callbackUrl }: { children: React.ReactNode; providerName: string; callbackUrl: string }) {
  return (
    <Button type="button" onClick={() => login(providerName, callbackUrl)} variant="outline" className="w-full">
      <Image src={googleSvg} alt="Google" width={18} height={18} />
      {children}
    </Button>
  );
}
