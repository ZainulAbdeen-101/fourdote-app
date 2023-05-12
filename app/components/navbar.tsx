"use client";
import React, { useState } from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  HiOutlineBars3BottomRight,
  IoLogoFacebook,
} from "./Icons";

const Navbars = () => {
  const [display, setDisplay] = useState(false);
  const menu = () => {
    setDisplay((prev) => !prev);
  };
  return (
    <><div className="">

      <div className="flex w-[100%] justify-between  fixed z-50 top-0 left-0 shadow-lg  bg-white">
        <h1 className=" min-[320px]:text-[30px] lg:text-[50px] font-font text-[#4B33C6]  ">
        TechSpark
        </h1>
        <div className=" min-[320px]:hidden lg:flex ">
          <ul className="flex mt-[10px] ">
            <li className="p-4 font-semibold">
              <a href="/components/hero/Hero">Home</a>
            </li>
            <li className="p-4 font-semibold">
              <a href="">Services</a>
            </li>

            <li className="p-4 font-semibold">
              <a href="">Contact Us</a>
            </li>

            <li className="p-4 font-semibold">
              <a href="">Login</a>
            </li>
          </ul>
          <div className="p-4 mt-[5px]">
            <button className=" bg-[#6C58D4] shadow-lg shadow-[#6C58D4]/50 text-white  rounded-lg px-[10px] py-[5px]">
              Sign Up
            </button>
          </div>
        </div>
        <div className="lg:hidden">
          <HiOutlineBars3BottomRight
            onClick={menu}
            stroke={"#4B33C6"}
            size={40}
          />
        </div>
      </div>


      <div
        className={`${
          display ? "flex flex-col" : "hidden"
        } text-center z-50 fixed w-[70%] mt-[37px]   h-[70%]  bg-[white]    rounded-xl `}
      >
        <h1 className="font-font  text-[25px] p-2">Welcome !</h1>
        <div className=" mx-auto">
          <div className="flex   m-4">
            <IoLogoFacebook fill={"#4B33C6"} className="" size={25} />
            <a href="">Facebook</a>
          </div>
          <div className="flex   m-4">
            <AiFillInstagram fill={"#4B33C6"} className="mx-aut" size={25} />
            <a href="">InstaGram</a>
          </div>
          <div className="flex   m-4">
            <AiFillGithub fill={"#4B33C6"} className="" size={25} />
            <a href="">Github</a>
          </div>
          <div className="flex  m-4">
            <AiFillLinkedin fill={"#4B33C6"} className="" size={25} />
            <a href="">linkedIn</a>
          </div>
          <div className="flex  m-4">
            <AiFillTwitterCircle fill={"#4B33C6"} className="" size={25} />
            <a href="">Twitter</a>
          </div>
        </div>
      </div>
      <div
        className={
          display
            ? "w-[100%] top-0 left-0 z-40 h-[100%] fixed bg-black/70"
            : "hidden"
        }
      ></div>
    </div>

    </>
  );
};

export default Navbars;
