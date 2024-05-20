import Link from "next/link";

export default function NotFound() {
  return (
    <div className="my-28 sm:my-32 mt-48 flex flex-col items-center justify-center md:mt-72 md:flex-row md:space-x-6">
      <div className="pb-4 pt-6 md:space-y-5">
        <h1 className="py-4 text-6xl font-extrabold leading-9 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-black to-stone-500 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
          404
        </h1>
      </div>
      <div className="max-w-md text-center md:text-left">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl tracking-tighter">
          {`Sorry, The page you were looking for doesn't exist.`}
        </p>
        <Link
          href="/"
          className="uppercase focus:shadow-outline-blue inline rounded-lg border border-transparent bg-[#1190CB] px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-[#43cea2] focus:outline-none dark:hover:bg-[#43cea2]"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  );
}
