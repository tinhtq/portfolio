import React from "react";
import Link from "next/link";
import Image from "next/image";
import dexhubImg from "../../../public/assets/designs/dexhub.png";
import DEX2 from "../../../public/assets/designs/DEX-2.png";
import DEX3 from "../../../public/assets/designs/DEX-3.png";
import DEX4 from "../../../public/assets/designs/DEX-4.png";

const page = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={dexhubImg}
          alt="/"
        />
        <div className="tracking-tighter absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 sm:text-5xl">Decentralized Exchange UI</h2>
          <h3 className="sm:text-2xl">Figma</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 w-full py-8">
        <div className="col-span-4 text-center">
          <p className="uppercase text-xl text-center text-[#1190CB] pt-4">
            Design
          </p>
          <h2 className="py-6 sm:text-4xl tracking-tighter">Overview</h2>
          <p className="text-center text-sm sm:text-base">
            This is a design created for a decentralized exchange platform that
            was based upon uniswap v3. The design was created using Figma.
          </p>
          <div className="mt-10 flex justify-center">
            <button className="text-white bg-gradient-to-r from-[#42E0BB] via-emerald-500 to-[#1D84E2] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              <Link href="https://www.figma.com/file/LHkvfqPvyPBfKbdY9xn4Jn/DEXHub?type=design&node-id=7196-94&mode=design&t=XR00ardHCCK2LtWU-0">
                Figma file
              </Link>
            </button>
            <button className="text-white bg-gray-900 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
              <Link href="/#projects">
                <p className="">Back</p>
              </Link>
            </button>
          </div>
        </div>
        <h2 className="text-center py-4 mt-16">More Snaps</h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-y-10 gap-8 sm:max-w-xl lg:grid-cols-3 lg:mx-0 lg:max-w-none cursor-pointer">
          <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center rounded-xl shadow-xl shadow-gray-700">
            <Image
              className="col-span-1 max-h- w-full object-cover sm:col-start-2 rounded-xl"
              src={DEX2}
              alt="about"
              width={500}
              height={500}
            />
          </div>
          <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center rounded-xl shadow-xl shadow-gray-700">
            <Image
              className="col-span-1 col-start-2 max-h- w-full object-cover sm:col-start-auto rounded-xl"
              src={DEX4}
              alt="liquidity pool features"
              width={500}
              height={500}
            />
          </div>
          <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center rounded-xl shadow-xl shadow-gray-700">
            <Image
              className="col-span-1 col-start-2 max-h- w-full object-cover sm:col-start-auto rounded-xl"
              src={DEX3}
              alt="features"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
