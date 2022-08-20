import { React, useState } from "react";
import Link from "next/link";
import Commentlist from "./Commentlist";
import Ratingoverview from "./Ratingoverview";

const Ratemylandlord = () => {
  const [reviewNum, setReviewNum] = useState(69);
  const [reviewScore, setReviewScore] = useState(3.3);
  const [commentNum, setCommentNum] = useState(47);
  return (
    <div>
      <div className="flex bg-[#1B1B1B] w-full h-20"></div>
      <div className="flex bg-gradient-to-b from-[#1B1B1B] to-[#3C3C3C] w-full h-[70vh] flex-col">
        <div className="mx-[6vw]">
          <div className="flex text-[#828282] w-full text-5xl py-6">
            LandLord Rating
          </div>
          <div className="grid w-full grid-cols-12 md:grid-cols-12 gap-[5em] px-1 content-center">
            <div className="flex-col col-span-5">
              <div className="flex">
                <div className="text-white text-5xl">{reviewScore}</div>
                <div className="text-[#828282] text-2xl">/5</div>
              </div>
              <div className="flex text-white text-6xl py-4">Brenna Farrel</div>
              <div className="flex text-white text-1xl text-[#ffffffbd] pb-4">
                Rated by &nbsp;
                <span className="underline">{reviewNum} tenants</span>
              </div>
              <Link href="/">
                <button className="text-4xl transition px-12 transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none font-bold bg-[#22406d] text-white">
                  Rate
                </button>
              </Link>
            </div>
            <div className="col-span-7">
              <Ratingoverview />
            </div>
          </div>
          <div className="relative flex py-5 items-center justify-center pt-14">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-2xl">
              Reviews
            </span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <div className="flex text-white w-full text-2xl py-6">
            {commentNum} Tenent Comments
          </div>
        </div>
      </div>
      <Commentlist />
    </div>
  );
};

export default Ratemylandlord;
