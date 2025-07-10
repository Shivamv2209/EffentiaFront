import React, { useState } from "react";
import Header from "../Components/Header";
import { FaGoogle,FaMicrosoft, FaFacebookF, FaApple } from "react-icons/fa";
import {useDispatch} from "react-redux"
import {setLogin} from "../Store/reducer/States"
import {useNavigate} from "react-router-dom"
import instance from "../utils/axiosInstances"
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email,setEmail]= useState("");
  const [password,setPassword] = useState("");

  const handleChange = (e) =>{
    const {name,value} = e.target

    if(name==="email"){
      setEmail(value)
    }else if(name==="password"){
      setPassword(value);
    }
  };

  const handleLogin = async (e) =>{
    e.preventDefault();

  try{
    const response = await instance.post("/auth/login",{
      email,password
    })

    const loggedIn = response.data;

   if(loggedIn){
    dispatch(setLogin({
      user:loggedIn.user,
      token:loggedIn.token
    }))

    navigate("/explore")
   }

  }catch(err){
     console.error("login error:", err.response?.data || err.message);
    alert(err.response?.data?.message || "login failed.");
  }
  }

  return (
    <div>
      <Header />
      <div className="min-h-screen flex">
        {/* Left side */}
        <div className="w-1/2 flex flex-col items-center justify-center p-10 space-y-6">
          <h1 className="w-2/3 text-5xl font-bold bg-clip-text text-transparent text-center p-1 bg-gradient-to-t from-orange-500/20 to-orange-500/75">
            A good system shortens the road to the goal.
          </h1>
          <p className="w-2/3 text-gray-600 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Morbi lobortis maximus
          </p>

          <div className="w-full max-w-sm space-y-4">
            {!showEmailForm ? (
              <>
                <button className="w-full px-4 py-2 border rounded-full flex items-center justify-center gap-3 hover:bg-gray-50 transition-transform duration-150 hover:scale-105">
                  <img
                    src="/google.png"
                    alt="Google"
                    className="w-5 h-5"
                  />
                  Continue with Google
                </button>

                <button className="w-full px-4 py-2 border rounded-full flex items-center justify-center gap-3 hover:bg-gray-50 transition-transform duration-150 hover:scale-105">
                  <img
                    src="/microsoft.png"
                    alt="Microsoft"
                    className="w-5 h-5"
                  />
                  Continue with Microsoft
                </button>

                <button className="w-full px-4 py-2 border rounded-full flex items-center justify-center gap-3 hover:bg-gray-50 transition-transform duration-150 hover:scale-105">
                  <FaApple className="text-xl text-black w-5 h-5" />
                  Continue with Apple
                </button>

                <div className="flex items-center justify-center my-4 space-x-2">
                  <hr className="flex-1 border-gray-300" />
                  <span className="text-gray-400">OR</span>
                  <hr className="flex-1 border-gray-300" />
                </div>

                <button
                  onClick={() => setShowEmailForm(true)}
                  className="w-full bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600 transition-transform duration-150 hover:scale-105"
                >
                  Log in with email
                </button>
              </>
            ) : (
              <>
                <form className="space-y-3 mt-2">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    name="password"
                    value={password}
                    className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                  <button
                    type="submit"
                    onClick={handleLogin}
                    className="w-full bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600 transition-transform duration-150 hover:scale-105"
                  >
                    Log In
                  </button>
                </form>

                {/* Optional: back to other login options */}
                <button
                  onClick={() => setShowEmailForm(false)}
                  className="text-sm text-gray-500 hover:underline mt-2"
                >
                  ← Back to other login options
                </button>
              </>
            )}
          </div>

          <p className="text-sm text-gray-500">
            Don’t have an account?{" "}
            <a href="/signup" className="text-orange-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>

        {/* Right side illustration */}
        <div className="w-1/2">
          <img
            src="/LoginHero.svg"
            alt="Kanban board illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
