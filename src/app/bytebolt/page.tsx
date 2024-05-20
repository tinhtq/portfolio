import React from "react";
import Link from "next/link";
import Image from "next/image";
import byteboltImg from "../../../public/assets/projects/byteboltsec.png";
import Next from "../../../public/assets/skills/nextjs.png";
import Tailwind from "../../../public/assets/skills/tailwind.png";
import Stripe from "../../../public/assets/skills/stripe.png";
import react from "../../../public/assets/skills/react.png";
import motion from "../../../public/assets/skills/motion.png"

const page = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={byteboltImg}
          alt="/"
        />
        <div className="tracking-tighter absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 sm:text-5xl">ByteBoltSec</h2>
          <h3 className="sm:text-2xl">Next JS / Tailwind / Framer Motion</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 w-full py-8">
        <div className="col-span-4">
          <p className="uppercase text-xl text-center text-[#1190CB] pt-4">
            Project
          </p>
          <h2 className="text-center py-6 sm:text-4xl tracking-tighter">
            Overview
          </h2>
          <p className="text-center text-sm sm:text-base">
            This landing page was built for ByteBoltSec which is a startup that
            I am currently working in. The landing page was built using Next JS.
            Tailwind css was used for styling and Framer Motion was used for
            animations. Overall it is simplistic and modern.
          </p>
          <div className="mt-10 flex justify-center">
            <button className="text-black bg-gradient-to-r from-[#FFDD00] to-[#FBB034] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              <Link href="https://byteboltsec.com">Demo</Link>
            </button>
            <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
              <Link href="/#projects">
                <p className="">Back</p>
              </Link>
            </button>
          </div>
        </div>
        <h2 className="text-center py-4 mt-16 sm:text-4xl tracking-tighter">
          Technologies
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-0 lg:mx-0 lg:max-w-none cursor-pointer">
          <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center">
            <Image
              className="col-span-2 max-h-16 w-full object-contain sm:col-start-2 lg:col-span-1"
              src={Next}
              alt="next"
              width={158}
              height={48}
            />
          </div>
          <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center">
            <Image
              className="col-span-2 col-start-2 max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={react}
              alt="react"
              width={158}
              height={48}
            />
          </div>
          <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center">
            <Image
              className="col-span-2 col-start-2 max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={Tailwind}
              alt="tailwind"
              width={158}
              height={48}
            />
          </div>
          <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center">
            <Image
              className="col-span-2 col-start-2 max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={motion}
              alt="motion"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
