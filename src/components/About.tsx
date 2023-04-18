import { Send, ShieldCheck, Star } from "lucide-react";
import React from "react";

import { Abel } from "next/font/google";

const abel = Abel({
  weight: "400",
  subsets: ["latin"],
});

export default function About() {
  return (
    <div className="flex md:flex-row flex-col gap-10">
      <aside className="flex flex-col  justify-around items-start">
        <h1 className="font-semibold text-5xl flex flex-col md:gap-8">
          You do the business,
          <span>we’ll handle the money.</span>
        </h1>
        <p className="text-zinc-400 text-lg mt-6 mb-12" style={abel.style}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <div className="w-full flex justify-start">
          <button className="bg-gradient-to-tl from-cyan-500 to-cyan-100 rounded-xl w-full md:w-auto">
            <h1 className="my-5 mx-8 font-medium text-lg text-zinc-950">
              Get Started
            </h1>
          </button>
        </div>
      </aside>
      <aside>
        <div className="flex h-28 items-center rounded-3xl py-6 px-5 gap-5 hover:bg-gradient-to-tl from-zinc-950 to-zinc-800">
          <div className="rounded-full bg-cyan-900/20 p-4">
            <Star size={32} fill="rgb(34, 211, 238)" strokeWidth={0} />
          </div>
          <div>
            <h1 className="font-semibold text-lg">Rewards</h1>
            <p className="text-zinc-400">
              The best credit cards offer some tantalizing combinations of
              promotions and prizes
            </p>
          </div>
        </div>
        <div className="flex h-28 items-center rounded-3xl py-6 px-5 gap-5 hover:bg-gradient-to-tl from-zinc-950 to-zinc-800">
          <div className="rounded-full bg-cyan-900/20 p-4">
            <ShieldCheck size={32} fill="rgb(34, 211, 238)" stroke="#000" />
          </div>
          <div>
            <h1 className="font-semibold text-lg">100% Secured</h1>
            <p className="text-zinc-400">
              We take proactive steps make sure your information and
              transactions are secure.
            </p>
          </div>
        </div>
        <div className="flex h-28 items-center rounded-3xl py-6 px-5 gap-5 hover:bg-gradient-to-tl from-zinc-950 to-zinc-800">
          <div className="rounded-full bg-cyan-900/20 p-4">
            <Send size={32} fill="rgb(34, 211, 238)" strokeWidth={0} />
          </div>
          <div>
            <h1 className="font-semibold text-lg">Balance Transfer</h1>
            <p className="text-zinc-400">
              A balance transfer credit card can save you a lot of money in
              interest charges.
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
