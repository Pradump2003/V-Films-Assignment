import React from "react";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/BG.png')" }}
    >
      {/* === MAIN SECTION === */}
      <div className="w-full flex flex-col lg:flex-row justify-center items-center pt-[90px] px-6 md:px-10 lg:px-[60px]">
        {/* LEFT: Mandala + V Films */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mb-10 lg:mb-0">
          <div className="relative h-[280px] w-[280px] sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px]">
            <img
              src="/Hero Mandala.png"
              alt="Mandala"
              className="w-full h-full object-cover rounded-lg"
            />

            <img
              src="/vFilms.png"
              alt="V Films"
              className="absolute top-1/2 left-1/2 w-[120px] sm:w-[150px] lg:w-[180px] object-contain transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>

        {/* RIGHT: Text Section */}
        <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:py-10 text-center lg:text-center">
          <img
            src="/verman.png"
            alt="text image"
            className="mx-auto lg:mx-auto w-[220px] sm:w-[280px] lg:w-[320px]"
          />

          <p className="text-xl sm:text-2xl font-semibold text-[#B2431F] my-8 lg:my-12">
            Films . Brands . Art
          </p>

          <div className="text-sm sm:text-base text-[#252729] leading-relaxed space-y-1">
            <p>Since 2009, V’s been telling stories — stories of people,</p>
            <p>their journeys, and the places that shape them.</p>
            <p>
              Some begin in polished boardrooms, others in humble village
              squares.
            </p>
            <p>
              But every story starts the same way — by listening with intention.
            </p>
            <p>
              V believes it takes trust, patience, and an eye for the unseen to
              capture what truly matters.
            </p>
            <p>V doesn’t just tell stories — V honors them.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
