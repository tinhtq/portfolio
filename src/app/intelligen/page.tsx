import React from "react";
import Link from "next/link";
import Image from "next/image";
import intelligenImg from "../../../public/assets/projects/intelligen.png";
import Next from "../../../public/assets/skills/nextjs.png";
import Tailwind from "../../../public/assets/skills/tailwind.png";
import planetScale from "../../../public/assets/skills/planet-scale.png";
import stripe from "../../../public/assets/skills/stripe.png";
import prisma from "../../../public/assets/skills/prisma.png";
import clerk from "../../../public/assets/skills/clerk.png";

const page = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={intelligenImg}
          alt="/"
        />
        <div className="tracking-tighter absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 sm:text-5xl">Full Stack AI Website</h2>
          <h3 className="sm:text-2xl">Next JS / Tailwind / Stripe / MySQL</h3>
        </div>
      </div>
      <div className="bg-[#c73636] px-4 py-3 text-white">
        <p className="text-center text-sm font-medium">
          Heads up! Due to OpenAI and Replica API limit being exceeded,{" "}
          <span className="underline">{`You won't be able to generate any content.`}</span>{" "}
          You can still view the website and its features.
        </p>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 w-full py-8">
        <div className="col-span-4 text-center">
          <p className="uppercase text-xl text-center text-[#1190CB] pt-4">
            Project
          </p>
          <h2 className="text-center py-6 sm:text-4xl tracking-tighter">
            Overview
          </h2>
          <p className="text-sm sm:text-base">
            IntelliGen is an AI-powered Software as a Service (SaaS) platform
            designed to empower businesses and individuals with the creative
            potential of artificial intelligence. IntelliGen harnesses the
            latest advancements in AI technology to generate a wide range of
            creative content, including images, videos, code, text, and music.
          </p>
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              className="text-white bg-[#36b49f] hover:bg-[#4fc2af]  focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:focus:ring-emerald-800 shadow-lg shadow-emerald-500/50 dark:shadow-lg dark:shadow-emerald-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              <Link href="https://github.com/Tufalpha1/IntelliGen">Code</Link>
            </button>
            <button className="text-black bg-[#DBFF75] hover:bg-[#cde785] border border-[#bfe74f] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-emerald-400 dark:focus:ring-emerald-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              <Link href="https://intelligen.vercel.app/">Demo</Link>
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
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-y-10 sm:max-w-xl sm:grid-cols-6 lg:mx-0 lg:max-w-none cursor-pointer">
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
              src={Tailwind}
              alt="tailwind"
              width={158}
              height={48}
            />
          </div>
          <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center">
            <Image
              className="col-span-2 col-start-2 max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={stripe}
              alt="stripe"
              width={158}
              height={48}
            />
          </div>
          <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center">
            <Image
              className="col-span-2 col-start-2 max-h-14 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={prisma}
              alt="prisma"
              width={158}
              height={48}
            />
          </div>
          <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center">
            <Image
              className="col-span-2 col-start-2 max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={planetScale}
              alt="planet-scale"
              width={158}
              height={48}
            />
          </div>
          <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center">
            <Image
              className="col-span-2 col-start-2 max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1"
              src={clerk}
              alt="clerk-authentication"
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
