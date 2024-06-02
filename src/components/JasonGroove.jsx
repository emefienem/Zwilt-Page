import React from "react";
import DquoteImg from "../assets/double-quote-img.svg";
import JasonImg from "../assets/jason-pic.svg";
import GrooveImg from "../assets/groove-img.svg";
import GrooveWhiteImg from "../assets/groove-white.svg";
import DarkLogo from "../assets/dark-logo.svg";

const JasonGroove = () => {
  return (
    <div className="min-h-screen w-full flex bg-[#202229] slanted-border relative bottom-5 lg:bottom-20 py-20">
      <div className="px-4">
        {/* Double Quote image */}
        <img
          src={DquoteImg}
          alt="Double-Quote"
          className="absolute top-2 right-3"
        />

        <div className="px-10 py-20 text-white justify-between w-full flex flex-row lg:flex-row space-x-56">
          <div className="text-start max-w-md flex flex-col gap-10">
            <h1 className="md:text-5xl text-3xl font-bold">
              How it worked <br /> for Jason{" "}
              <img src={JasonImg} alt="Jason Picture" className="w-12 inline" />{" "}
              at <br />
              {/* Groove image */}
              <img
                src={GrooveImg}
                alt="Groove Purple"
                className="inline mt-2 w-36 md:w-auto"
              />
            </h1>
            <p className="md:text-xl text-[#959595]">
              Zwilt enabled us to deliver on time and they&apos;ve been heavy
              hitters in our corner since.
            </p>

            <div className="flex items-center justify-center lg:justify-start space-x-4">
              {/* Backward Logo(Mde it so by rotating the image to 180 degree) */}
              <div className="bg-white hover:bg-[#AF7CFF] rounded-xl cursor-pointer transition ease-in">
                <img
                  src={DarkLogo}
                  alt="Left Dark Logo"
                  className="transform rotate-180 px-2 py-4"
                />
              </div>
              {/* Forward Logo */}
              <div className="bg-white hover:bg-[#AF7CFF] rounded-xl cursor-pointer transition ease-out">
                <img
                  src={DarkLogo}
                  alt="Right Dark Logo"
                  className="px-2 py-4"
                />
              </div>
            </div>
          </div>

          <div className="max-w-lg mt-10">
            <div className="flex items-center gap-2">
              {/* Groove logo */}
              <div className="md:w-[102px] md:h-[90px] w-[78px] h-[78px] md:rounded-[40px] rounded-[28px] bg-[#AF7CFF] flex items-center justify-center">
                <img
                  src={GrooveWhiteImg}
                  alt="Groove white"
                  className="w-14 md:w-auto"
                />
              </div>
              <div>
                <p className="md:text-3xl text-xl font-bold mb-1">
                  Jason Makki
                </p>
                <p className="text-[#959595] mb-1">Engineer at GROOVE</p>
                <p className="text-[#959595]">San Francisco</p>
              </div>
            </div>
            <p className="md:text-xl mt-10 text-[#959595] w-full md:w-[450px]">
              Zwilt enabled us to deliver on time and they&apos;ve been heavy
              hitters in our corner since. Zwilt enabled us to deliver on time
              and they&apos;ve been heavy hitters in our corner since. Zwilt
              enabled us to deliver on time and they&apos;ve been heavy hitters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JasonGroove;
