import React, { useRef} from "react";
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
        <div className="relative w-[500px] h-[500px] mx-auto">
            <div className="absolute w-full h-full inset-0 border-2 border-[#D9D9D9] rounded-full"></div>
           <div ref={rotateref} className="absolute w-full h-full inset-0">
             <div className="absolute inset-6 border-dashed border-[#D9D9D9] w-[450px] h-[450px] border-2 rounded-full"></div>
            <div className="absolute top-6 left-1/2 transform -translate-x-13 w-4 h-4 rounded-full bg-[#FA812F]"></div>
            <div className="absolute top-19 left-16 w-12 h-12 rounded-xl bg-[#EFEAEA] shadow-xl flex items-center justify-center">
                <img src="/targetsvg.svg" alt="" className="w-9 h-9" />
            </div>
            <div className="absolute top-50 left-18 transform -translate-x-13 w-4 h-4 rounded-full bg-[#2FFA3D]"></div>
            <div className="absolute bottom-35 left-6 w-12 h-12 rounded-xl bg-[#EFEAEA] shadow-xl flex items-center justify-center">
                <img src="/rocketsvg.svg" alt="" className="w-9 h-9" />
            </div>
            <div className="absolute bottom-13 left-30 w-4 h-4 rounded-full bg-[#2F58FA]"></div>
            <div className="absolute bottom-1 left-50 w-12 h-12 rounded-xl bg-[#EFEAEA] shadow-xl flex items-center justify-center">
                <img src="/analysissvg.svg" alt="" className="w-9 h-9"/>
            </div>
           </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#FA812F] rounded-full"></div>
            {/* feature part */}
            <div ref={(el)=> (featuresref.current[0]=el)} className="absolute top-33 left-43 flex items-center gap-8 cursor-pointer bg-[#EFEAEA] hover:scale-110 origin-center px-6 py-2 rounded-lg shadow-lg ">
                <img src="/star.png" alt="" className="w-7 h-7" />
                <h3 className="text-md font-medium ml-3 mr-20 text-center">Feature 1</h3>
            </div>
            <div ref={(el)=> (featuresref.current[1]=el)} className="absolute top-48 left-50 flex items-center gap-8 bg-[#EFEAEA] px-6 py-2 rounded-lg shadow-lg">
                <img src="/star.png" alt="" className="w-7 h-7" />
                <h3 className="text-md font-medium ml-3 mr-20 text-center">Feature 2</h3>
            </div>
            <div ref={(el)=> (featuresref.current[2]=el)} className="absolute top-63 left-43 transform translate-x-15 flex items-center gap-8 bg-[#EFEAEA] px-6 py-2 rounded-lg shadow-lg">
                <img src="/star.png" alt="" className="w-7 h-7" />
                <h3 className="text-md font-medium ml-3 mr-20 text-center">Feature 3</h3>
            </div>
            <div ref={(el)=> (featuresref.current[3]=el)} className="absolute top-78 left-45 transform translate-x-20 flex items-center gap-8 bg-[#EFEAEA] px-6 py-2 rounded-lg shadow-lg">
                <img src="/star.png" alt="" className="w-7 h-7" />
                <h3 className="text-md font-medium ml-3 mr-20 text-center">Feature 4</h3>
            </div>
          </div>
    )
}

export default RightCircle;