// import React from "react";
// import OnboardImg from "../assets/onboard.svg";
// import Image2 from "../assets/Chatbar.png";
// import Image3 from "../assets/Tracking.png";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";

// const ChooseUsData = [
//   {
//     title: "Onboard without the risk.",
//     list: [
//       "We pick the best for you to select.",
//       "Thousands of vetted candidates in dozens of categories.",
//       "Risk-free resource swapping for the best fit.",
//     ],
//     color: "#50589F",
//     image: OnboardImg,
//   },
//   {
//     title: "An open book.",
//     list: [
//       "Easy and transparent one-to-one chat with candidates.",
//       "Simple and convenient payment methods.",
//       "Review past ratings",
//     ],
//     color: "#FFBE2E",
//     image: Image2,
//   },
//   {
//     title: "Stay in the loop.",
//     list: [
//       "Track your staff activity down to every minute with screenshots.",
//       "Comprehensive timesheet data to process payments.",
//       "Create projects to organize and assign tasks more effectively.",
//     ],
//     color: "#C7F4C2",
//     image: Image3,
//   },
// ];

// const ChooseUs = () => {
//   const [emblaRef] = useEmblaCarousel(
//     { loop: true, align: "center", draggable: false },
//     [Autoplay({ delay: 3000 })] // Autoplay with a 3 second delay
//   );

//   return (
//     <section className="gradient-bg text-[#202229] md:min-h-screen slanted-border lg:flex py-20">
//       <div className="section px-8 flex flex-col lg:flex-row lg:mt-0">
//         <div className="max-w-[380px] mb-8 lg:hidden">
//           <h1 className="md:text-5xl text-3xl font-bold mb-8">
//             Why choose Zwilt?
//           </h1>
//           <p className="md:text-[22px] text-base md:leading-8 text-[#1E1515CC]">
//             We take complex hiring processes - and simplify them. Connecting you
//             to the world&apos;s highly qualified talent pool.
//           </p>
//         </div>
//         <div className="flex items-center gap-5 w-full lg:w-1/2">
//           <div className="max-w-[380px] hidden lg:block">
//             <h1 className="md:text-5xl text-3xl font-bold mb-8">
//               Why choose Zwilt?
//             </h1>
//             <p className="md:text-[22px] text-base md:leading-8 text-[#1E1515CC]">
//               We take complex hiring processes - and simplify them. Connecting
//               you to the world&apos;s highly qualified talent pool.
//             </p>
//           </div>
//         </div>
//         <div className="flex-1 lg:flex lg:items-center lg:justify-center scrollbar-hide">
//           <div ref={emblaRef}>
//             <div className="flex">
//               {ChooseUsData.map((choose, index) => (
//                 <div
//                   key={index}
//                   className="flex-none p-4 lg:p-10 rounded-[20px] bg-white flex flex-col lg:flex-row items-center justify-between shadow-lg"
//                   style={{ minWidth: "100%", maxWidth: "100%" }}
//                 >
//                   <div className="lg:max-w-[450px] w-full mb-4 lg:mb-0">
//                     <p className="md:text-4xl text-xl font-bold mb-8">
//                       {choose.title}
//                     </p>
//                     <div className="mb-8">
//                       {choose.list.map((each, index) => (
//                         <div
//                           key={index}
//                           className="flex items-center gap-3 mb-2 text-base"
//                         >
//                           <div
//                             className="w-[18px] h-[7px] rounded-[21px]"
//                             style={{ backgroundColor: choose.color }}
//                           ></div>
//                           <span>{each}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="flex-shrink-0">
//                     <img
//                       src={choose.image}
//                       alt={choose.title}
//                       className="md:w-[520px] md:h-[520px] w-[300px] h-[300px]"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ChooseUs;

import React from "react";
import OnboardImg from "../assets/onboard.svg";
import Image2 from "../assets/Chatbar.png";
import Image3 from "../assets/Tracking.png";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const ChooseUsData = [
  {
    title: "Onboard without the risk.",
    list: [
      "We pick the best for you to select.",
      "Thousands of vetted candidates in dozens of categories.",
      "Risk-free resource swapping for the best fit.",
    ],
    color: "#50589F",
    image: OnboardImg,
  },
  {
    title: "An open book.",
    list: [
      "Easy and transparent one-to-one chat with candidates.",
      "Simple and convenient payment methods.",
      "Review past ratings",
    ],
    color: "#FFBE2E",
    image: Image2,
  },
  {
    title: "Stay in the loop.",
    list: [
      "Track your staff activity down to every minute with screenshots.",
      "Comprehensive timesheet data to process payments.",
      "Create projects to organize and assign tasks more effectively.",
    ],
    color: "#C7F4C2",
    image: Image3,
  },
];

const ChooseUs = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "center", draggable: false },
    [Autoplay({ delay: 3000 })]
  );

  return (
    <section className="gradient-bg text-[#202229] md:min-h-screen slanted-border lg:flex py-20 scrollbar-hide overflow-x-auto">
      <div className="section px-8 flex flex-col lg:flex-row lg:mt-0 w-full">
        <div className="flex-1 lg:w-1/2 flex flex-col justify-center lg:pr-8">
          <div className="max-w-[380px] mb-8 lg:mb-0">
            <h1 className="md:text-5xl text-3xl font-bold mb-8">
              Why choose Zwilt?
            </h1>
            <p className="md:text-[22px] text-base md:leading-8 text-[#1E1515CC]">
              We take complex hiring processes - and simplify them. Connecting
              you to the world&apos;s highly qualified talent pool.
            </p>
          </div>
        </div>
        <div className="flex-1 lg:w-1/2 lg:flex lg:items-center lg:justify-center scrollbar-hide">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container flex">
              {ChooseUsData.map((choose, index) => (
                <div
                  key={index}
                  className="embla__slide flex-none p-4 lg:p-10 rounded-[20px] bg-white flex flex-col lg:flex-row items-center justify-between shadow-lg"
                  style={{ minWidth: "100%", maxWidth: "100%" }}
                >
                  <div className="lg:max-w-[450px] w-full mb-4 lg:mb-0">
                    <p className="md:text-4xl text-xl font-bold mb-8">
                      {choose.title}
                    </p>
                    <div className="mb-8">
                      {choose.list.map((each, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 mb-2 text-base"
                        >
                          <div
                            className="w-[18px] h-[7px] rounded-[21px]"
                            style={{ backgroundColor: choose.color }}
                          ></div>
                          <span>{each}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <img
                      src={choose.image}
                      alt={choose.title}
                      className="md:w-[520px] md:h-[520px] w-[300px] h-[300px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
