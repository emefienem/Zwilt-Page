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
            <div className="lg:col-span-2 flex flex-col lg:justify-center lg:gap-16 gap-10">
              <LeftPart markets={market.leftPart} />
            </div>

            <div className="lg:col-span-4 lg:flex lg:flex-col lg:items-end">
              <div className="max-w-[700px] w-full flex flex-col gap-5">
                <RightPart markets={market.rightPart} />
              </div>
            </div>
          </div>
        ))}

        <div className="flex items-center justify-between gap-2 lg:gap-20 md:text-[22px]">
          <div className="relative flex items-center space-x-3 group overflow-hidden">
            {/* Hover for transition */}
            <div className="flex items-center space-x-3 hover:bg-[#e0e0e0]">
              <div className="relative flex items-center space-x-3">
                <img src={DarkLogo} alt="Dark Logo" className="w-6 h-6" />
                <span className="">Explore more</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-[#e0e0e0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="md:absolute md:left-[46.5%]">
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
