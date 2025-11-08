import React from "react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full pt-12 min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/BG.png')" }}
    >
      
      <div className="flex flex-col items-center px-4 text-center">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">
          The storyboard reveals the breadth of our craft.
        </h1>
        <img
          src="/Vector 5.png"
          alt="line"
          className="h-[12px] sm:h-[16px] md:h-[20px] w-[250px] sm:w-[400px] md:w-[500px] mt-2"
        />
      </div>

      
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 mt-9 px-4">
        
        <div
          className="relative cursor-pointer transition-transform duration-300 hover:scale-105"
          onClick={() => navigate("/film-production")}
        >
          <img
            src="/image 6.png"
            alt="first image"
            className="h-[50px] sm:h-[60px] w-[120px] sm:w-[150px] absolute top-0 left-6 z-10"
          />
          <img
            src="/Frame 31.png"
            alt="tape"
            className="h-[250px] sm:h-[350px] w-[220px] sm:w-[300px]"
          />
        </div>

       
        <div
          className="relative cursor-pointer transition-transform duration-300 hover:scale-105 sm:mt-8"
          onClick={() => navigate("/branding")}
        >
          <img
            src="/image 6.png"
            alt="first image"
            className="h-[50px] sm:h-[60px] w-[120px] sm:w-[150px] absolute top-[-12px] sm:top-[-14px] left-10 sm:left-16 z-10"
          />
          <img
            src="/Frame 31 (1).png"
            alt="tape"
            className="h-[230px] sm:h-[330px] w-[200px] sm:w-[280px]"
          />
        </div>

       
        <div
          className="relative cursor-pointer transition-transform duration-300 hover:scale-105"
          onClick={() => navigate("/art-creation")}
        >
          <img
            src="/image 7.png"
            alt="first image"
            className="h-[50px] sm:h-[60px] w-[120px] sm:w-[150px] absolute top-0 left-20 sm:left-30 lg:left-36 z-10"
          />
          <img
            src="/Frame 31 (2).png"
            alt="tape"
            className="h-[250px] sm:h-[350px] w-[220px] sm:w-[300px]"
          />
        </div>
      </div>

      
      <div className="bottom-0 left-0 w-full">
        <img
          src="/Frame 33.png"
          alt="border image"
          className="w-full h-[50px] sm:h-[70px] md:h-[90px]"
        />
      </div>
    </div>
  );
};

export default Services;
