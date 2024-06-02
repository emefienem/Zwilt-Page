import React, { useState } from "react";
import Journey from "./Journey";
import PlayIconDark from "../assets/play.svg";
import PlayIconWhite from "../assets/play-white.svg";

const Screening = () => {
  const [openItem, setOpenItem] = useState(null);

  // Function to toggle
  const toggleHandler = (id) => {
    setOpenItem((prev) => (prev === id ? null : id));
  };

  const screeningList = [
    {
      id: 1,
      title: "Resume Screening",
      description:
        "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
    },
    {
      id: 2,
      title: "Video Interview",
      description:
        "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
    },
    {
      id: 3,
      title: "Technical Evaluation",
      description:
        "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
    },
    {
      id: 4,
      title: "Application Review",
      description:
        "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
    },
    {
      id: 5,
      title: "Let's get to work",
      description:
        "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
    },
  ];
  return (
    <section className="section px-8 text-[#202229]">
      <div className="max-w-[635px] py-20">
        <h1 className="md:text-5xl text-3xl font-bold mb-5">
          How we ensure you&apos;re in good hands.
        </h1>
        <p className="md:text-[22px] text-base md:leading-8 text-[#1E1515CC] mb-5">
          With our comprehensive screening process, we hand-pick highly skilled
          candidates so you can onboard them in a matter of days.
        </p>
        {/* Mapping through the 'ScreeningList' to get necessary details */}
        {screeningList.map((list) => (
          <div key={list.id} className="bg-white border border-[#F0F0F0] mb-2">
            {/* <input
              type="radio"
              name="my-accordion-3"
              checked={openItem === list.id}
              onChange={() => toggleHandler(list.id)}
            />
            <div className="text-xl font-medium flex items-center gap-4">
              <div
                className={`w-[54px] h-[54px] rounded-full flex items-center justify-center ${
                  openItem === list.id ? "bg-[#8BA4FD]" : "bg-[#ECECEC]"
                }`}
              >
                <img
                  src={openItem === list.id ? PlayIconWhite : PlayIconDark}
                  alt="play icon"
                  className=""
                />
              </div>
              <p className="text-base">
                <span className="font-semibold">Step {list.id}: </span>
                {list.title}
              </p>
            </div>
            <div className="text-base">
              <p>{list.description}</p>
            </div> */}

            <input
              type="checkbox"
              id="input"
              className="absolute top-0 inset-x-0 peer opacity-0 z-10 w-full h-12"
              onChange={() => toggleHandler(list.id)}
            />
            <div
              className={`w-[54px] h-[54px] rounded-full flex items-center justify-center ${
                openItem === list.id ? "bg-[#8BA4FD]" : "bg-[#ECECEC]"
              }`}
            >
              <img
                src={openItem === list.id ? PlayIconWhite : PlayIconDark}
                alt="play icon"
                className=""
              />
              <label
                htmlFor="input"
                className="text-base tracking-[1px] mx-[37px] h-[50px] flex items-center pt-7 py-2"
              >
                <span className="font-semibold">Step {list.id}: </span>
                {list.title}
              </label>
            </div>
            <div className="absolute top-0 right-8  transition-transform duration-500 rotate-0 peer-checked:rotate-180 cursor-pointer text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div className="max-h-0 overflow-hidden peer-checked:max-h-full text-base">
              {list.description}
            </div>
          </div>
        ))}
      </div>
      {/* The Start your journey component */}
      <div>
        <Journey />
      </div>
    </section>
  );
};

export default Screening;
