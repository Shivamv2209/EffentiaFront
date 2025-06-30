import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import FeatureDropdown from "./featureDropdown";
import SolutionDropdown from "./SolutionDropdown";
import PlanDropdown from "./PlanDropdown";
import ResourceDropdown from "./ResourceDropdown";

function Navbar() {
  const [featureDrop, setFeatureDrop] = useState(false);
  const [solutionDrop, setSolutionDrop] = useState(false);
  const [plansDrop, setPlansDrop] = useState(false);
  const [resourceDrop, setResourceDrop] = useState(false);

  
 
  const isAnyDropdownOpen =
    featureDrop || solutionDrop || plansDrop || resourceDrop;

  const featureClick = () => {
    setFeatureDrop(!featureDrop);
    setSolutionDrop(false);
    setPlansDrop(false);
    setResourceDrop(false);
  };

  const solutionClick = () => {
    setSolutionDrop(!solutionDrop);
    setFeatureDrop(false);
    setPlansDrop(false);
    setResourceDrop(false);
  };

  const plansClick = () =>{
    setPlansDrop(!plansDrop)
      setFeatureDrop(false);
     setSolutionDrop(false);
       setResourceDrop(false);
  }

  const resourceClick = () =>{
    setResourceDrop(!resourceDrop)
     setFeatureDrop(false);
     setSolutionDrop(false);
    setPlansDrop(false);

  }
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
                className={`flex items-center hover:text-[#FA812F] cursor-pointer transition-colors duration-100 ${
                    featureDrop ? "text-[#FA812F] " : ""
                }`}
              >
                Features{" "}
                <span className={`text-xl transition-transform duration-100 ${featureDrop ? 'rotate-180' : ''}`}>
                  <RiArrowDropDownLine />
                </span>
              </li>
              <li 
                onClick={solutionClick}
                className={`flex items-center hover:text-[#FA812F] cursor-pointer transition-colors duration-100 ${
                    solutionDrop ? "text-[#FA812F] " : ""
                }`}
              >
                Solutions{" "}
                <span className={`text-xl transition-transform duration-100 ${solutionDrop ? 'rotate-180' : ''}`}>
                  <RiArrowDropDownLine />
                </span>
              </li>
             <li 
                onClick={plansClick}
                className={`flex items-center hover:text-[#FA812F] cursor-pointer transition-colors duration-100 ${
                    plansDrop ? "text-[#FA812F] " : ""
                }`}
              >
                Plans{" "}
                <span className={`text-xl transition-transform duration-100 ${plansDrop ? 'rotate-180' : ''}`}>
                  <RiArrowDropDownLine />
                </span>
              </li>
              <li className=" hover:text-[#FA812F] cursor-pointer">Pricing</li>
              <li 
                onClick={resourceClick}
                className={`flex items-center hover:text-[#FA812F] cursor-pointer transition-colors duration-100 ${
                    resourceDrop ? "text-[#FA812F] " : ""
                }`}
              >
                Resources{" "}
                <span className={`text-xl transition-transform duration-100 ${resourceDrop ? 'rotate-180' : ''}`}>
                  <RiArrowDropDownLine />
                </span>
              </li>
            </ul>
          </div>

          {featureDrop && <FeatureDropdown />}
          {solutionDrop && <SolutionDropdown />}
          {plansDrop && ( <PlanDropdown /> )}
          {resourceDrop && <ResourceDropdown /> }
          <div className="hidden md:flex items-center gap-4">
            <button className="mt-1 text-xl cursor-pointer text-zinc-700 hover:text-[#FA812F] transition-colors duration-100">
              Log in
            </button>
            <button className="bg-[#FA812F] px-3 py-4 text-xl cursor-pointer hover:bg-orange-300 transition-colors duration-100">
              Get Leadnest for free
            </button>
          </div>
          <div className="md:hidden text-2xl">
            <IoMenu />
          </div>
        </div>
      </nav>
      {featureDrop || solutionDrop || plansDrop || resourceDrop ? (
        <div
          className="fixed inset-0 z-[998] transition-opacity duration-500 bg-[rgba(0,0,0,0.3)] backdrop-blur-sm"
          onClick={() => {
            setFeatureDrop(false);
            setSolutionDrop(false);
            setPlansDrop(false);
            setResourceDrop(false);
          }}
        />
      ) : null}
    </>
  );
}

export default Navbar;
