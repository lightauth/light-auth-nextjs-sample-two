import Image from "next/image";
import googleSvg from "@/public/google.svg";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth";
import { ClientLoginButton } from "@/components/client/client-login-button";
import { ClientLoginActionButton } from "@/components/client/client-login-action-button";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex flex-col items-center justify-center p-4 ">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Login Page</h1>
          <p className="text-gray-600">Login to your account</p>
        </div>
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>You can choose between 3 differents ways to log in.</CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <div className="mt-4 flex flex-col space-y-2">
                <form
                  action={async () => {
                    "use server";
                    await signIn("google", "/");
                  }}
                >
                  <Button type="submit" variant="outline" className="w-full">
                    <Image src={googleSvg} alt="Google" width={18} height={18} />
                    Login using a POST action
                  </Button>
                </form>

                <ClientLoginActionButton providerName="google" callbackUrl="/">
                  Login using a classic action
                </ClientLoginActionButton>

                <ClientLoginButton providerName="google" callbackUrl="/">
                  Login using signIn client function
                </ClientLoginButton>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
