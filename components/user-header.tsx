import { getSession, getUser, signOut } from "@/lib/auth";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "./ui/dropdown-menu";

import Link from "next/link";
import { ClientLogoutButton } from "./client/client-logout-button";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function UserHeader() {
  const session = await getSession();
  const user = await getUser(session?.userId.toString()); // Fetch user details based on session

  if (!session)
    return (
      <div className="flex items-center gap-2">
        <Link href="/" className="text-sm text-blue-600 hover:text-blue-800">
          Home
        </Link>
        <Link href="/login" className="text-sm text-blue-600 hover:text-blue-800">
          Login
        </Link>
      </div>
    );

  return (
    <div className="flex items-center gap-2 ">
      <span className="hidden text-sm sm:inline-flex">{session.email}</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user?.picture ?? `https://api.dicebear.com/9.x/thumbs/svg?seed=${Math.floor(Math.random() * 100000) + 1}&randomizeIds=true`} alt={session?.name} />
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-90" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{user?.name}</p>
              <p className="text-muted-foreground text-xs leading-none">{user?.email}</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuItem>
            <form
              action={async () => {
                "use server";
                await signOut(false, "/login");
              }}
            >
              <Button type="submit" className="w-full">
                Logout using POST Action
              </Button>
            </form>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ClientLogoutButton />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
