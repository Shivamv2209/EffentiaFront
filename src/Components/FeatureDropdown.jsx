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
    <div className="absolute z-[999] w-full top-15 h-auto flex flex-col md:flex-row left-0 shadow-lg bg-white animate-fadeIn">
      <div className="md:w-3/5 w-full pt-8 px-6 md:pl-28 md:pr-8 pb-8 bg-white">
        <div className="mb-6">
          <h4 className="text-md font-medium text-gray-700">
            Explore the features that help your team succeed
          </h4>
        </div>
        <hr className="mt-1 mb-4 text-zinc-300" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {featureContent.map((f, i) => (
            <div
              key={i}
              className="flex flex-col p-3 cursor-pointer transition-all duration-100 group hover:bg-gray-50 rounded-md"
            >
              <div className="flex items-start gap-4">
                <img src={f.image} alt="icon" className="w-4 h-4 mt-1" />
                <div className="flex-1">
                  <h5 className="text-sm font-medium group-hover:text-[#FA812F] transition-colors duration-100">
                    {f.heading}
                  </h5>
                  <p className="mt-2 text-zinc-500 text-xs leading-relaxed">
                    {f.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:w-2/5 w-full bg-zinc-100 pt-8 px-6 md:px-8 pb-8">
        <div className="mb-6">
          <h4 className="text-md font-medium text-gray-700 mb-4">
            Meet Leadnest
          </h4>
          <hr className="text-zinc-500" />
        </div>
        <p className="text-sm text-zinc-500 leading-relaxed mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          possimus esse minima natus eligendi nisi eaque, eos aliquam rem
          cupiditate!
        </p>
        <div>
          <button className="px-4 py-2 border border-zinc-700 shadow-sm bg-white rounded-lg hover:bg-zinc-300 transition">
            Check out Leadnest
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeatureDropdown;
