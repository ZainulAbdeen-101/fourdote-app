import React from "react";
import Image from "next/image";
import Timeline from "./Timeline";

const Mains = () => {
  return (
    <>
      <div>
        <div className="mx-auto text-center">
          <p>Four Dotes Help You</p>
          <h1 className="font-font min-[320px]:text-[30px] lg:text-[50px] text-[#4B33C6] ">
            Build Your Apps With Us
          </h1>
          <p className="font-light">We Help You Make Your Apps So Easily</p>
        </div>
      </div>
      <div className="md:hidden">
        <div className="">
          <Image
            className="mx-auto"
            src={"/design.png"}
            alt={""}
            height={300}
            width={300}
          />
          <div className="p-3">
            <div className=" p-2 min-[320px]:h-[180px] md:h-[200px] shadow-lg shadow-[#6C58D4]/50 rounded-lg text-center text-white  bg-opacity-80 bg-gradient-to-b from-[#4B33C6] to-[#6C58D4]">
              <h1 className="font-font  min-[320px]:text-[30px] lg:text-[40px]">
                Design{" "}
              </h1>
              <p className="font-light min-[320px]:text-sm  min-[320px]:mt-5">
                The web design process involves creating a site’s architecture,
                designing its layout and user interface, and coding it to work
                correctly.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <Image
            className="mx-auto"
            src={"/development.png"}
            alt={""}
            height={300}
            width={300}
          />
          <div className="p-3">
            <div className=" p-2 min-[320px]:h-[180px] md:h-[200px] shadow-lg shadow-[#6C58D4]/50 rounded-lg text-center text-white  bg-opacity-80 bg-gradient-to-b from-[#4B33C6] to-[#6C58D4]">
              <h1 className="font-font  min-[320px]:text-[30px] lg:text-[40px]">
                Development{" "}
              </h1>
              <p className="font-light min-[320px]:text-sm min-[320px]:mt-2 md:mt-5">
              Developing Your Modern Web Applications With latest Edge-Cutting
                  technologies With Facinating User Experience.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <Image
            className="mx-auto"
            src={"/cms.png"}
            alt={""}
            height={300}
            width={300}
          />
          <div className="p-3">
            <div className=" p-2 min-[320px]:h-[180px] md:h-[200px] shadow-lg shadow-[#6C58D4]/50 rounded-lg text-center text-white  bg-opacity-80 bg-gradient-to-b from-[#4B33C6] to-[#6C58D4]">
              <h1 className="font-font  min-[320px]:text-[30px] lg:text-[40px]">
                CMS{" "}
              </h1>
              <p className="font-light min-[320px]:text-sm min-[320px]:mt-5">
              Content Management System (CMS).
                  Dynamic Workflow for your website with concepts like Headless CMS.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <Image
            className="mx-auto"
            src={"/database.png"}
            alt={""}
            height={300}
            width={300}
          />
          <div className="p-3">
            <div className=" p-2 min-[320px]:h-[150px] md:h-[200px] shadow-lg shadow-[#6C58D4]/50 rounded-lg text-center text-white  bg-opacity-80 bg-gradient-to-b from-[#4B33C6] to-[#6C58D4]">
              <h1 className="font-font  min-[320px]:text-[30px] lg:text-[40px]">
                DataBase{" "}
              </h1>
              <p className="font-light min-[320px]:text-sm min-[320px]:mt-3">
              Build, Deploy your web apps on Serverless databases that that allocates and scales compute and storage resources automatically and elastically with demand.
              </p>
            </div>
          </div>
        </div>
        
      </div>
      <div className="min-[320px]:hidden md:block ">
        <Timeline />
      </div>
    </>
  );
};

export default Mains;
