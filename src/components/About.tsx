"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import about from "../../public/assets/about.svg";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full md:h-screen my-44 sm:my-20 2xl:my-10 flex items-center scroll-mt-20"
    >
      <div className="absolute inset-0 -z-10 h-screen w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 px-8">
          <p className="uppercase text-xl 2xl:text-2xl text-[#1190CB]">
            About me
          </p>
          <h2 className="py-4 text-4xl sm:text-5xl 2xl:text-6xl bg-gradient-to-br from-black to-stone-500 bg-clip-text text-transparent tracking-tighter">
            Who I Am
          </h2>
          <div className="py-2 text-black text-sm sm:text-base">
            <p>
              I am a DevSecOps Engineer. Dedicated to building secure,
              efficient, and scalable systems. Proven experience in
              infrastructure automation, CI/CD pipelines, and monitoring.
              Passionate about continuous learning and tackling complex
              challenges.
            </p>
            <p className="mt-4 font-extrabold text-sm sm:text-base">
              I specialize in:
            </p>
            <div className="text-sm sm:text-base text-gray-700">
              <p>• Monitoring & Observability</p>
              <p>• Infrastructure as Code (CloudFormation, CDK, Terraform)</p>
              <p>
                • DevSecOps Pipeline (GitHub Action, GitLab CI, AWS
                Codepipeline)
              </p>
              <p>
                • DevSecOps Pipeline (GitHub Action, GitLab CI, AWS
                Codepipeline)
              </p>
            </div>
          </div>
          <Link href="/#projects">
            <div className="py-12">
              <div className="grid gap-8 items-start sm:justify-start justify-center">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#43cea2] to-[#1190CB] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <button className="relative px-7 py-4 bg-white rounded-lg leading-none flex divide-x divide-gray-600">
                    <span className="text-black group-hover:text-gray-600 transition duration-75 text-xs sm:text-sm">
                      Check out some of my projects &rarr;
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-100">
          <Image
            src={about}
            className="rounded-xl"
            alt="/"
            width={500}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
