

"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import navLogo from "../../public/zLogo.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { HiBars3BottomRight } from "react-icons/hi2";

const menuLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Skills",
    link: "/#skills",
  },
  {
    title: "Projects",
    link: "/#projects",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
];

const Navbar = () => {
  const container = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

  const tl = useRef<gsap.core.Timeline>();


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 0.1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  )

  useEffect(() => {
    if (tl.current) { // Check if tl.current is not undefined
      if (isMenuOpen) {
        tl.current.play();
      } else {
        tl.current.reverse();
      }
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY > 90 || window.scrollY === 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    if (window !== undefined) {
      window.addEventListener("scroll", handleShadow);
    }

    return () => {
      window.removeEventListener("scroll", handleShadow);
    };
  }, []);

  return (
    <nav ref={container}>
      <div className={
  shadow
  ? "fixed top-0 left-0 w-[100%] bg-white/50 backdrop-filter rounded-xl backdrop-blur-lg shadow-lg py-[2em] px-[2em] sm:px-[8em] flex justify-between items-center z-[20] ease-in duration-500 "
  : "fixed top-0 left-0 w-[100%] py-[2em] px-[2em] sm:px-[8em] flex justify-between items-center z-[20] "
}>
        <div>
          <Link href="/">
            <Image src={navLogo} alt="Zain's Logo" width={80} height={40} className="h-12 w-8" />
          </Link>
        </div>
        <div onClick={toggleMenu}>
          <p className="cursor-pointer text-4xl"><HiBars3BottomRight /></p>
        </div>
      </div>
      <div className="menu-overlay">
        <div className="flex flex-col justify-evenly items-start sm:py-[2em] sm:px-[6em]">
            <div >
              <Link href="/">
                <Image src={navLogo} alt="Zain's Logo" width={80} height={40} className="h-12 w-8" />
              </Link>
            </div>


          <div className="flex-[2] flex items-end cursor-pointer" onClick={toggleMenu}>
            <p className="text-[50px] font-bold">&#x2715;</p>
          </div>
        </div>
        <div className="flex-[4] flex flex-col justify-evenly sm:items-center pt-[2em]">
          <div>
            {menuLinks.map((link, index) => (
              <div className="menu-link-item" key={index}>
                <div className="menu-link-item-holder" >
                  <Link href={link.link} className="text-[50px] md:text-[80px] 2xl:text-[100px] tracking-[-0.05em] leading-[90%] font-semibold" onClick={toggleMenu} >
                    {link.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div>
            <ul className="flex items-start gap-4 font-medium text-sm 2xl:text-base tracking-tight leading-[60%]">
              <Link onClick={toggleMenu} href={"https://www.linkedin.com/in/mzain-ul-abideen/"}>
                <li className="py-1 ">Linkedin&#8599;</li>
              </Link>
              <Link onClick={toggleMenu} href={"https://github.com/Tufalpha1"}>
                <li className="py-1">Github&#8599;</li>
              </Link>
              <Link onClick={toggleMenu} href={"/#contact"}>
                <li className="py-1">Email&#8599;</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
};


export default Navbar;


// PREVIOUSLY USED CODE


// "use client";
// import React, { useState, useEffect } from "react";
// import navLogo from "../../public/zLogo.png";
// import Image from "next/image";
// import Link from "next/link";
// import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
// import { FaLinkedinIn, FaGithub } from "react-icons/fa";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const [shadow, setShadow] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

  // useEffect(() => {
  //   const handleShadow = () => {
  //     if (window.scrollY > 90 || window.scrollY === 90) {
  //       setShadow(true);
  //     } else {
  //       setShadow(false);
  //     }
  //   };
  //   if (window !== undefined) {
  //     window.addEventListener("scroll", handleShadow);
  //   }

  //   return () => {
  //     window.removeEventListener("scroll", handleShadow);
  //   };
  // }, []);


//   return (
//     <nav
//       className={
//         shadow
//           ? "fixed top-0 w-full h-24 flex items-center justify-center shadow-xl z-[100] ease-in-out duration-300 bg-white/50 backdrop-filter backdrop-blur-lg rounded-lg "
//           : "fixed top-0 w-full  h-24 flex items-center justify-center z-[100]"
//       }
//     >
//       <div className="flex justify-around items-center w-full h-full px-4 2xl:px-16 mt-2 ">
//         <Image
//           src={navLogo}
//           alt="Zain's Logo"
//           width={80}
//           height={40}
//           className="h-12 w-8 mr-32"
//         />
//         <div>
//           <ul className="hidden font-semibold md:flex ">
//             <Link href={"/"} scroll={true}>
//               <li className="ml-10 text-sm hover:border-b hover:border-[#1190CB]">
//                 Home
//               </li>
//             </Link>
//             <Link href={"/#about"} scroll={true}>
//               <li className="ml-10 text-sm hover:border-b hover:border-[#1190CB]">
//                 About
//               </li>
//             </Link>
//             <Link href={"/#skills"} scroll={true}>
//               <li className="ml-10 text-sm hover:border-b hover:border-[#1190CB]">
//                 Skills
//               </li>
//             </Link>
//             <Link href={"/#projects"} scroll={true}>
//               <li className="ml-10 text-sm hover:border-b hover:border-[#1190CB]">
//                 Projects
//               </li>
//             </Link>
//             <Link href={"/#contact"} scroll={true}>
//               <li className="ml-10 text-sm hover:border-b hover:border-[#1190CB]">
//                 Contact
//               </li>
//             </Link>
//           </ul>
//           <div onClick={handleNav} className="md:hidden p-2">
//             <AiOutlineMenu size={25} />
//           </div>
//         </div>
//       </div>
//       <div
//         className={
//           nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-white/30" : ""
//         }
//       >
//         <div
//           className={
//             nav
//               ? "fixed left-0 top-0 w-[100%] h-screen bg-white  p-10 ease-out duration-200"
//               : "fixed left-[-200%] top-0 bottom-0 bg-white p-10 ease-out duration-200"
//           }
//         >
//           <div>
//           <div className="absolute h-full w-full left-0 -z-10 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
//             <div className="flex w-full items-center justify-between">
//               <Image
//                 src={navLogo}
//                 alt="Zain's Logo"
//                 width={80}
//                 height={40}
//                 className="h-12 w-8"
//               />
//               <div
//                 onClick={handleNav}
//                 className="cursor-pointer"
//               >
//                 <AiOutlineClose size={40} />
//               </div>
//             </div>
//             {/* <div className="border-b border-gray-300 my-4 text-center">
//               <p className="w-[100%] py-8 text-xl font-medium bg-gradient-to-br from-black to-stone-500 bg-clip-text text-transparent tracking-tighter">{`Let's build something good together!`}</p>
//             </div> */}
//           </div>
//           <div className="py-12 flex flex-col">
//             <ul className="font-semibold text-4xl tracking-tighter leading-[30%]">
//               <Link onClick={() => setNav(false)} href={"/"}>
//                 <li className="py-4 ">Home</li>
//               </Link>
//               <Link onClick={() => setNav(false)} href={"/#about"}>
//                 <li className="py-4">About</li>
//               </Link>
//               <Link onClick={() => setNav(false)} href={"/#skills"}>
//                 <li className="py-4">Skills</li>
//               </Link>
//               <Link onClick={() => setNav(false)} href={"/#projects"}>
//                 <li className="py-4">Projects</li>
//               </Link>
//               <Link onClick={() => setNav(false)} href={"/#contact"}>
//                 <li className="py-4">Contact</li>
//               </Link>
//             </ul>

//           </div>
//           <div className="pt-6  ">
//             <ul className="flex gap-4 font-medium text-sm tracking-tight leading-[60%]">
//               <Link onClick={() => setNav(false)} href={"https://www.linkedin.com/in/mzain-ul-abideen/"}>
//                 <li className="py-1 ">Linkedin&#8599;</li>
//               </Link>
//               <Link onClick={() => setNav(false)} href={"https://github.com/Tufalpha1"}>
//                 <li className="py-1">Github&#8599;</li>
//               </Link>
//               <Link onClick={() => setNav(false)} href={"/#contact"}>
//                 <li className="py-1">Email&#8599;</li>
//               </Link>
//             </ul>

//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;