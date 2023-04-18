import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div>
      <div className="flex justify-between md:flex-row flex-col gap-6">
        <aside className="flex flex-col gap-3 justify-center">
          <div className="flex items-center gap-3 p-2 bg-zinc-900/70 rounded-xl text-lg w-fit">
            <Image src={"/percent.svg"} width={32} height={32} alt="" />
            <h3>
              20%
              <span className="text-zinc-400"> DISCOUNT FOR </span>1 MONTH
              <span className="text-zinc-400"> ACCOUNT</span>
            </h3>
          </div>
          <div>
            <div className="flex gap-12">
              <h1 className="flex flex-col font-semibold md:text-7xl text-5xl">
                The Next
                <span className="text-cyan-400 md:my-6">Generation</span>
              </h1>
              <button className="text-cyan-400 hover:text-zinc-950 w-36 h-36 hidden md:flex flex-col gap-2 p-11 rounded-full border border-cyan-400 hover:bg-gradient-to-tl from-cyan-500 to-cyan-100">
                <span className="flex gap-2">
                  Get
                  <span>
                    <ArrowUpRight color="white" />
                  </span>
                </span>
                Started
              </button>
            </div>
            <h1 className="flex flex-col font-semibold md:text-7xl text-5xl">
              Payment Method.
            </h1>
          </div>
          <p className="max-w-md text-lg text-zinc-400 mt-7">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </aside>
        <Image src={"/home-img.png"} width={674} height={669} alt="" />
      </div>
      <div className=" flex my-20 justify-between flex-col md:flex-row">
        <h2 className="flex gap-6 font-semibold text-4xl items-center justify-between">
          3800+
          <span className="text-cyan-400 font-normal text-xl">USER ACTIVE</span>
        </h2>
        <h2 className="flex gap-6 font-semibold text-4xl items-center justify-between">
          230+
          <span className="text-cyan-400 font-normal text-xl">
            TRUSTED BY COMPANY
          </span>
        </h2>
        <h2 className="flex gap-6 font-semibold text-4xl items-center justify-between">
          $230M+
          <span className="text-cyan-400 font-normal text-xl">TRANSACTION</span>
        </h2>
      </div>
    </div>
  );
}
