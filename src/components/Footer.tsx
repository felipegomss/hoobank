import {
  Code2,
  Copyright,
  Instagram,
  Linkedin,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="pt-14">
      <div className="my-10 flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col gap-7">
          <div className="flex flex-row items-center gap-1">
            <Image src={"/logox2.png"} width={72} height={72} alt="" />
            <h1 className="font-semibold text-5xl">
              Hoo<span className="text-cyan-400">Bank</span>
            </h1>
          </div>
          <p className="text-lg text-zinc-400">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="font-medium text-lg">Useful Links</h1>
          <div className="text-zinc-400 flex flex-col gap-3">
            <Link href={"/"}>Content</Link>
            <Link href={"/"}>How it Works</Link>
            <Link href={"/"}>Create</Link>
            <Link href={"/"}>Explore</Link>
            <Link href={"/"}>Terms & Services</Link>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="font-medium text-lg">Community</h1>
          <div className="text-zinc-400 flex flex-col gap-3">
            <Link href={"/"}>Help Center</Link>
            <Link href={"/"}>Partners</Link>
            <Link href={"/"}>Suggestions</Link>
            <Link href={"/"}>Blog</Link>
            <Link href={"/"}>Newsletters</Link>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="font-medium text-lg">Partner</h1>
          <div className="text-zinc-400 flex flex-col gap-3">
            <Link href={"/"}>Our Partner</Link>
            <Link href={"/"}>Become a Partner</Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between p-9 border-t border-t-zinc-400/20 gap-6">
        <p className="flex gap-2 text-zinc-400 text-lg flex-col md:flex-row text-center">
          <span className="flex gap-2">
            Copyright
            <Copyright /> 2021 HooBank.
          </span>
          <span>All Rights Reserved.</span>
        </p>
        <div className="flex flex-row gap-9 justify-evenly">
          <Link href={"https://www.instagram.com/felipegomss/"} target="_blank">
            <Instagram size={21} />
          </Link>
          <Link
            href={"https://api.whatsapp.com/send?phone=5571994178164"}
            target="_blank"
          >
            <Smartphone size={21} />
          </Link>
          <Link href={"https://felipegomes.me/"} target="_blank">
            <Code2 size={21} />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/felipegomss/"}
            target="_blank"
          >
            <Linkedin size={21} />
          </Link>
        </div>
      </div>
    </div>
  );
}
