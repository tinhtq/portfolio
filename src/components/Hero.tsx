"use client";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section id="home" className="w-full h-screen text-center relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808016_1px,transparent_1px),linear-gradient(to_bottom,#80808016_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_80%_45%_at_50%_50%,#000_80%,transparent_100%)]"></div>
      <div className="relative isolate px-6 pt-6 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1190CB] to-[#43cea2] opacity-25 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
      <motion.div
        className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="z-0 mx-auto max-w-6xl pt-16 sm:pt-40 2xl:pt-20 sm:max-w-4xl ">
          <h1 className="text-5xl sm:text-[5rem] 2xl:text-8xl py-2 md:py-4 bg-gradient-to-br from-black to-stone-500 bg-clip-text text-transparent tracking-tighter">
            Hi, I&#39;m Zain
          </h1>
          <h1 className="text-5xl sm:text-[5rem] 2xl:text-8xl md:py-2 bg-gradient-to-br from-black to-stone-500 bg-clip-text text-transparent tracking-tighter">
            A Full Stack Web Developer and a Security Researcher
            <span className="linear-wipe">.</span>
          </h1>
          <p className="p-4  text-black sm:max-w-[70%] m-auto text-sm sm:text-base 2xl:text-lg">
            I’m focused on building responsive frontend web applications with a
            keen UI/UX interest, integrating backend technologies. I also like
            to play CTFs.
          </p>
          <div className="flex items-center justify-evenly max-w-[330px] m-auto py-4">
            <Link
              href="https://www.linkedin.com/in/mzain-ul-abideen/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-100 bg-white">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link
              href="https://github.com/Tufalpha1"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-100 bg-white">
                <FaGithub />
              </div>
            </Link>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-100 bg-white">
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
      </motion.div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(30%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#43cea2] to-[#1190CB] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </section>
  );
};
