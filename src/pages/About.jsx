import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full flex flex-col lg:flex-row pt-10 px-6 lg:pl-14 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/BG.png')" }}
    >
      <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start mb-10 lg:mb-0">
        <img
          src="/Group9.png"
          alt="film craft"
          className="w-[250px] sm:w-[350px] lg:w-[400px] h-auto lg:h-[270px]"
        />

        <div className="flex flex-col sm:flex-row items-center lg:items-start mt-6">
          <img
            src="/IndiaGate.png"
            alt="india gate"
            className="h-[200px] sm:h-[250px] lg:h-[250px] w-auto"
          />
          <div className="flex flex-col gap-4 mt-4 sm:mt-0 sm:ml-4">
            <img
              src="/Vector (2).png"
              alt="arrow"
              className="h-[100px] sm:h-[120px] lg:h-[120px] w-auto lg:pl-28"
            />
            <img
              src="/Branding Experts.png"
              alt="branding export"
              className="h-[25px] sm:h-[30px] w-[120px] sm:w-[200px] pl-2 lg:pl-8"
            />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[55%] flex flex-col-reverse lg:flex-row items-center lg:items-start gap-6 lg:mt-10">
        <div className="flex flex-col gap-4 mt-6 lg:mt-10 items-center lg:items-start">
          <img
            src="/Film Makers.png"
            alt="film makers"
            className="h-[18px] w-[130px]"
          />
          <img
            src="/Vector (3).png"
            alt="arrow"
            className="h-[60px] sm:h-[50px] w-[100px] sm:w-[100px] lg:ml-20"
          />
          <img
            src="/Group 2.png"
            alt="group of people"
            className="h-[180px] sm:h-[200px] w-[280px] sm:w-[350px]"
          />
          <p className="mt-6 text-lg sm:text-lg text-center lg:text-left px-4 lg:px-0 ">
            Take a closer look at the stories V brings to life.
          </p>
          <div className="flex justify-center lg:justify-center w-full mb-10 lg:mb-0">
            <button
              onClick={() => navigate("/portfolio")}
              className="inline-flex items-center bg-[#B2431F] text-white px-5 py-2 rounded-full mt-2 hover:bg-[#FF9D7DB2] hover:text-[#B2431F] transition"
            >
              View Portfolio
            </button>
          </div>
        </div>

        <div className="flex flex-col mt-6 lg:mt-24 gap-4 items-center lg:items-start">
          <img
            src="/Art Curators.png"
            alt="art curators"
            className="h-[20px] w-[130px]"
          />
          <img
            src="/Vector (4).png"
            alt="arrow"
            className="h-[80px] sm:h-[80px] w-[50px] sm:w-[70px]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
