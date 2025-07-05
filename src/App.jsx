import React from "react";
import {Routes,Route} from "react-router-dom"
import MainPage from "./Pages/MainPage";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";
import Display1 from "./Pages/Display1";

function App(){
  return(
    <Routes>
     <Route path="/" element={<MainPage />} />
     <Route path="/login" element={<Login />} />
     <Route path="/signup" element={<Signup />} />
     <Route path="/user/dis1" element={<Display1 />} />
    </Routes>
  )
}

export default App;