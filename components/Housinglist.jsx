import { React, useState, useEffect } from "react";
import useSWR from "swr";
import axios from "axios";

const fetcher = (url) =>
  axios
    .get(url, {
      headers: { "Access-Control-Allow-Origin": "*" },
    })
    .then((response) => response.data);

const Ratemylandlord = () => {
  const [resultNum, setResultNum] = useState(69);
  const [navStatus, setNavStatus] = useState("Rating");
  const [navOrder, setNavOrder] = useState("Descending");
  const { data, error } = useSWR("http://127.0.0.1:5000/properties", fetcher);
  const [renderedOutput, setRenderedOutput] = useState(() => {});

  const reloadImages = () => {
    if (data) {
      setRenderedOutput(
        data.map((item, index) => {
          console.log("Hi");
          if (item.StarRating == 10) {
            var bg = (
              <div className="grid place-content-center relative left-3 rounded-xl w-[8vh] h-[8vh] bg-five text-[4vh]">
                {item.StarRating}
              </div>
            );
          } else if (item.StarRating == 9) {
            var bg = (
              <div className="grid place-content-center relative left-1 bottom-1 w-[11vh] h-[2vh] bg-cover bg-fourfive"></div>
            );
          } else if (item.StarRating == 8) {
            var bg = (
              <div className="grid place-content-center relative left-1 bottom-1 w-[11vh] h-[2vh] bg-cover bg-four text-[4vh]"></div>
            );
          } else if (item.StarRating == 7) {
            var bg = (
              <div className="grid place-content-center relative left-1 bottom-1 w-[11vh] h-[2vh] bg-cover bg-threefive text-[4vh]"></div>
            );
          } else if (item.StarRating == 6) {
            var bg = (
              <div className="grid place-content-center relative left-1 bottom-1 w-[11vh] h-[2vh] bg-cover  bg-three text-[4vh]"></div>
            );
          } else if (item.StarRating == 5) {
            var bg = (
              <div className="grid place-content-center relative left-1 bottom-1 w-[11vh] h-[2vh] bg-cover bg-twofive text-[4vh]"></div>
            );
          } else if (item.StarRating == 4) {
            var bg = (
              <div className="grid place-content-center relative left-1 bottom-1 w-[11vh] h-[2vh] bg-cover bg-two text-[4vh]"></div>
            );
          } else if (item.StarRating == 3) {
            var bg = (
              <div className="grid place-content-center relative left-1 bottom-1 w-[11vh] h-[2vh] bg-cover bg-onefive text-[4vh]"></div>
            );
          } else if (item.StarRating == 2) {
            var bg = (
              <div className="grid place-content-center relative left-1 bottom-1 w-[11vh] h-[2vh] bg-cover bg-one text-[4vh]"></div>
            );
          } else {
            var bg = (
              <div className="grid place-content-center relative left-3 w-full bg-zerofive text-[4vh]"></div>
            );
          }

          return (
            <div
              key={index}
              reactkey={index}
              className="flex-col bg-[#d9d9d957] text-center text-[5vw] lg:text-[1.7vw] rounded-3xl min-w-[179px] min-h-[246px] h-[75vw] w-[54vw] lg:h-[25vw] lg:w-[18vw] justify-self-center text-white transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
            >
              <div className="flex w-full h-[72%] bg-white rounded-t-3xl text-black">
                <div
                  id={"photo" + index}
                  className="w-full h-full bg-cover bg-center rounded-t-2xl m-auto"
                >
                  <span className="relative inset-x-0 top-[14vw] bg-[#00000065] p-3 rounded-xl text-white">
                    Price: ${item.Price}
                  </span>
                </div>
              </div>
              {item.Address}
              <div className="grid place-content-center text-[3vw] lg:text-[1vw]">
                {bg}
              </div>
              <div className="grid grid-cols-2 text-[3vw] lg:text-[1vw]">
                <span>Rooms: {item.Rooms}</span>{" "}
                <span>Baths: {item.Bathrooms}</span>
                <span>Type: {item.Category}</span>
                <span>Near: {item.Campus}</span>
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

  useEffect(() => {
    if (renderedOutput) {
      for (let i = 0; i < data.length; i++) {
        var bg = 'url("' + data[i].Images + '")';
        try {
          document.getElementById("photo" + i).style.backgroundImage = bg;
        } catch (err) {
          console.log(err);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [renderedOutput]);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  var data2 = data;

  const sortby = () => {
    if (navOrder == "Descending") {
      if (navStatus == "Rating") {
        data.sort((a, b) => b.Price - a.Price);
        setNavStatus("Price");
      } else if (navStatus == "Price") {
        data.sort((a, b) => b.Rooms - a.Rooms);
        setNavStatus("Rooms");
      } else if (navStatus == "Rooms") {
        data.sort((a, b) => b.Bathrooms - a.Bathrooms);
        setNavStatus("Bathrooms");
      } else if (navStatus == "Bathrooms") {
        data.sort((a, b) => a.Campus.localeCompare(b.Campus));
        setNavStatus("Campus");
      } else if (navStatus == "Campus") {
        data.sort((a, b) => b.StarRating - a.StarRating);
        setNavStatus("Rating");
      }
    } else {
      if (navStatus == "Ascending") {
        data.sort((b, a) => b.Price - a.Price);
        setNavStatus("Price");
      } else if (navStatus == "Price") {
        data.sort((b, a) => b.Rooms - a.Rooms);
        setNavStatus("Rooms");
      } else if (navStatus == "Rooms") {
        data.sort((b, a) => b.Bathrooms - a.Bathrooms);
        setNavStatus("Bathrooms");
      } else if (navStatus == "Bathrooms") {
        data.sort((b, a) => a.Campus.localeCompare(b.Campus));
        setNavStatus("Campus");
      } else if (navStatus == "Campus") {
        data.sort((b, a) => b.StarRating - a.StarRating);
        setNavStatus("Rating");
      }
    }

    reloadImages();
    console.log(data);
  };

  const sortorder = () => {
    if (navOrder == "Descending") {
      data.reverse();
      setNavOrder("Ascending");
    } else if (navOrder == "Ascending") {
      data.reverse();
      setNavOrder("Descending");
    }
    reloadImages();
    console.log(data);
  };

  const handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    if (typeof event.target.value === "undefined") {
      data = data2;
    } else {
      data = data2.filter((item) =>
        item.Campus.toUpperCase().includes(event.target.value.toUpperCase())
      );
    }
    reloadImages();
    console.log(data);
  };

  return (
    <div>
      <div className="flex bg-[#1B1B1B] w-full h-20"></div>
      <div className="flex bg-gradient-to-b from-[#1B1B1B] to-[#3C3C3C] w-full pb-10 flex-col">
        <div className="grid grid-cols-3 place-content-between bg-[#7E7E7E] w-full h-[10vh] px-4 content-center">
          <div className="flex">
            <div className="pr-8">
              <button
                onClick={sortorder}
                className="bg-[#D9D9D9] py-3 px-2 rounded-lg text-3xl shadow-none col-span-1 "
              >
                <span className="text-black text-[1.5vh]"></span>
                {navOrder}
              </button>
            </div>
            <div>
              <button
                onClick={sortby}
                className="bg-[#D9D9D9] py-3 px-5 rounded-lg text-3xl shadow-none col-span-1 w-full "
              >
                <span className="text-[#7E7E7E]">Sort By: </span>
                {navStatus}
              </button>
            </div>
          </div>
          <div className="flex justify-self-end col-span-2">
            <div className="p-4 bg-[#e7e7e7] text-sm md:text-2xl xl:text-4xl rounded-l-3xl h-20 w-[20em] justify-self-end">
              <div className="w-full pl-6">
                <form>
                  <input
                    className="relative top-0 max-w-[60%] outline-none text-grey bg-[#e7e7e7]"
                    type="text"
                    id="campus"
                    name="campus"
                    placeholder="Enter Your Campus"
                    onChange={handleChange}
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
        </div>
        <div className="mx-[6vw]">
          <div className="relative flex py-5 items-center justify-center pt-14">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-2xl">
              Housing
            </span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <div className="grid grid-cols-3 place-items-center gap-8 w-full px-[7vw]">
            {renderedOutput}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratemylandlord;
