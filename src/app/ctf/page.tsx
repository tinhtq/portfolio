import React from "react";
import Link from "next/link";
import Image from "next/image";
import ctfImg from "../../../public/assets/projects/ctf-scoreboard.png";
import firstBlood from "../../../public/assets/projects/first-blood.png";
import newLeader from "../../../public/assets/projects/new-leader.png";
import ctf from "../../../public/assets/projects/ctf.png";
import winner from "../../../public/assets/projects/winner.png";
import winner2 from "../../../public/assets/projects/winner-2.png";
import winner3 from "../../../public/assets/projects/winner-3.png";

const page = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={ctfImg}
          alt="/"
        />
        <div className="tracking-tighter absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 sm:text-5xl ">CTF Scoreboard</h2>
          <h3 className="sm:text-2xl">Next JS / Express</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 w-full py-8">
        <div className="col-span-4 text-center">
          <p className="uppercase text-xl text-center text-[#1190CB] pt-4">
            Project
          </p>
          <h2 className="py-6 tracking-tighter sm:text-4xl">Overview</h2>
          <p className="text-center text-sm sm:text-base">
            This is a scoreboard for the on-site CTF competition that shows the
            top 10 teams and their scores. It also shows the latest challenges
            solved. There are two alerts, one for the first blood and the other
            for the new leader.
          </p>
          <div className="mt-10 flex justify-center">
            <button className="text-black font-bold bg-gradient-to-r from-[#FFDD00] to-[#FBB034] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              <Link href="https://github.com/Tufalpha1/PCC-Frontend">Code</Link>
            </button>
            <button className="text-white bg-gray-900 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
              <Link href="/#projects">
                <p className="">Back</p>
              </Link>
            </button>
          </div>
        </div>
        <h2 className="text-center py-4 mt-16 sm:text-4xl tracking-tighter">
          More Snaps
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-y-10 gap-8 sm:max-w-xl lg:grid-cols-3 lg:mx-0 lg:max-w-none cursor-pointer">
          <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center rounded-xl shadow-xl shadow-gray-700">
            <Image
              className="col-span-1 max-h-full w-full object-cover sm:col-start-2 rounded-xl"
              src={firstBlood}
              alt="first-blood"
              width={700}
              height={700}
            />
          </div>
          <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center rounded-xl shadow-xl shadow-gray-700">
            <Image
              className="col-span-1 col-start-2 max-h-full w-full object-cover sm:col-start-auto rounded-xl"
              src={ctf}
              alt="Leaderboard-and-solves"
              width={700}
              height={700}
            />
          </div>
          <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center rounded-xl shadow-xl shadow-gray-700">
            <Image
              className="col-span-1 col-start-2 max-h-full w-full object-cover sm:col-start-auto rounded-xl"
              src={newLeader}
              alt="new-leader"
              width={700}
              height={700}
            />
          </div>
          <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center rounded-xl shadow-xl shadow-gray-700">
            <Image
              className="col-span-1 max-h-full w-full object-cover sm:col-start-2 rounded-xl"
              src={winner2}
              alt="winner-2"
              width={1868}
              height={1030}
            />
          </div>
          <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center rounded-xl shadow-xl shadow-gray-700">
            <Image
              className="col-span-1 col-start-2 max-h-full w-full object-cover sm:col-start-auto rounded-xl"
              src={winner}
              alt="winner-1"
              width={1850}
              height={1071}
            />
          </div>
          <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center rounded-xl shadow-xl shadow-gray-700">
            <Image
              className="col-span-1 col-start-2 max-h-full w-full object-cover sm:col-start-auto rounded-xl"
              src={winner3}
              alt="winner-3"
              width={1846}
              height={1006}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
