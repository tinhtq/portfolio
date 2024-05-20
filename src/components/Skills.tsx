"use client";
import Image from "next/image";
import Html from "../../public/assets/skills/html.png";
import Css from "../../public/assets/skills/css.png";
import Javascript from "../../public/assets/skills/javascript.png";
import ReactImg from "../../public/assets/skills/react.png";
import Tailwind from "../../public/assets/skills/tailwind.png";
import NextJS from "../../public/assets/skills/nextjs.png";
import NodeJS from "../../public/assets/skills/node.png";
import Mysql from "../../public/assets/skills/mysql.png";
import Mongodb from "../../public/assets/skills/mongo.png";
import Express from "../../public/assets/skills/express.png";
import Figma from "../../public/assets/skills/figma.png";
import Docker from "../../public/assets/skills/docker.png";
import Git from "../../public/assets/skills/git.png";
import Postman from "../../public/assets/skills/postman.png";
import Typescript from "../../public/assets/skills/typescript.png";

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full lg:h-screen px-2 relative scroll-mt-20"
    >
      <div className="absolute z-[-200] w-[60%] h-[60%] -left-[40%] top-[-20%] rounded-full blue__gradient bottom-40 overflow-hidden" />
      <div className="py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="uppercase text-xl 2xl:text-2xl text-center text-[#1190CB]">Skills</p>
          <h2 className="text-center text-4xl sm:text-5xl 2xl:text-6xl py-4 bg-gradient-to-br from-black to-stone-500 bg-clip-text text-transparent tracking-tighter">
            What I can do
          </h2>
          <div className="mx-auto mt-20 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-0  lg:mx-0 lg:max-w-none lg:grid-cols-5 cursor-pointer">
            <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center">
              <Image
                className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                src={Html}
                alt="Html"
                width={168}
                height={48}
              />
            </div>
            <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center">
              <Image
                className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                src={Css}
                alt="css"
                width={158}
                height={48}
              />
            </div>
            <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center">
              <Image
                className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                src={Javascript}
                alt="javascript"
                width={158}
                height={48}
              />
            </div>
            <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center">
              <Image
                className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                src={Typescript}
                alt="typescript"
                width={158}
                height={48}
              />
            </div>
            <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center">
              <Image
                className="col-span-2 max-h-16 w-full object-contain sm:col-start-2 lg:col-span-1"
                src={ReactImg}
                alt="react"
                width={158}
                height={48}
              />
            </div>
            <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center">
              <Image
                className="col-span-2 col-start-2 max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1"
                src={NextJS}
                alt="nextjs"
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
                src={Figma}
                alt="figma"
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
                className="col-span-2 col-start-2 max-h-20 w-full object-contain sm:col-start-auto lg:col-span-1"
                src={Mysql}
                alt="mysql"
                width={158}
                height={48}
              />
            </div>
            <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center">
              <Image
                className="col-span-2 col-start-2 max-h-14 w-full object-contain sm:col-start-auto lg:col-span-1"
                src={Mongodb}
                alt="mongodb"
                width={158}
                height={48}
              />
            </div>
            <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center">
              <Image
                className="col-span-2 col-start-2 max-h-20 w-full object-contain sm:col-start-auto lg:col-span-1"
                src={Express}
                alt="express"
                width={158}
                height={48}
              />
            </div>
            <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center">
              <Image
                className="col-span-2 col-start-2 max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1"
                src={Docker}
                alt="docker"
                width={158}
                height={48}
              />
            </div>
            <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center">
              <Image
                className="col-span-2 col-start-2 max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1"
                src={Git}
                alt="git"
                width={158}
                height={48}
              />
            </div>
            <div className="hover:scale-105 ease-in duration-100 flex flex-col items-center">
              <Image
                className="col-span-2 col-start-2 max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1"
                src={Postman}
                alt="postman"
                width={158}
                height={48}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Skills;
