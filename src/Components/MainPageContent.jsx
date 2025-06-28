import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function MainPageContent() {

    const mainContent = useRef();

    useGSAP(()=>{
     gsap.from(mainContent.current,{
        opacity:0,
        y:50,
        duration:3,
        ease:"power3.out"
     })
    },[])
  return (
    <div ref={mainContent} className="mt-0 flex items-center justify-between px-30 gap-15">
        <div className="inline-block">
            <img src="/calendar.png" alt="" className="w-8 h-8"/>
            <h4 className="mt-2 text-md font-medium">Calendar</h4>
            <p className="mt-2 text-sm text-zinc-700">Plan ahead, stay on track, and never miss a deadline. Leadnest's
          calendar helps you visualize your workflow and coordinate tasks
          effortlessly across teams.</p>
        </div>
        <div className="inline-block">
            <img src="/collaboration.png" alt="" className="w-8 h-8"/>
            <h4 className="mt-2 text-md font-medium">Collaboration</h4>
            <p className="mt-2 text-sm text-zinc-700"> Share context, align on progress, and break down silos. Collaborate
          in real-time with teammates and stakeholders to get things done
          faster.</p>
        </div>
        <div className="inline-block">
            <img src="/teamwork.png" alt="" className="w-8 h-8"/>
            <h4 className="mt-2 text-md font-medium">Teamwork</h4>
            <p className="mt-2 text-sm text-zinc-700">Empower every role with shared goals, open communication, and aligned
          priorities. Leadnest fosters seamless teamwork with built-in clarity.</p>
        </div>
    </div>
  );
}

export default MainPageContent;
