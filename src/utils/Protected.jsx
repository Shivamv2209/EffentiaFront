import React, { useEffect } from "react";
import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"

function Protected({children}){
 const navigate = useNavigate();
 const token = useSelector((state)=>state.token)

 useEffect(()=>{
    if(!token){
        navigate("/")
    }
 },[token,navigate])

 if(!token){
    return null;
 }

 return children;
}

export default Protected;