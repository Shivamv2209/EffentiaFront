import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function RightCircle(){
  
    const rotateref = useRef();
    const featuresref = useRef([]);

    useGSAP(()=>{
        gsap.to(rotateref.current,{
            rotate:-360,
            duration:20,
            ease:"linear",
            repeat:-1,
        })

        gsap.from(featuresref.current,{
            x:100,
            opacity:0,
            stagger:0.6,
            duration:3,
            ease:"bounce.out",
        })
    },[])

    return(
        <div className="relative w-[400px] h-[400px] mx-auto">
            <div className="absolute w-full h-full inset-0 border-2 border-[#D9D9D9] rounded-full"></div>
           <div ref={rotateref} className="absolute w-full h-full inset-0">
             <div className="absolute inset-6 border-dashed border-[#D9D9D9] w-[350px] h-[350px] border-2 rounded-full"></div>
            <div className="absolute top-6 left-1/2 transform -translate-x-13 w-3 h-3 rounded-full bg-[#FA812F]"></div>
            <div className="absolute top-15 left-15 w-10 h-10 rounded-xl bg-[#EFEAEA] shadow-xl flex items-center justify-center">
                <img src="/target.png" alt="" className="w-7 h-7" />
            </div>
            <div className="absolute top-38 left-19 transform -translate-x-13 w-3 h-3 rounded-full bg-[#2FFA3D]"></div>
            <div className="absolute top-56 left-5 w-10 h-10 rounded-xl bg-[#EFEAEA] shadow-xl flex items-center justify-center">
                <img src="/rocket.png" alt="" className="w-7 h-7" />
            </div>
            <div className="absolute bottom-18 left-17 w-3 h-3 rounded-full bg-[#2F58FA]"></div>
            <div className="absolute bottom-2 left-35 w-10 h-10 rounded-xl bg-[#EFEAEA] shadow-xl flex items-center justify-center">
                <img src="/analysis.png" alt="" className="w-7 h-7"/>
            </div>
           </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-50 h-50 bg-[#FA812F] rounded-full"></div>
            {/* feature part */}
            <div ref={(el)=> (featuresref.current[0]=el)} className="absolute top-23 left-33 flex items-center gap-8 cursor-pointer bg-[#EFEAEA] hover:scale-110 origin-center px-4 py-2 rounded-lg shadow-lg ">
                <img src="/star.png" alt="" className="w-5 h-5" />
                <h3 className="text-sm font-medium ml-3 mr-20 text-center">Feature 1</h3>
            </div>
            <div ref={(el)=> (featuresref.current[1]=el)} className="absolute top-38 right-2 flex items-center gap-8 bg-[#EFEAEA] px-4 py-2 rounded-lg shadow-lg">
                <img src="/star.png" alt="" className="w-5 h-5" />
                <h3 className="text-sm font-medium ml-3 mr-20 text-center">Feature 2</h3>
            </div>
            <div ref={(el)=> (featuresref.current[2]=el)} className="absolute top-53 left-33 transform translate-x-15 flex items-center gap-8 bg-[#EFEAEA] px-4 py-2 rounded-lg shadow-lg">
                <img src="/star.png" alt="" className="w-5 h-5" />
                <h3 className="text-sm font-medium ml-3 mr-20 text-center">Feature 3</h3>
            </div>
            <div ref={(el)=> (featuresref.current[3]=el)} className="absolute top-68 left-33 transform translate-x-20 flex items-center gap-8 bg-[#EFEAEA] px-4 py-2 rounded-lg shadow-lg">
                <img src="/star.png" alt="" className="w-5 h-5" />
                <h3 className="text-sm font-medium ml-3 mr-20 text-center">Feature 4</h3>
            </div>

          </div>
    )
}

export default RightCircle;