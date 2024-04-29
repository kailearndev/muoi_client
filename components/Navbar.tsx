"use client";

import Image from "next/image";
import React from "react";

const Navbar: React.FC<{}> = () => {
  return (
    <div className="w-full h-[75px] bg-['#111'] fixed backdrop-blur-sm z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="/" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/muoine.png"
            alt="logo"
            width={100}
            height={100}
            sizes="80vw"
            className="w-full h-auto"
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
