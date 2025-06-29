import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";

function Navbar() {
  const featureContent = [
    {
      image: "/star.png",
      heading: "Feature 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Placeat quidem illum harum nam",
      color: "#F8EDEB",
    },
    {
      image: "/star.png",
      heading: "Feature 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Placeat quidem illum harum nam",
      color: "#E1F6F2",
    },
    {
      image: "/star.png",
      heading: "Feature 3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Placeat quidem illum harum nam",
      color: "#F1DEEE",
    },
    {
      image: "/star.png",
      heading: "Feature 4",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Placeat quidem illum harum nam",
      color: "#EEECF4",
    },
    {
      image: "/star.png",
      heading: "Feature 5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Placeat quidem illum harum nam",
      color: "#F1EFEB",
    },
    {
      image: "/star.png",
      heading: "Feature 6",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Placeat quidem illum harum nam",
      color: "#FFF1F5",
    },
    {
      image: "/star.png",
      heading: "Feature 7",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Placeat quidem illum harum nam",
      color: "#C9E4DE",
    },
  ];

  const [featureDrop, setFeatureDrop] = useState(false);
  const [solutionDrop, setSolutionDrop] = useState(false);
  const [plansDrop, setPlansDrop] = useState(false);
  const [resourceDrop, setResourceDrop] = useState(false);

  const featureClick = () => {
    setFeatureDrop(!featureDrop);
  };
  return (
    <>
      <nav className="bg-white fixed z-[999] w-full top-0 start-0 shadow-xl">
        <div className="max-w-screen-xl flex items-center mx-auto justify-between md:p-0 sm:p-3">
          <div className="flex items-center gap-16">
            <a href="#" className="flex items-center gap-3">
              <span className="text-3xl font-extrabold mt-2 mb-2">
                LEADNEST
              </span>
            </a>

            <ul className="hidden md:flex items-center gap-4 mt-2 mb-2 text-zinc-700">
              <li
                onClick={featureClick}
                className="flex items-center hover:text-[#FA812F] cursor-pointer"
              >
                Features{" "}
                <span className="text-xl">
                  <RiArrowDropDownLine />
                </span>
              </li>
              <li className="flex items-center  hover:text-[#FA812F] cursor-pointer">
                Solutions{" "}
                <span className="text-xl">
                  <RiArrowDropDownLine />
                </span>
              </li>
              <li className="flex items-center  hover:text-[#FA812F] cursor-pointer">
                Plans{" "}
                <span className="text-xl">
                  <RiArrowDropDownLine />
                </span>
              </li>
              <li className=" hover:text-[#FA812F] cursor-pointer">Pricing</li>
              <li className="flex items-center hover:text-[#FA812F] cursor-pointer">
                Resources{" "}
                <span className="text-xl">
                  <RiArrowDropDownLine />
                </span>
              </li>
            </ul>
          </div>

          {featureDrop && (
            <div className="absolute z-[999] w-full top-10 h-auto flex items-center left-0 shadow-lg">
              <div className="w-[60%]  bg-white pt-10 pl-30 pr-10 pb-10">
                <div className="flex items-center text-left">
                  <h4 className="text-md font-medium">
                    Explore the features that help your team succeed
                  </h4>
                </div>
                <hr className="mt-4 text-zinc-300" />
                <div className="grid grid-cols-3 mt-3">
                  {featureContent.map((f, i) => (
                    <div
                      key={i}
                      className="flex flex-col px-4 py-2 hover:bg-emerald-50 cursor-pointer"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = f.color;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                    >
                      <div className="flex items-center gap-5">
                        <img src={f.image} alt="" className="w-4 h-4" />
                        <h5 className="text-sm">{f.heading}</h5>
                      </div>
                      <p className="mt-1 text-zinc-500 text-xs">{f.content}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-[40%] bg-zinc-100"></div>
            </div>
          )}

          <div className="hidden md:flex items-center gap-4">
            <button className="mt-1 text-xl cursor-pointer text-zinc-700">
              Log in
            </button>
            <button className="bg-[#FA812F] px-3 py-4 text-xl cursor-pointer hover:bg-orange-300">
              Get Leadnest for free
            </button>
          </div>
          <div className="md:hidden text-2xl">
            <IoMenu />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
