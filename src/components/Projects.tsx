"use client";
import React from "react";
import ProjectItem from "./ProjectItem";
import siliconVillage from "../../public/assets/projects/silicon-village.png";
import quickJourney from "../../public/assets/projects/quick-journey.png";
import byteboltImg from "../../public/assets/projects/byteboltsec.png";
import creativeMedia from "../../public/assets/projects/creative-media-partners.png";
import aucssImg from "../../public/assets/projects/aucss.png";
import intelligenImage from "../../public/assets/projects/intelligen.png";
import decentraConnect from "../../public/assets/projects/decentra-connect.png";
import ctf from "../../public/assets/projects/ctf-scoreboard.png";
import DesignItem from "./DesignItem";
import ProjectItem2 from "./ProjectItem2";

const Projects = () => {
  return (
    <section id="projects" className="w-full scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-2 py-24">
        <p className="text-xl 2xl:text-2xl uppercase text-[#1190CB] text-center">Projects</p>
        <h2 className="py-8 text-center text-4xl sm:text-5xl 2xl:text-6xl bg-gradient-to-br from-black to-stone-500 bg-clip-text text-transparent tracking-tighter">
          What I&apos;ve Built
        </h2>

        <div className="grid md:grid-cols-2 gap-8 py-8 sm:py-20">
          <ProjectItem
            title="Silicon Village"
            backgroundImg={siliconVillage}
            projectUrl="/siliconvillage"
            tech="Next JS"
          />
          <ProjectItem2
            title="Quick Journey"
            backgroundImg={quickJourney}
            projectUrl="/quickjourney"
            tech="Next JS"
          />
          <DesignItem
            title="DecentraConnect"
            backgroundImg={decentraConnect}
            projectUrl="/decentraconnect"
            tech="Next JS / Express / IPFS"
          />
          <ProjectItem2
            title="CTF Scoreboard"
            backgroundImg={ctf}
            projectUrl="/ctf"
            tech="Next JS"
          />
          <ProjectItem2
            title="Marketing Agency Website"
            backgroundImg={creativeMedia}
            projectUrl="/creativemedia"
            tech="Next JS"
          />
          <ProjectItem
            title="IntelliGen Full Stack Website"
            backgroundImg={intelligenImage}
            projectUrl="/intelligen"
            tech="Next JS"
          />
          <ProjectItem2
            title="ByteBoltSec Landing Page"
            backgroundImg={byteboltImg}
            projectUrl="/bytebolt"
            tech="Next JS"
          />
          <ProjectItem
            title="AUCSS Website"
            backgroundImg={aucssImg}
            projectUrl="/aucss"
            tech="Next JS"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
