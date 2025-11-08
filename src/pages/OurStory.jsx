import React from "react";

const OurStory = () => {
  return (
    <div
      className="w-full flex flex-col lg:flex-row pt-10 px-4 md:px-8 lg:pl-14 min-h-screen bg-cover bg-center bg-no-repeat justify-center items-center"
      style={{ backgroundImage: "url('/BG.png')" }}
    >
      <div className="w-full lg:w-[40%] mt-10 lg:mt-[90px] flex flex-col">
        <div className="flex flex-col gap-4 text-center lg:text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-castoro">
            A montage of familiar faces and names.
          </h1>
          <div className="text-sm sm:text-base">
            <p>Some stories come from the biggest names.</p>
            <p>Others begin with bold, rising voices.</p>
            <p>We’ve been fortunate to walk alongside both -</p>
            <p>listening, creating, and building stories that</p>
            <p>matter.</p>
          </div>
        </div>

        <div className="w-full flex justify-center mt-6">
          <div className="relative flex w-[280px] sm:w-[360px] md:w-[440px] justify-between">
            <img
              src="/Frame 9.png"
              alt="card 1"
              className="h-[120px] w-[120px] sm:h-[160px] sm:w-[160px] md:h-[200px] md:w-[200px] z-10"
            />

            <img
              src="/Frame 22.png"
              alt="card 2"
              className="h-[120px] w-[120px] sm:h-[160px] sm:w-[160px] md:h-[200px] md:w-[200px] -ml-[40px] sm:-ml-[60px] md:-ml-[80px] z-20"
            />

            <img
              src="/Frame 23.png"
              alt="card 3"
              className="h-[120px] w-[120px] sm:h-[160px] sm:w-[160px] md:h-[200px] md:w-[200px] -ml-[40px] sm:-ml-[60px] md:-ml-[80px] z-30"
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[60%] flex flex-col justify-center items-center mt-10 lg:mt-12 gap-6 lg:gap-[50px]">
        <div>
          <img
            src="/Every.png"
            alt="text"
            className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] h-auto"
          />
        </div>

        <div className="relative flex justify-center items-center">
          <img
            src="/Group 10.png"
            alt="brand"
            className="w-[280px] sm:w-[350px] md:w-[450px] lg:w-[500px] h-auto"
          />
          <img
            src="/OBJECTS.png"
            alt="object"
            className="absolute top-[25%] left-[10%] sm:top-[18%] sm:left-[12%] md:top-[20%] md:left-[8%] w-[200px] sm:w-[250px] md:w-[320px] lg:w-[400px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
