import Link from "next/link";
import Image from "next/image";
import lightAuth from "@/public/light-auth.svg";

import UserHeader from "./user-header";

export default async function Header() {
  return (
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <Link href="https://lightauth.github.io" target="_blank" className="text-xl font-bold text-gray-800 inline-flex gap-2">
        <Image src={lightAuth} alt="Light Auth" width={22} height={22} />
        Light Auth Test App
      </Link>

      <UserHeader />
    </div>
  );
}
