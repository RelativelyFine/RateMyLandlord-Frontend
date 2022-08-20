import React from "react";
import Searchbar from "./Searchbar";
const Homesplash = () => {
  return (
    <>
      <div className="flex bg-[#1B1B1B] w-full h-20"></div>
      <div className="78bg-blend-multiply bg-my_bg_image bg-cover bg-center w-full h-[60vw] min-h-[363px]">
        <div className="flex flex-col justify-center items-center w-full h-full bg-[#5e5e5e7a]">
          <div className="not-italic font-normal text-white text-6xl text-center max-w-[80%] md:text-8xl lg:text-9xl">
            Find a place you can call home
          </div>
          <div className="not-italic font-normal text-white text-1xl text-center py-10 md:text-2xl">
            More that 1000+ rental properties listedMore that 1000+ rental
            properties listed
          </div>
        </div>
        <Searchbar />
      </div>
    </>
  );
};

export default Homesplash;
