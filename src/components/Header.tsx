import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <nav className="flex md:flex-row flex-col gap-4 justify-between items-center p-8 w-full m-auto">
      <div className="flex flex-row items-center gap-1">
        <Image src="/logo.png" width={32} height={32} alt="" />
        <h1 className="font-semibold text-lg">
          Hoo<span className="text-cyan-400">Bank</span>
        </h1>
      </div>
      <div className="flex items-center md:gap-14 gap-4">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>About Us</Link>
        <Link href={"/"}>Features</Link>
        <Link href={"/"}>Solution</Link>
      </div>
    </nav>
  );
}
