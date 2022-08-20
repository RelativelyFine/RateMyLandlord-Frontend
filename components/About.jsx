import React from "react";
import Link from "next/link";
const About = () => {
  return (
    <div>
      <div className="flex bg-[#1B1B1B] w-full h-20"></div>
      <div className="flex bg-[#3C3C3C] w-full pb-[10%] flex-col">
        <div className="mx-[6vw]">
          <div className=" text-white w-full text-8xl py-6 grid place-items-center ">
            <span>Who Are We?</span>
          </div>
          <div className="grid w-full grid-cols-1 lg:grid-cols-4 gap-x-[8em] gap-y-[2em] px-[10vw] content-center">
            <Link href="/">
              <div className="p-4 flex-col bg-[#d9d9d957] text-center text-[5vw] lg:text-[1.7vw] rounded-3xl min-w-[179px] min-h-[246px] h-[75vw] w-[54vw] lg:h-[25vw] lg:w-[18vw] justify-self-center text-white transition px-3 transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                <div className="flex w-full h-[72%] bg-[#102340] rounded-xl">
                  <div className="w-[90%] h-[90%] bg-amy bg-cover rounded-x m-auto"></div>
                </div>
                Amy Cui
                <div className="text-[3vw] lg:text-[1vw]">UI/UX Designer</div>
              </div>
            </Link>
            <Link href="/">
              <div className="p-4 flex-col bg-[#d9d9d957] text-center text-[5vw] lg:text-[1.7vw] rounded-3xl min-w-[179px] min-h-[246px] h-[75vw] w-[54vw] lg:h-[25vw] lg:w-[18vw] justify-self-center text-white transition px-3 transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                <div className="flex w-full h-[72%] bg-[#290606] rounded-xl">
                  <div className="w-[90%] h-[90%] bg-david bg-cover rounded-x m-auto"></div>
                </div>
                David Courtis
                <div className="text-[3vw] lg:text-[1vw]">
                  Frontend React Dev
                </div>
              </div>
            </Link>
            <Link href="/">
              <div className="p-4 flex-col bg-[#d9d9d957] text-center text-[5vw] lg:text-[1.6vw] rounded-3xl min-w-[179px] min-h-[246px] h-[75vw] w-[54vw] lg:h-[25vw] lg:w-[18vw] justify-self-center text-white transition px-3 transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                <div className="flex w-full h-[72%] bg-[#154731] rounded-xl">
                  <div className="w-[90%] h-[90%] bg-matt bg-cover rounded-x m-auto"></div>
                </div>
                Matthew Borkowski
                <div className="text-[3vw] lg:text-[1vw]">Backend Dev</div>
              </div>
            </Link>
            <Link href="/">
              <div className="p-4 flex-col bg-[#d9d9d957] text-center text-[5vw] lg:text-[1.7vw] rounded-3xl min-w-[179px] min-h-[246px] h-[75vw] w-[54vw] lg:h-[25vw] lg:w-[18vw] justify-self-center text-white transition px-3 transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                <div className="flex w-full h-[72%] bg-[#968d0e] rounded-xl">
                  <div className="w-[90%] h-[90%] bg- bg-cover rounded-x m-auto"></div>
                </div>
                Chaitanya Sharma
                <div className="text-[3vw] lg:text-[1vw]">Backend Dev</div>
              </div>
            </Link>
          </div>
          <div className=" text-white w-full text-4xl pt-12 px-[5vw]">
            This project was created for HackThe6ix 2022
          </div>
          <div className=" text-white w-full text-2xl py-6 px-[5vw] text-[#828282]">
            The inspiration for RateMyRental was the ongoing student housing
            crisis. Many students struggle to find housing each year and we hope
            our project can help alleviate some of the trouble. What makes us
            unique is our landlord rating system. The site has centralizex
            database that students can search for both rental houses as well as
            viewing the reputation of landlords in their school area. This
            allows students to have ease of mind when signing a lease as prior
            tenants have given opinions on both the rental house as well as the
            landlord in charge of the property.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
