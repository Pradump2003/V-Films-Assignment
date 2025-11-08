import React from "react";

const PortFolio = () => {
  return (
    <div
      className="w-full pt-16 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/BG.png')" }}
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between">
        {/* Left Section (Camera) */}
        <div className="hidden lg:flex justify-center items-center w-full lg:w-[20%] h-[250px] lg:h-screen">
          <img
            src="/Cam Group.png"
            alt="cam stand"
            className="h-[200px] sm:h-[250px] md:h-[300px] w-[120px] sm:w-[140px] md:w-[150px]"
          />
        </div>

        {/* Center Section (Main Content) */}
        <div className="flex flex-col items-center w-full lg:w-[60%] px-4 sm:px-8">
          <div className="flex flex-col items-center pt-6 sm:pt-10 gap-2 text-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">
              The Highlight Reel
            </h1>
            <p className="text-sm sm:text-base text-gray-700">
              Watch the magic we've captured
            </p>
          </div>

          <div className="relative flex justify-center mt-8 w-full">
            {/* Main Reel Image */}
            <img
              src="/Group 11.png"
              alt="reels"
              className="h-auto w-[80%] max-w-[500px]"
            />

            {/* Right overlays */}
            <div className=" flex flex-col items-center gap-3 sm:gap-4">
              <img
                src="/Rectangle 44.png"
                alt=""
                className="h-[90px] sm:h-[160px] md:h-[200px] w-auto absolute top-1/2 -translate-y-1/2 right-[12%] sm:right-[15%] md:right-[15%]"
              />
              <img
                src="/Vector 9.png"
                alt="next reel"
                className="h-[35px] sm:h-[45px] md:h-[55px] w-auto absolute top-1/2 -translate-y-1/2 right-[13%] sm:right-[10%] md:right-[17%]"
              />
            </div>

            {/* Left overlays */}
            <div className=" flex flex-col items-center gap-3 sm:gap-4">
              <img
                src="/Rectangle 44.png"
                alt=""
                className="h-[90px] sm:h-[160px] md:h-[200px] w-auto absolute top-1/2 -translate-y-1/2 left-[12%] sm:left-[15%] md:left-[15%]"
              />
              <img
                src="/Vector 10.png"
                alt="prev reel"
                className="h-[35px] sm:h-[45px] md:h-[55px] w-auto absolute top-1/2 -translate-y-1/2 left-[13%] sm:left-[10%] md:left-[17%]"
              />
            </div>
          </div>
        </div>

        {/* Right Section (Footer Graphic) */}
        <div className="hidden lg:flex w-[20%] justify-end items-end h-[200px] lg:h-screen">
          <img
            src="/Footer Vector.png"
            alt="footer"
            className="h-[150px] sm:h-[200px] md:h-[250px] w-[120px] sm:w-[160px] md:w-[200px]"
          />
        </div>
      </div>
    </div>
  );
};

export default PortFolio;
