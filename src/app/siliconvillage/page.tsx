import React from "react";
import Link from "next/link";
import Image from "next/image";
import siliconVillage from "../../../public/assets/projects/silicon-village.png";
import Tailwind from "../../../public/assets/skills/tailwind.png";
import NodeJS from "../../../public/assets/skills/node.png";
import nextjs from "../../../public/assets/skills/nextjs.png";
import framer from "../../../public/assets/skills/motion.png";

const page = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={siliconVillage}
          alt="/"
        />
        <div className="tracking-tighter absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 sm:text-5xl">Silicon Village Pakistan Website</h2>
          <h3 className="sm:text-2xl">Next JS / Node JS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 w-full py-8">
        <div className="col-span-4 text-center">
          <p className="uppercase text-xl text-center text-[#1190CB] pt-4">
            Project
          </p>
          <h2 className="py-6 sm:text-4xl tracking-tighter">Overview</h2>
          <p className="text-center text-sm sm:text-base">
            {`This is a website created for Silicon Village Pakistan which is the
            first and largest tech hub in Pakistan.
             The website is built using Next JS with multiple UI components and animations.
             Different libraries such as Tailwind CSS, Framer Motion, and Three JS are used in the project.`}
          </p>
          <div className="mt-10 flex justify-center">
            <button className="text-slate-50 font-bold bg-gradient-to-r from-[#40e0d0] via-[#55dada] to-[#1d3463] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              <Link href="https://silicon-village.vercel.app">Demo</Link>
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
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-md sm:grid-cols-4 sm:gap-x-0 lg:mx-auto lg:max-w-lg  cursor-pointer">
          <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center">
            <Image
              className="col-span-2 max-h-16 w-full object-contain sm:col-start-2 lg:col-span-1"
              src={nextjs}
              alt="next"
              width={158}
              height={48}
            />
          </div>
          <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center">
            <Image
              className="col-span-2 col-start-2 max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={NodeJS}
              alt="nodejs"
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
              src={framer}
              alt="framer-motion"
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
