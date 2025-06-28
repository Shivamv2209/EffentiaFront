import React, { useRef } from "react";
import RightCircle from "./RightCircle";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function HeroSection() {
  
  const leftcontent = useRef();

  useGSAP(()=>{
    gsap.from(leftcontent.current,{
      opacity:0,
      y:50,
      duration:3,
      ease:"power3.out"
,    })
  },[])

  return (
    <>
      <div className="mt-2 w-full flex items-center justify-between gap-10 p-8 ml-10">
        <div ref={leftcontent} className="w-[40%] flex flex-col p-15 mt-10">
          <div className="inline-flex flex-wrap">
            <h1 className="text-3xl font-semibold">
              Organize smarter, execute faster, stress less.
            </h1>
          </div>
          <div className="inline-flex flex-wrap">
            <p className="text-lg text-zinc-700">
              A powerful workspace to manage projects, collaborate with your
              team, and track personal progress—all in one place,
            </p>
          </div>
          <div className="flex items-center gap-5 mt-7">
            <button className="px-3 text-sm py-2 rounded-3xl bg-[#FA812F] text-white shadow-lg font-semibold cursor-pointer">
              TRY IT FOR FREE
            </button>
            <div>
              <button className="font-medium text-shadow-lg cursor-pointer">
                EXPLORE MORE
              </button>
              <hr className="font-bold text-[#FA812F]" />
            </div>
          </div>
        </div>
        <div className="w-[60%] p-10 mt-10">
          <RightCircle />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
