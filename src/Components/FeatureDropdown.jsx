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
<div className="absolute z-[999] w-full top-15 flex left-0 shadow-lg bg-white">
      <div className="w-[60%]  bg-white pt-8 pl-28 pr-8 pb-8">
        <div className="flex items-center text-left">
          <h4 className="text-md font-medium">
            Explore the features that help your team succeed
          </h4>
        </div>
        <hr className="mt-4 text-zinc-300" />
        <div className="grid grid-cols-3 mt-3 gap-2">
          {featureContent.map((f, i) => (
            <div
              key={i}
              className="flex flex-col px-4 py-2 cursor-pointer transition-all duration-100 group">
              <div className="flex items-center gap-5">
                <img src={f.image} alt="" className="w-4 h-4" />
                <h5 className="text-sm font-medium group-hover:text-[#FA812F] transition-colors duration-100">{f.heading}</h5>
              </div>
              <p className="mt-1 text-zinc-500 text-xs">{f.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[40%] bg-zinc-100 pt-8 pl-8 pr-8 pb-8">
        <div>
          <h4 className="text-md font-medium text-gray-700 mb-6">Meet Leadnest</h4>
          <hr className="text-zinc-500" />
          <div className="mt-6">
            <p className="text-sm text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              possimus esse minima natus eligendi nisi eaque, eos aliquam rem
              cupiditate!
            </p>
          </div>
          <div className="mt-8">
            <button className="px-4 py-2 border border-zinc-700 text-sm font-medium text-gray-700 bg-white rounded-md shadow-sm hover:bg-zinc-200 transition-all duration-150">
              Check out Leadnest
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default FeatureDropdown;
