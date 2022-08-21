import React from "react";
import Lordlist from "./Lordlist";
import { useRouter } from "next/router";

const Homesplash = () => {
  const router = useRouter();
  const [lord, setLord] = React.useState("");
  const handleChange = (event) => {
    event.preventDefault();
    router.push({
      pathname: "/landlordRating",
      query: { name: lord },
    });
  };

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
        <div className="flex relative top-[-5vh] justify-center flex-row">
          <div className="flex justify-center flex-row">
            <div className="p-4 bg-[#e7e7e7] grid place-items-center md:text-3xl xl:text-5xl rounded-l-3xl h-20 w-[20em] justify-self-center">
              <div className="w-full pl-6">
                <form onSubmit={handleChange}>
                  <input
                    className="relative top-0 max-w-[60%] outline-none text-grey bg-[#e7e7e7]"
                    type="text"
                    id="lord"
                    name="lord"
                    onChange={(event) => setLord(event.target.value)}
                    value={lord}
                    placeholder="Enter Your Landlord"
                  />
                  <span className="relative left-[54%] sm:left-[54%] md:left-[47%] lg:left-[44%]  ">
                    <button
                      className="text-5xl transition px-3 transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none font-bold bg-[#254575] shadow-none text-white"
                      type="submit"
                    >
                      S
                    </button>
                  </span>
                </form>
              </div>
            </div>
            <div className="p-4 bg-[#254575] rounded-r-3xl h-20 w-[6em] justify-self-center"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homesplash;
