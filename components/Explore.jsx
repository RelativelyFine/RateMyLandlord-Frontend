import React from "react";
import Link from "next/link";

const Explore = () => {
  return (
    <div>
      <div className="w-full pb-[5em] bg-[#3C3C3C] justify-center flex-col ">
        <div className="py-20 not-italic font-normal text-white text-5xl text-center md:text-7xl">
          Explore Rentals
        </div>
        <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-[5em] px-12 content-center">
          <Link href="/">
            <div className="p-4 bg-rec1 bg-cover text-center md:text-3xl xl:text-5xl rounded-3xl min-w-[256px] min-h-[352px] h-[30vw] w-[22vw] justify-self-center text-white transition px-3 transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
              Apartment
            </div>
          </Link>
          <Link href="/">
            <div className="p-4 bg-rec2 bg-cover text-center md:text-3xl xl:text-5xl rounded-3xl min-w-[256px] min-h-[352px] h-[30vw] w-[22vw] justify-self-center text-white transition px-3 transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
              Townhouse
            </div>
          </Link>
          <Link href="/">
            <div className="p-4 bg-rec3 bg-cover text-center md:text-3xl xl:text-5xl rounded-3xl min-w-[256px] min-h-[352px] h-[30vw] w-[22vw] justify-self-center text-white transition px-3 transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
              Condo/ House
            </div>
          </Link>
        </div>
      </div>
      <div className="w-full pb-[5em] bg-[#3C3C3C] justify-center">
        <div className="py-10 not-italic font-normal text-white text-4xl text-center md:text-6xl">
          Near You
        </div>
        <div className="flex justify-center flex-row">
          <div className="relative left-5 p-4 bg-nearyou bg-cover text-center md:text-3xl xl:text-5xl rounded-l-3xl min-w-[256px] min-h-[352px] h-[30vw] w-[40vw] justify-self-center"></div>

          <div className="relative right-5 bg-gradient-to-r from-transparent to-[#e7e7e7] min-h-[352px] h-[30vw] w-[1vw] justify-self-center"></div>
          <div className="relative right-5 p-4 bg-[#e7e7e7] rounded-r-3xl min-w-[256px] min-h-[352px] h-[30vw] w-[35vw] justify-self-center">
            <div className="flex text-1xl md:text-[2vw] py-2 text-[#000000ee]">
              19 Princess Street
            </div>
            <div className="flex text-2xl md:text-[2.7vw] md:pb-[1vw]">
              4 Bedroom,
            </div>
            <div className="flex text-2xl md:text-[2.7vw]">
              Cozy family house
            </div>
            <div className="flex text-1xl md:text-[2vw] py-3 italic text-[#000000b2]">
              $3,500/month
            </div>
            <div className="flex text-sm md:text-[1.8vw] md:leading-[1.8vw] text-[#000000ee]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
