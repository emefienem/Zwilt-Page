import React from "react";

const RightPart = ({ markets }) => {
  return (
    <div className="bg-white rounded-lg p-7">
      <p className="mb-5 font-semibold">{markets.title}</p>
      <div className="flex items-start gap-5 w-full overflow-x-auto md:overflow-x-hidden">
        {markets.markets.map((market, index) => (
          <div
            key={index}
            className="flex flex-col flex-wrap items-center gap-2"
          >
            <div className="w-[76px] h-[76px] lg:w-[86px] lg:h-[86px] rounded-full flex items-center justify-center bg-[#F6F6F6] hover:scale-125 cursor-pointer">
              <img src={market.icon} alt={market.text} />
            </div>
            <p className="text-sm max-w-[50px] text-center">{market.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightPart;
