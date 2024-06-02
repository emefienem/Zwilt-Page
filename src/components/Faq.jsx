// import React from "react";
// import YellowLogo from "../assets/yellow-logo.svg";

// const faqsQuestion = [
//   "I want to work part-time, is that possible",
//   "How long are the average projects?",
//   "How does the payment works?",
//   "How much can I earn?",
// ];

// const Faq = () => {
//   return (
//     <section className="relative text-[#202229] bg-[#F3F3F3] min-h-screen slanted-border mb-[-9rem] bottom-5 md:bottom-14 py-20 pb-[10rem]">
//       <div className="section px-8">
//         <h1 className="md:text-5xl text-3xl font-bold lg:mb-20 mb-10 text-center">
//           Frequently asked questions
//         </h1>

//         <div className="flex flex-col">
//           {["General", ["General", , "Joining Process"]].map((item, i) => (
//             <div key={i}>
//               {faqsQuestion.map((faq, i) => (
//                 <div key={i} className={"flex group"}>
//                   <div
//                     className={`md:w-[20%] py-7 px-3 text-center border border-[#D6D6D6] group-hover:bg-[#E8E8E8] ${
//                       i !== 0 && "border-r-0"
//                     }`}
//                   >
//                     {i === 0 && item}
//                   </div>
//                   <div
//                     className={`px-3 border border-[#D6D6D6] w-full py-7 text-center hover:bg-[#E8E8E8] cursor-pointer relative ${
//                       i !== 0 && "border-l-0"
//                     }`}
//                   >
//                     <p className="text-base group-hover:font-bold">{faq}</p>
//                     <img
//                       src={YellowLogo}
//                       alt="Yellow logo"
//                       className={`absolute right-8 bottom-[40%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block`}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Faq;

import React, { useState } from "react";
import YellowLogo from "../assets/yellow-logo.svg";

const Faq = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative text-[#202229] bg-[#F3F3F3] min-h-screen slanted-border mb-[-9rem] bottom-5 md:bottom-14 py-20 pb-[10rem]">
      <div className="section px-8">
        <h1 className="md:text-5xl text-3xl font-bold lg:mb-20 mb-10 text-center">
          Frequently asked questions
        </h1>

        <div className="flex flex-col">
          {["General", ["General", , "Joining Process"]].map((item, i) => (
            <div key={i}>
              {faqsQuestion.map((faq, j) => (
                <div key={j} className="flex group">
                  <div
                    className={`md:w-[20%] py-7 px-3 text-center border border-[#D6D6D6] group-hover:bg-[#E8E8E8] ${
                      j !== 0 && "border-r-0"
                    }`}
                  >
                    {j === 0 && item}
                  </div>
                  <div
                    className={`px-3 border border-[#D6D6D6] w-full py-7 text-center hover:bg-[#E8E8E8] cursor-pointer relative ${
                      j !== 0 && "border-l-0"
                    }`}
                    onMouseEnter={() => setHoveredIndex(j)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <p
                      className={`text-base ${
                        hoveredIndex === j ? "font-bold" : ""
                      }`}
                    >
                      {faq}
                    </p>
                    <img
                      src={YellowLogo}
                      alt="Yellow logo"
                      className={`absolute right-8 bottom-[40%] opacity-0 transition-opacity duration-300 hidden md:block ${
                        hoveredIndex === j ? "opacity-100" : ""
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
