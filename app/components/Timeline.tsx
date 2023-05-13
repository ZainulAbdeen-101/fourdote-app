import React from "react";
import Image from "next/image";

const Timeline = () => {
  return (
    <>
      <div className="mt-[50px]">
        {/* <!-- component --> */}
        <div className="container md:p-6 lg:p-14  mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden  h-full">
            <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-[50%]"></div>
            {/* <!-- right timeline --> */}
            <div className="mb-8 flex justify-between items-center w-full ">
              <div className="order-1 w-5/12 p-2 h-[200px] shadow-lg shadow-[#6C58D4]/50 rounded-lg text-center text-white  bg-opacity-80 bg-gradient-to-b from-[#4B33C6] to-[#6C58D4]">
                <h1 className="font-font  min-[320px]:text-[30px] lg:text-[40px]">Design </h1>
                <p className="font-light mt-5">
                  The web design process involves creating a site’s
                  architecture, designing its layout and user interface, and
                  coding it to work correctly.
                </p>
              </div>
              <div className="z-20 flex items-center order-1 bg-[#4B33C6] shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
              </div>
              <div className="order-1 rounded-lg   w-5/12 ">
                <Image
                  src={"/design.png"}
                  alt="design"
                  width={800}
                  height={800}
                />
              </div>
            </div>

            {/* <!-- left timeline --> */}
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12 h-[200px] p-2 shadow-lg shadow-[#6C58D4]/50 rounded-lg text-center text-white  bg-opacity-80 bg-gradient-to-b from-[#4B33C6] to-[#6C58D4]">
                <h1 className="font-font  text-[40px]">Development </h1>
                <p className="font-light mt-5">
                  Developing Your Modern Web Applications With latest Edge-Cutting
                  technologies With Facinating User Experience.
                </p>
              </div>
              <div className="z-20 flex items-center order-1 bg-[#4B33C6] shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
              </div>
              <div className="order-1  rounded-lg  w-5/12 px-6 py-4">
                <Image
                  src={"/development.png"}
                  alt="design"
                  width={800}
                  height={800}
                />
              </div>
            </div>

            {/* <!-- right timeline --> */}
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12 h-[200px] p-2 shadow-lg shadow-[#6C58D4]/50 rounded-lg text-center text-white  bg-opacity-80 bg-gradient-to-b from-[#4B33C6] to-[#6C58D4]">
                <h1 className="font-font  text-[40px]">CMS </h1>
                <p className="font-light mt-5">
                 Content Management System (CMS).
                  Dynamic Workflow for your website with concepts like Headless CMS.
                </p>
              </div>
              <div className="z-20 flex items-center order-1 bg-[#4B33C6] shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
              </div>
              <div className="order-1 rounded-lg w-5/12 px-6 py-4">
                <Image src={"/cms.png"} alt="design" width={800} height={800} />
              </div>
            </div>

            {/* <!-- left timeline --> */}
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12 h-[200px] p-2 shadow-lg shadow-[#6C58D4]/50 rounded-lg text-center text-white  bg-opacity-80 bg-gradient-to-b from-[#4B33C6] to-[#6C58D4]">
                <h1 className="font-font  text-[40px]">Database </h1>
                <p className="font-light mt-5">
                Build, Deploy your web apps on Serverless databases that that allocates and scales compute and storage resources automatically and elastically with demand.
                </p>
              </div>
              <div className="z-20 flex items-center order-1 bg-[#4B33C6] shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
              </div>
              <div className="order-1 rounded-lg  w-5/12 px-6 py-4">
                <Image
                  src={"/database.png"}
                  alt="design"
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
