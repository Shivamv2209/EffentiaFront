import React from "react";

function HeroSection() {
  return (
    <>
      <div className="mt-2 w-full flex items-center justify-between gap-5 p-8 ml-10">
        <div className="w-[40%] flex flex-col p-15 mt-10">
          <div className="inline-flex flex-wrap">
            <h1 className="text-3xl font-semibold text-shadow-lg">Organize smarter, execute faster, stress less.</h1>
          </div>
          <div className="inline-flex flex-wrap">
            <p className="text-lg text-zinc-700">
              A powerful workspace to manage projects, collaborate with your
              team, and track personal progress—all in one place,
            </p>
          </div>
          <div className="flex items-center gap-5 mt-7">
            <button className="px-3 text-sm py-2 rounded-3xl bg-[#FA812F] text-white shadow-lg font-semibold">TRY IT FOR FREE</button>
            <div>
                <button className="font-medium text-shadow-lg">EXPLORE MORE</button>
                <hr className="font-bold text-[#FA812F]"/>
            </div>
          </div>
        </div>
        <div className="w-[60%] p-10 mt-10">
          <div className="relative w-[400px] h-[400px] mx-auto">
            <div className="absolute w-full h-full rounded-full border-dashed border-2 border-gray-300"></div>
  {/* Orbit Circle */}
  <div className="absolute w-full h-full rounded-full border-dashed border-2 border-gray-300"></div>

  {/* Center Orange Circle */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 w-40 h-40 rounded-full z-10"></div>

  {/* Orbit Icons */}
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <img src="/icon1.png" alt="icon" className="w-10 h-10" />
  </div>
  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
    <img src="/icon2.png" alt="icon" className="w-10 h-10" />
  </div>
  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
    <img src="/icon3.png" alt="icon" className="w-10 h-10" />
  </div>
  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
    <img src="/icon4.png" alt="icon" className="w-10 h-10" />
  </div>

  {/* Feature Cards */}
  <div className="absolute top-1/2 left-[70%] -translate-y-1/2 flex flex-col gap-4">
    {[1, 2, 3, 4].map((num) => (
      <div key={num} className="flex items-center bg-white shadow-md rounded-full px-4 py-2 w-48">
        <img src="/star.png" className="w-5 h-5 mr-2" alt="star" />
        <span className="font-semibold">Feature {num}</span>
      </div>
    ))}
  </div>
</div>

        </div>
      </div>
    </>
  );
}

export default HeroSection;
