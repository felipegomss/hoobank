import Image from "next/image";
import React from "react";

export default function Solution() {
  return (
    <div className="flex flex-col gap-24">
      <div className="flex flex-col gap-10">
        <div className="md:grid md:grid-cols-2 md:gap-32 gap-6 flex flex-col">
          <h1 className="text-5xl font-semibold">
            What people are saying about us
          </h1>
          <p className="text-zinc-400 text-lg">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div className="grid md:grid-cols-3 grid-rows-3 md:grid-rows-1 gap-8">
          <div className="px-10 py-16 hover:bg-gradient-to-tl from-zinc-950 to-zinc-800 rounded-3xl">
            <Image src={"/quote.svg"} alt="" width={43} height={28} />
            <p className="text-lg mb-6 mt-10 leading-10">
              Money is only a tool. It will take you wherever you wish, but it
              will not replace you as the driver.
            </p>
            <div className="flex flex-row gap-4">
              <Image src={"/avatar1.png"} alt="" width={48} height={48} />
              <div>
                <h2 className="text-xl">Herman Jensen</h2>
                <p className="text-zinc-400">Founder & Leader</p>
              </div>
            </div>
          </div>
          <div className="px-10 py-16 hover:bg-gradient-to-tl rounded-3xl from-zinc-950 to-zinc-800">
            <Image src={"/quote.svg"} alt="" width={43} height={28} />
            <p className="text-lg mb-6 mt-10 leading-10">
              Money makes your life easier. If you&apos;re lucky to have it,
              you&apos;re lucky.
            </p>
            <div className="flex flex-row gap-4">
              <Image src={"/avatar2.png"} alt="" width={48} height={48} />
              <div>
                <h2 className="text-xl">Steve Mark</h2>
                <p className="text-zinc-400">Founder & Leader</p>
              </div>
            </div>
          </div>
          <div className="px-10 py-16 hover:bg-gradient-to-tl rounded-3xl from-zinc-950 to-zinc-800">
            <Image src={"/quote.svg"} alt="" width={43} height={28} />
            <p className="text-lg mb-6 mt-10 leading-10">
              It is usually people in the money business, finance, and
              international trade that are really rich.
            </p>
            <div className="flex flex-row gap-4">
              <Image src={"/avatar3.png"} alt="" width={48} height={48} />
              <div>
                <h2 className="text-xl">Kenn Gallagher</h2>
                <p className="text-zinc-400">Founder & Leader</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 place-items-center">
        <Image src={"/airbnb.svg"} alt="" width={193} height={60} />
        <Image src={"/binance.svg"} alt="" width={193} height={60} />
        <Image src={"/coinbase.svg"} alt="" width={193} height={60} />
        <Image src={"/dropbox.svg"} alt="" width={193} height={60} />
      </div>
      <div className="bg-gradient-to-tr from-zinc-950 to-zinc-600 flex flex-col md:flex-row justify-between items-center p-4 gap-4 md:py-20 md:px-28 rounded-xl">
        <div className="flex flex-col gap-6">
          <h1 className="font-semibold text-5xl">Let’s try our service now!</h1>
          <p className="text-lg text-zinc-400">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <button className="bg-gradient-to-tl from-cyan-500 to-cyan-100 rounded-xl w-full md:w-auto">
          <h1 className="my-5 mx-8 font-medium text-lg text-zinc-950">
            Get Started
          </h1>
        </button>
      </div>
    </div>
  );
}
