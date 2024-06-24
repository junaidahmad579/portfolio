"use client";

import { TypewriterEffect } from "./ui/typewriter-effect"; 

export function TypewriterEffectHeading() {
  const words = [
    {
      text: "I",
    },
    {
      text: "am",
    },
    {
        text: "a",
      },
    {
      text: "Full",
    },
    {
      text: "Stack",
    },
    {
      text: "Developer",
      className: "text-purple-500 dark:text-purple-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center ">
      
      <TypewriterEffect words={words} />
      {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-2">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm fixed">
          Contact now
        </button>
      </div> */}
      {/* <p className="text-neutral-600 dark:text-neutral-200 text-base mb-10">
       Creating seamless and innovative digital solutions

      </p> */}
    </div>
  );
}
