"use client";
import React, { useRef } from "react";
import Image from "next/image";
import airoverflow from "../../public/assets/experience/Airoverflow-logo.png";
import aucss from "../../public/assets/experience/AUCSS-Logo.png";
import xgrid from "../../public/assets/experience/Xgrid_logo.png";
import cysecops from "../../public/assets/experience/Cysecops-logo.png";
import bytebolt from "../../public/assets/experience/Byte-Bolt-logo.png";

const Experience = () => {
  return (
    <section className="relative isolate pt-48" id="experience">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <p className="text-xl 2xl:text-2xl uppercase text-[#1190CB] text-center my-4">
        Experience
      </p>
      <h2 className="max-w-lg sm:max-w-xl mb-6 mx-auto text-4xl sm:text-5xl 2xl:text-6xl font-bold text-center leading-none bg-gradient-to-br from-black to-stone-500 bg-clip-text text-transparent md:mx-auto tracking-tighter">
        Where I have worked
      </h2>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4">
        <div className="grid max-w-2xl mx-auto">
          <div className="flex">
            <div className="flex flex-col items-center mr-6">
              <div className="w-px h-10 sm:h-full" />
              <div>
                <div className="flex items-center justify-center w-8 h-8  text-sm font-medium border rounded-full text-white bg-black">
                  1
                </div>
              </div>
              <div className="w-px h-full bg-gray-400" />
            </div>
            <div className="flex flex-col sm:items-center sm:flex-row py-16">
              <div className="sm:mr-5 sm:my-12">
                <Image
                  className="flex items-center justify-center w-16 h-24 my-3 sm:w-24 sm:ml-3 sm:pr-3 rounded-full"
                  src={bytebolt}
                  alt="byte-bolt-logo"
                  width={2560}
                  height={1440}
                />
              </div>
              <div className="fade">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  ByteBoltSec
                </h2>
                <p className="text-base sm:text-lg font-bold">
                  Full Stack Developer (Nov 2023 - Present)
                </p>

                <p className="text-sm sm:text-base">
                  • Working on multiple development projects.
                </p>
                <p className="text-sm sm:text-base">
                  • Designed frontend and challenges for PCC CTF 2023.
                </p>
                <p className="text-sm sm:text-base">
                  • Learning and contributing to various aspects of web
                  applications and security engineering.
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-6">
              <div className="w-px h-10 bg-gray-400 sm:h-full" />
              <div>
                <div className="flex items-center justify-center w-8 h-8 text-sm font-medium border rounded-full bg-black text-white ">
                  2
                </div>
              </div>
              <div className="w-px h-full bg-gray-400" />
            </div>
            <div className="flex flex-col sm:items-center sm:flex-row py-16">
              <div className="sm:mr-5 sm:my-12">
                <Image
                  className="flex items-center justify-center w-20 h-20 my-3 rounded-full"
                  src={aucss}
                  alt="aucss-logo"
                />
              </div>
              <div className="fade">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Air University Cyber Security Society
                </h2>
                <p className="text-base sm:text-lg font-bold">
                  {`Developer's`} Club Lead (Dec 2022- Dec 2023)
                </p>
                <p className="text-sm sm:text-base">
                  • Designed and developed aucss official website.
                </p>
                <p className="text-sm sm:text-base">
                  • Organized and coordinated numerous technical events.
                </p>
                <p className="text-base sm:text-lg mt-2 font-bold">
                  Event Management Team Member (Dec 2021 - Dec 2022)
                </p>
                <p className="text-sm sm:text-base">• Usher for ICCWS 2022.</p>
                <p className="text-sm sm:text-base">
                  • Hosted welcome parties of multiple batches.
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-6">
              <div className="w-px h-10 bg-gray-400 sm:h-full" />
              <div>
                <div className="flex items-center justify-center w-8 h-8 text-sm font-medium border rounded-full text-white bg-black">
                  3
                </div>
              </div>
              <div className="w-px h-full bg-gray-400" />
            </div>
            <div className="flex flex-col sm:items-center sm:flex-row py-16">
              <div className="sm:mr-5 sm:my-6">
                <Image
                  className="flex items-center justify-center w-20 h-20 my-3 rounded-full"
                  src={xgrid}
                  alt="xgrid-logo"
                />
              </div>
              <div className="fade">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Xgrid
                </h2>
                <p className="text-base sm:text-lg font-bold">
                  Project Intern (May 2023 - Sep 2023)
                </p>
                <p className="text-sm sm:text-base">
                  • Development of my Final Year Project {`'DecentraConnect'`}.
                </p>
                <p className="text-sm sm:text-base">
                  • Designed the UI/UX of DecentraConnect.
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-6">
              <div className="w-px h-10 bg-gray-400 sm:h-full" />
              <div>
                <div className="flex items-center justify-center w-8 h-8 text-sm font-medium border rounded-full text-white bg-black">
                  4
                </div>
              </div>
              <div className="w-px h-full opacity-0" />
            </div>
            <div className="flex flex-col sm:items-center sm:flex-row py-16">
              <div className="sm:mr-5 sm:my-6">
                <Image
                  className="flex items-center justify-center w-20 h-20 my-3 rounded-full"
                  src={cysecops}
                  alt="cysecops-logo"
                />
              </div>
              <div className="fade">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  CySecOps
                </h2>
                <p className="text-base sm:text-lg font-bold">
                  Web Development Intern (Feb 2023 - May 2023)
                </p>
                <p className="text-sm sm:text-base">
                  • Completed multiple web development projects.
                </p>
                <p className="text-sm sm:text-base">
                  • Trained two junior interns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="pointer-events-none absolute right-12 top-1/2 -z-5 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:right-60 lg:translate-y-0 lg:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#1190CB] to-[#43cea2] opacity-0 sm:opacity-25"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </section>
  );
};

export default Experience;
