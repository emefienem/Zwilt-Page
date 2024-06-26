import React from "react";
import { Markets } from "../../utility";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";
import DarkLogo from "../../assets/dark-logo.svg";

const MarketPlace = () => {
  return (
    <section className="w-full bg-[#EDEFFF] py-20 lg:py-40 slanted-border relative lg:bottom-5">
      <div className="section px-8 text-[#202229]">
        <h1 className="md:text-5xl text-3xl text-center font-bold mb-10 lg:mb-20 max-w-[900px] mx-auto">
          Your one-stop marketplace for finding the talent your business needs.
        </h1>

        {Markets.map((market, index) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-6 gap-10 mb-10"
          >
            {/* Left Side of the section */}
            <div className="lg:col-span-2 flex flex-col lg:justify-center lg:gap-16 gap-10">
              <LeftPart markets={market.leftPart} />
            </div>
            {/* Right Side of the section */}
            <div className="lg:col-span-4 lg:flex lg:flex-col lg:items-end">
              <div className="max-w-[700px] w-full flex flex-col gap-5">
                <RightPart markets={market.rightPart} />
              </div>
            </div>
          </div>
        ))}

        <div className="flex items-center justify-between gap-2 lg:gap-20 md:text-[22px]">
          {/* Hover on the Explore more for a transition */}
          <div className="flex items-center hover:bg-black hover:rounded-xl hover:text-white cursor-pointer transition-all duration-300">
            <div className="bg-black p-4 rounded-xl hover:w-28">
              <img src={DarkLogo} alt="Dark Logo" className="invert" />
            </div>
            <span className="font-semibold z-10 hover:text-white">
              Explore more
            </span>
          </div>
          <div className="md:absolute md:left-[46.5%] hover:font-semibold cursor-pointer">
            <p>
              30 more <span className="text-[#202229CC]">to explore</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketPlace;
