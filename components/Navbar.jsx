import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import {
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiFillLinkedin,
  AiFillMail,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

import { SiNotion } from "react-icons/si";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-81 top-0 bg-[#363636e5]">
      <div className="flex justify-between items-center w-full h-full px-2 align-items 2xl:px-8 pl-8">
        <Image
          src="/../public/assets/photos/logo.png"
          alt="/"
          width="100%"
          height="80"
        />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm hover:border-b font-bold transition transform hover:-translate-y-[2px] motion-reduce:transition-none motion-reduce:hover:transform-none text-white">
                HomePage
              </li>
            </Link>
            <Link href="aboutPage">
              <li className="ml-10 text-sm hover:border-b font-bold transition transform hover:-translate-y-[2px] motion-reduce:transition-none motion-reduce:hover:transform-none text-white">
                About Us
              </li>
            </Link>
            <Link href="landlordRating">
              <li className="ml-10 text-sm hover:border-b font-bold transition transform hover:-translate-y-[2px] motion-reduce:transition-none motion-reduce:hover:transform-none text-white">
                Lordlist
              </li>
            </Link>
            <Link href="/housingList">
              <li className="ml-10 text-sm hover:border-b font-bold transition transform hover:-translate-y-[2px] motion-reduce:transition-none motion-reduce:hover:transform-none text-white">
                Landlist
              </li>
            </Link>
            <Link href="/Signup">
              <li className="ml-10 text-sm pr-10 uppercase">
                <button className="transition px-3 transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none font-bold bg-[#254575] text-white">
                  Log In
                </button>
              </li>
            </Link>
          </ul>
          <div
            onClick={handleNav}
            className="md:hidden square-full shadow-lg shadow-grey-700 cursor-pointer"
          >
            <AiOutlineMenuUnfold size={50} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#f6f1ff] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/../public/assets/photos/logo.png"
                alt="/"
                width="100%"
                height="80"
              />
              <div
                onClick={handleNav}
                className="square-full shadow-lg shadow-grey-700 cursor-pointer"
              >
                <AiOutlineMenuFold size={50} />
              </div>
            </div>
            <div className="border-b border-grey-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">HackTheSix 2022~~</p>
            </div>
          </div>

          <div className="py-4 flex flex-col">
            <ul>
              <Link href="/">
                <li className="py-4 text-sm">HomePage</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">About Us</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Portfolio</li>
              </Link>
              <Link href="landlordRating">
                <li className="py-4 text-sm">Lordlist</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Landlist</li>
              </Link>

              <Link href="/">
                <li className="py-4 text-sm">Log In</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest font-bold">
                Want Our Media?
              </p>
              <div className="flex items-center justify-between">
                <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiFillLinkedin size={25} />
                </div>
                <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiFillMail size={25} />
                </div>
                <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiFillFacebook size={25} />
                </div>
                <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiFillInstagram size={25} />
                </div>
                <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <SiNotion size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
