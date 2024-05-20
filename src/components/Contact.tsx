"use client";
import React from "react";
import Image from "next/image";
import logo from "../../public/zLogo.png";

const Contact = () => {
  return (
    <section className="relative isolate scroll-mt-24" id="contact">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pt-24 sm:pt-32 lg:static lg:px-8 ">
          <div className="absolute -z-10 inset-0 bg-[linear-gradient(to_right,#80808016_1px,transparent_1px),linear-gradient(to_bottom,#80808016_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_80%_45%_at_50%_50%,#000_80%,transparent_100%)]"></div>
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg lg:mt-20">
            <h2 className="text-4xl sm:text-5xl 2xl:text-6xl font-bold bg-gradient-to-br from-black to-stone-500 bg-clip-text text-transparent tracking-tighter">
              Get in touch
            </h2>
            <p className="my-6 text-sm sm:text-base 2xl:text-lg leading-8 text-gray-900 ">
              {`I am available for freelance work. Contact me and we'll talk.`}
            </p>
            <br />

            <div className="relative w-full lg:max-w-lg flex flex-col items-center justify-center px-4 py-8 sm:px-16 sm:py-16">
              <div className="absolute -bottom-4 sm:-bottom-8 left-8 sm:-left-10 w-36 sm:w-72 h-36 sm:h-72 bg-gradient-to-r from-[#6ed1b2] to-[#33e7ae] rounded-full filter animate-blob animation-delay-4000">
                <div className="absolute -bottom-4 sm:-bottom-8 left-8 sm:-left-10 w-36 sm:w-72 h-36 sm:h-72 bg-gradient-to-r from-[#6ed1b2] to-[#33e7ae] rounded-full opacity-50 filter blur-3xl animate-blob animation-delay-4000"></div>
              </div>
              <div className="absolute top-10 right-4 sm:right-4 lg:-right-14 w-36 sm:w-72 h-36 sm:h-72 bg-gradient-to-r from-[#77bedf] to-[#1190CB]  rounded-full filter animate-blob animation-delay-2000">
                <div className="absolute top-10 right-4 sm:right-4 lg:-right-4 w-36 sm:w-72 h-36 sm:h-72 bg-gradient-to-r from-[#77bedf] to-[#1190CB] rounded-full opacity-50 filter blur-3xl animate-blob animation-delay-2000"></div>
              </div>
              <div className="m-4 sm:m-8">
                <div className="relative space-y-4">
                  <div className="sm:ml-16 p-4 bg-white/0 shadow-2xl backdrop-filter backdrop-blur-lg rounded-lg">
                    <Image
                      className="w-7 h-10 sm:w-10 sm:h-14 mx-auto"
                      src={logo}
                      alt="logo"
                    />
                  </div>
                  <div className="sm:ml-16 p-4 bg-white/0 shadow-2xl backdrop-filter backdrop-blur-lg rounded-lg text-center">
                    <h2 className="text-2xl font-bold sm:text-4xl bg-gradient-to-br from-black to-stone-500 bg-clip-text text-transparent tracking-tighter">
                      {`Open for opportunities!`}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form
          action="https://getform.io/f/f8164cef-4da3-4cb8-85c4-8fdf5384983c"
          method="POST"
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  First Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6dd5ed] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Last Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    required
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6dd5ed]  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Company
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6dd5ed]  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6dd5ed]  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Phone Number
                </label>
                <div className="mt-2.5">
                  <input
                    type="number"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6dd5ed]  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#6dd5ed]  sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="text-white block w-full bg-black hover:bg-black/70 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-gray-400  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                {`Let's talk`}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
