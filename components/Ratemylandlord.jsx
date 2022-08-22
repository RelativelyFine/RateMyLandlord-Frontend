import { React, useState, useEffect } from "react";
import Link from "next/link";
import Commentlist from "./Commentlist";
import Ratingoverview from "./Ratingoverview";
import useSWR from "swr";
import axios from "axios";

const fetcher = (url) =>
  axios
    .get(url, {
      headers: { "Access-Control-Allow-Origin": "*" },
    })
    .then((response) => response.data);

const Ratemylandlord = (props) => {
  const [reviewNum, setReviewNum] = useState(69);
  const [reviewScore, setReviewScore] = useState(3.3);
  const [commentData, setCommentData] = useState([]);
  const [landlordName, setLandlordName] = useState("");

  const { data, error } = useSWR("http://127.0.0.1:5000/landlords", fetcher);
  useEffect(() => {
    if (data) {
      for (var lord of data) {
        if (lord.LandlordName === props.name) {
          setLandlordName(lord.LandlordName);
          console.log(lord.LandlordName);
          console.log(lord.Reviews);
          let x = 0;
          let xnum = 0;
          for (var i of lord.Reviews) {
            xnum += 1;
            x += i.Stars;
          }
          setReviewNum(xnum);
          setCommentData(lord.Reviews);

          setReviewScore(x / Math.max(1, xnum) / 2);
        }
      }
    }
  }, [data]);

  if (error) {
    return (
      <>
        <div className="flex bg-[#1B1B1B] w-full h-20"></div>
        <div className="text-[20vh]">failed to load</div>
      </>
    );
  }

  if (!data) {
    return (
      <>
        <div className="flex bg-[#1B1B1B] w-full h-20"></div>
        <div className="text-[20vh]">loading..</div>
      </>
    );
  }

  var renderedOutput = commentData.map((item, index) => {
    if (item.Stars / 2 >= 4) {
      var bg = (
        <div className="grid place-content-center relative left-3 rounded-xl w-[8vh] h-[8vh] bg-[#72B280] text-[4vh]">
          {(item.Stars / 2).toFixed(1)}
        </div>
      );
    } else if (item.Stars / 2 >= 2.5) {
      var bg = (
        <div className="grid place-content-center relative left-3 rounded-xl w-[8vh] h-[8vh] bg-[#E8DB6E] text-[4vh]">
          {(item.Stars / 2).toFixed(1)}
        </div>
      );
    } else {
      var bg = (
        <div className="grid place-content-center relative left-3 rounded-xl w-[8vh] h-[8vh] bg-[#C87373] text-[4vh]">
          {(item.Stars / 2).toFixed(1)}
        </div>
      );
    }
    return (
      <div
        key={index}
        className="flex flex-row w-full min-h-[10vh] bg-white rounded-xl py-3 "
      >
        {bg}
        <div className="flex flex-col relative left-8 text-[4vh] w-[87%] p-2">
          <div className="text-2xl text-[#000000]">Address: {item.Address}</div>
          <div className="text-xl text-[#000000af]">
            &ldquo;{item.Body}&ldquo;
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="flex bg-[#1B1B1B] w-full h-20"></div>
      <div className="flex bg-gradient-to-b from-[#1B1B1B] to-[#3C3C3C] w-full pb-10 flex-col">
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
              <div className="flex text-white text-6xl py-4">
                {landlordName}
              </div>
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
          <div className="grid place-items-center gap-8 w-full px-[7vw]">
            {renderedOutput}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratemylandlord;
