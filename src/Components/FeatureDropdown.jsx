import React from "react";

function FeatureDropdown() {
  const featureContent = [
    {
      image: "/star.png",
      heading: "Feature 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Placeat quidem illum harum nam",

    },
    {
      image: "/star.png",
      heading: "Feature 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Placeat quidem illum harum nam",

    },
    {
      image: "/star.png",
      heading: "Feature 3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Placeat quidem illum harum nam",

    },
    {
      image: "/star.png",
      heading: "Feature 4",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Placeat quidem illum harum nam",
    },
    {
      image: "/star.png",
      heading: "Feature 5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Placeat quidem illum harum nam",
    },
    {
      image: "/star.png",
      heading: "Feature 6",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Placeat quidem illum harum nam",
    },
    {
      image: "/star.png",
      heading: "Feature 7",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Placeat quidem illum harum nam",
    },
  ];
  return (
    <div className="absolute z-[999] w-full top-15 h-auto flex items-center left-0 shadow-lg">
      <div className="w-[60%]  bg-white pt-8 pl-28 pr-8 pb-8">
        <div className="flex items-center text-left mb-6">
          <h4 className="text-md font-medium">
            Explore the features that help your team succeed
          </h4>
        </div>
        <hr className="mt-1 text-zinc-300 mb-1" />
        <div className="grid grid-cols-3 gap-3">
          {featureContent.map((f, i) => (
            <div
              key={i}
              className="flex flex-col px-4 py-2 cursor-pointer transition-all duration-100 group">
              <div className="flex items-center gap-4">
                <img src={f.image} alt="" className="w-4 h-4" />
                <h5 className="text-sm font-medium group-hover:text-[#FA812F] transition-colors duration-100">{f.heading}</h5>
              </div>
              <p className="mt-2 text-zinc-500 text-xs">{f.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[40%] bg-zinc-100 pl-10 pr-30 pt-8">
        <div className="mb-6">
          <div className="flex items-center text-left">
            <h4 className="text-md font ml-10">Meet Leadnest</h4>
          </div>
          <hr className="mt-3 text-zinc-400 ml-10" />
        </div>
        <div className="pl-10 pr-30">
          <div className="grid gird-cols-1 mt-3">
            <p className="text-sm text-zinc-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              possimus esse minima natus eligendi nisi eaque, eos aliquam rem
              cupiditate!
            </p>
          </div>
        </div>
        <div className="mt-7 mb-36.5 pr-30 pl-10 text-left">
          <div className="flex items-center">
            <button className="px-4 py-2 border-1 border-zinc-700 shadow-lg bg-white rounded-lg cursor-pointer hover:bg-zinc-300">
              Check out Leadnest
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default FeatureDropdown;
