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
  const [search, setSearch] = useState(props.name);
  const [renderedOutput, setRenderedOutput] = useState([]);
  const { data, error } = useSWR("http://127.0.0.1:5000/landlords", fetcher);
  const reloadImages = () => {
    if (data) {
      setRenderedOutput(
        data.map((item, index) => {
          let x = 0;
          let xnum = 0;

          for (var i of item.Reviews) {
            xnum += 1;
            x += i.Stars;
          }

          var stars = x / Math.max(1, xnum);

          if (stars / 2 >= 4) {
            var bg = (
              <div className="grid place-content-center relative left-3 rounded-xl w-[8vh] h-[8vh] bg-[#72B280] text-[4vh]">
                {(stars / 2).toFixed(1)}
              </div>
            );
          } else if (stars / 2 >= 3) {
            var bg = (
              <div className="grid place-content-center relative left-3 rounded-xl w-[8vh] h-[8vh] bg-[#E8DB6E] text-[4vh]">
                {(stars / 2).toFixed(1)}
              </div>
            );
          } else {
            var bg = (
              <div className="grid place-content-center relative left-3 rounded-xl w-[8vh] h-[8vh] bg-[#C87373] text-[4vh]">
                {(stars / 2).toFixed(1)}
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
                <div className="text-[2vh] text-[#000000]">
                  {item.LandlordName}
                </div>
                <div className="text-xl text-[#000000af]">
                  Highest Review: &ldquo;
                  {item.Reviews[item.Reviews.length - 1].Body}
                  &ldquo;
                </div>
                <div className="text-xl text-[#000000af]">
                  Lowest Review: &ldquo;{item.Reviews[0].Body}
                  &ldquo;
                </div>
              </div>
            </div>
          );
        })
      );
    }
  };

  useEffect(() => {
    reloadImages();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (error) {
    return <div>failed to load</div>;
  }

  if (!data) {
    return <div>loading...</div>;
  }

  for (var i of data) {
    i.Reviews.sort((a, b) => a.Stars - b.Stars);
  }

  data.sort((b, a) => {
    return (
      a.Reviews.reduce((total, next) => total + next.Stars, 0) /
        a.Reviews.length -
      b.Reviews.reduce((total, next) => total + next.Stars, 0) /
        b.Reviews.length
    );
  });

  let data2 = data;

  const filterer = () => {
    if (search == "") {
      console.log("hi");
      data = data2;
    } else {
      var newData = data;
      newData = data.filter((item) =>
        item.LandlordName.toUpperCase().includes(search.toUpperCase())
      );
      data = newData;
    }
  };

  filterer();

  const handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    if (event.target.value == "") {
      console.log("hi");
      data = data2;
    } else {
      var newData = data;
      newData = data.filter((item) =>
        item.LandlordName.toUpperCase().includes(
          event.target.value.toUpperCase()
        )
      );
      data = newData;
    }
    reloadImages();
    console.log(data);
  };

  return (
    <div>
      <div className="flex bg-[#1B1B1B] w-full h-20"></div>
      <div className="flex bg-gradient-to-b from-[#1B1B1B] to-[#3C3C3C] w-full pb-10 flex-col">
        <div className="flex-col mx-[6vw]">
          <div className="grid w-full grid-cols-12 md:grid-cols-12 gap-[5em] px-1 content-center"></div>
          <div className="relative flex py-5 items-center justify-center pt-14">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-9xl">
              LandLord List
            </span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <div className="flex justify-center flex-row py-10">
            <div className="p-4 bg-[#FFFFFF] grid place-items-center md:text-3xl xl:text-5xl rounded-l-3xl h-20 w-[20em] justify-self-center">
              <div className="w-full pl-6">
                <form>
                  <input
                    className="relative top-0 max-w-[60%] outline-none text-grey bg-[#FFFFFF]"
                    type="text"
                    id="lord"
                    name="lord"
                    placeholder="Enter Your Landlord"
                    onChange={handleChange}
                    value={search}
                  />
                  <span className="relative left-[54%] sm:left-[54%] md:left-[47%] lg:left-[44%]  ">
                    <button
                      className="text-5xl transition px-3 transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none font-bold bg-[#254575] shadow-none text-white"
                      type="submit"
                      onClick={handleChange}
                    >
                      S
                    </button>
                  </span>
                </form>
              </div>
            </div>
            <div className="p-4 bg-[#254575] rounded-r-3xl h-20 w-[6em] justify-self-center"></div>
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
