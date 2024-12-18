import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed -left-2 -bottom-2 flex items-center justify-center md:right-8 md:left-auto md:-top-12 md:bottom-auto md:absolute sm:right-0">
      <div className="w-48 h-48 flex items-center justify-center relative md:w-28">
        {/* Rotating Circular Text */}
        <div className="absolute animate-spin-slow">
          <CircularText className="fill-dark" />
        </div>
        {/* Static "Hire Me" Button */}
        <Link
          href="mailto:adityapateriya7986@gmail.com"
          className="flex items-center justify-center
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md
          border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark
          dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
          md:w-12 md:h-12 md:text-[10px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;