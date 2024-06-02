import React from "react";

const LeftPart = ({ markets }) => {
  return (
    <div>
      <p className="text-lg md:text-2xl font-medium mb-4">{markets.title}</p>
      <div className="flex lg:justify-between flex-wrap gap-5 text-[#202229CC]">
        {markets.markets.map((market, index) => (
          <span key={index} className="flex items-center gap-2">
            <img src={market.icon} alt={market.text} />
            {market.text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LeftPart;
