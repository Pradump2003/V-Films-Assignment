import React from "react";
import { useNavigate } from "react-router-dom";

const ArtCreation = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="w-full pt-16 min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/BG.png')" }}
      >
        {/* Header */}
        <div className="flex flex-col items-center px-4 text-center">
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">
            "V take art where it belongs, to the people.” - Vernita Verma
          </h1>
          <img
            src="/Vector 5.png"
            alt="line"
            className="h-[12px] sm:h-[16px] md:h-[20px] w-[250px] sm:w-[400px] md:w-[700px] mt-2"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row w-full h-full md:px-20 py-12 px-6 md:gap-10">
          {/* Left Section */}
          <div className="flex flex-col sm:flex-row gap-6 md:gap-10 justify-center items-center md:items-start md:justify-between lg:w-[45%]">
            <div className="flex md:flex-col justify-between items-center h-full w-full sm:w-auto">
              <button
                onClick={() => navigate("/services")}
                className="bg-[#B2431F] text-white px-5 py-2 rounded-full hover:bg-[#FF9D7DB2] hover:text-[#B2431F] transition w-auto"
              >
                Back
              </button>
              <img
                src="/Art Curation Icons 02.png"
                alt="camera4"
                className="h-[80px] sm:h-[100px] w-[80px] sm:w-[100px] self-end mt-6 sm:mt-0"
              />
            </div>

            <div className="flex items-center justify-center">
              <img
                src="/Frame35.png"
                alt="brand"
                className="h-[250px] sm:h-[300px] md:h-[350px] w-[220px] sm:w-[260px] md:w-[300px]"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-center md:items-end text-center md:text-left lg:w-[55%]">
            <div className="flex flex-col justify-between h-full mt-6 md:mt-0">
              <div>
                <p className="text-sm sm:text-base leading-relaxed">
                  Art isn’t meant to sit on distant walls - it’s <br />
                  meant to breathe, to travel, to belong. <br /> Through every
                  festival, every performance, <br /> and every gathering, we
                  help stories find <br /> their stage and their people. <br />{" "}
                  V curates:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-sm sm:text-base">
                  <li>Art Festivals</li>
                  <li>Live Performances</li>
                  <li>Community Events </li>
                  <li>Cultural Storytelling</li>
                </ul>
              </div>
              <div className="mt-10 md:mt-4 flex flex-col items-center md:items-start">
                <p className="font-medium text-[#B2431F]">Explore now</p>
                <img
                  src="/public/Arrow.png"
                  alt="arrow"
                  className="h-[30px] sm:h-[40px] w-[80px] sm:w-[100px]"
                />
              </div>
            </div>

            {/* Right Cameras */}

            <div className="flex flex-col justify-center sm:justify-between md:justify-between items-center md:items-end h-full gap-6 ">
              <img
                src="/Art Curation Icons 03.png"
                alt="camera 4"
                className="h-[80px] sm:h-[100px] w-[70px] sm:w-[80px] md:ml-12 lg:pl-22"
              />
              <img
                src="/Art Curation Icons 01.png"
                alt="camera 3"
                className="h-[80px] sm:h-[100px] w-[70px] sm:w-[80px]"
              />
              <img
                src="/Art Curation Icons 04.png"
                alt="camera "
                className="h-[80px] sm:h-[100px] w-[70px] sm:w-[80px]  md:ml-12 lg:ml-20 md:mt-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtCreation;
