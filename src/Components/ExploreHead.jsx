import React from "react";
import {Link,useLocation} from "react-router-dom"

function ExploreHead(){
     const location = useLocation();
 return(
    <div className="w-full mt-20 flex items-center justify-center gap-5">
        <Link to="/explore/MyProjects" className={`text-2xl ${location.pathname==="/explore/MyProjects" ? "text-[#FA812F]" : "text-zinc-700" } `}>My Projects</Link>
        <Link to="/explore/Projects" className={`text-2xl ${location.pathname==="/explore/Projects" ? "text-[#FA812F]" : "text-zinc-700" } `}>Explore Projects</Link>
    </div>
 )
}

export default ExploreHead;