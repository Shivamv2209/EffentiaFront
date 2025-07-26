import React, { useEffect, useState } from "react";
import {Routes,Route} from "react-router-dom"
import MainPage from "./Pages/MainPage";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";
import Protected from "./utils/Protected";
import MyProjects from "./Pages/MyProjects";
import Projects from "./Pages/Projects";
import { useSelector } from "react-redux";

function App(){

  const [isAllowed,setIsAllowed] = useState(true);

  useEffect(()=>{
    const useragent = navigator.userAgent.toLowerCase();
    const isMobile = /mobile|android|iphone|ipad|ipod/.test(useragent);
    const smallScreen = window.innerWidth < 1024;
    
    if(isMobile || smallScreen){
       setIsAllowed(false);
    }
  },[]);

  if(!isAllowed){
    return(
      <div style={{ padding: 40, textAlign: "center" }}>
        <h2>This app is only accessible on desktop/laptop devices.</h2>
        <p>The mobile app will be available soon</p>
      </div>
    )
  }
  return(
    <Routes>
     <Route path="/" element={<MainPage />} />
     <Route path="/login" element={<Login />} />
     <Route path="/signup" element={<Signup />} />
     <Route path="/explore/MyProjects" element={<Protected><MyProjects /></Protected>} />
     <Route path="/explore/Projects" element={<Protected><Projects /></Protected>} />
    </Routes>
  )
}

export default App;