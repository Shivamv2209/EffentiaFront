import React from "react";
import {Routes,Route} from "react-router-dom"
import MainPage from "./Pages/MainPage";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";
import Protected from "./utils/Protected";
import Explore from "./Pages/Explore";
import MyProjects from "./Pages/MyProjects";
import Projects from "./Pages/Projects";

function App(){
  return(
    <Routes>
     <Route path="/" element={<MainPage />} />
     <Route path="/login" element={<Login />} />
     <Route path="/signup" element={<Signup />} />
     <Route path="/explore" element={<Protected><Explore /></Protected>} />
     <Route path="/explore/MyProjects" element={<Protected><MyProjects /></Protected>} />
     <Route path="/explore/Projects" element={<Protected><Projects /></Protected>} />
    </Routes>
  )
}

export default App;