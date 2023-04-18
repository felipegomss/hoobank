import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Abel } from "next/font/google";

const abel = Abel({
  weight: "400",
  subsets: ["latin"],
});

export default function Features() {
  return (
    <div className=" flex flex-col gap-14">
      <div className="relative flex md:flex-row flex-col-reverse justify-between md:mb-0 mb-12">
        <aside>
          <Image src={"/feature1.png"} width={530} height={455} alt="" />
        </aside>
        <aside className=" flex flex-col justify-center gap-6 items-start max-w-lg">
          <h1 className="font-semibold text-5xl">
            Easily control your billing & invoicing.
          </h1>
          <p className="text-zinc-400 text-lg">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
          <div className="flex gap-8 md:relative absolute md:-bottom-8 -bottom-12">
            <Link href={"/"}>
              <Image src={"/apple.svg"} width={144} height={45} alt="" />
            </Link>
            <Link href={"/"}>
              <Image src={"/playstore.svg"} width={144} height={45} alt="" />
            </Link>
          </div>
        </aside>
      </div>
      <div className="relative flex md:flex-row flex-col justify-between md:mb-0 mb-24">
        <aside className=" flex flex-col justify-center gap-6 items-start max-w-lg">
          <h1 className="font-semibold text-5xl">
            Find a better card deal in few easy steps.
          </h1>
          <p className="text-zinc-400 text-lg" style={abel.style}>
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <div className="w-full flex justify-start md:relative absolute -bottom-24 md:-bottom-6">
            <button className="bg-gradient-to-tl from-cyan-500 to-cyan-100 rounded-xl w-full md:w-auto">
              <h1 className="my-5 mx-8 font-medium text-lg text-zinc-950">
                Get Started
              </h1>
            </button>
          </div>
        </aside>
        <aside>
          <Image src={"/feature2.png"} width={530} height={455} alt="" />
        </aside>
      </div>
    </div>
  );
}
