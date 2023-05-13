import React from "react";
import { SiAntdesign, HiCodeBracket, BsDatabaseAdd } from "./Icons";

const Services = () => {
  return (
    <>
      <div className="min-[320px]:p-5 md:p-14">
        <div className={" mx-auto md:max-w-[550px] text-center"}>
          <h1 className="font-font min-[320px]:text-[30px] md:text-[50px] text-[#4B33C6] ">Services</h1>{" "}
          <p className="font-light md:text-lg">
            We provide multiple services from digital production to technology
            services. Based on understanding your business and goals, we tailor
            the right process for you. Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className=" flex min-[320px]:flex-col lg:flex-row md:place-items-center lg:place-items-stretch    justify-around mx-auto  gap-5 mt-10">
          <div className="min-[320px]:w-[100%] md:w-[50%] border rounded-lg shadow-lg shadow-[#6C58D4]/50 p-2 text-center text-white  bg-opacity-80 bg-gradient-to-b from-[#4B33C6] to-[#6C58D4] ">
            <SiAntdesign className="mx-auto" fill={"white"} size={50} />
            <div>
              <h1 className=" font-font text-[30px]">Design</h1>{" "}
              <p className="text-sm mt-2">
                The web design process involves creating a site’s architecture,
                designing its layout and user interface, and coding it to work
                correctly.
              </p>
            </div>
          </div>
          <div className=" md:w-[50%] border rounded-lg shadow-lg shadow-[#6C58D4]/50 p-2 text-center text-white  bg-opacity-80 bg-gradient-to-b from-[#4B33C6] to-[#6C58D4] h-[200px]">
            <HiCodeBracket className="mx-auto" fill={"white"} size={50} />
            <div>
              <h1 className="font-font text-[30px]">Development</h1>{" "}
              <p className="text-sm mt-2">
                Develop Your Applications With latest Edge-Cutting technologies
              </p>
            </div>
          </div>
          <div className="md:w-[50%] border rounded-lg shadow-lg shadow-[#6C58D4]/50 p-2 text-center text-white  bg-opacity-80 bg-gradient-to-b from-[#4B33C6] to-[#6C58D4]">
            <BsDatabaseAdd className="mx-auto" stroke={"white"} size={50} />
            <div>
              <h1 className="font-font text-[30px]">DataBase </h1>{" "}
              <p className="text-sm mt-2">
                Build, Deploy and Manage Relational & Non-Relational Databases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
