import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";

function Navbar(){
    return(
        <nav className="bg-white fixed z-20 w-full top-0 start-0 shadow-xl">
            <div className="max-w-screen-xl flex items-center mx-auto justify-between md:p-0 sm:p-3">
                <div className="flex items-center gap-16">
                    <a href="#" className="flex items-center gap-3">
                  <span className="text-3xl font-extrabold mt-2 mb-2">LEADNEST</span>
                </a>

                <ul className="hidden md:flex items-center gap-4 mt-2 mb-2 text-zinc-700">
                    <li className="flex items-center hover:text-[#FA812F] cursor-pointer">Features{" "}<span className="text-xl"><RiArrowDropDownLine /></span></li>
                    <li className="flex items-center  hover:text-[#FA812F] cursor-pointer">Solutions{" "}<span className="text-xl"><RiArrowDropDownLine /></span></li>
                    <li className="flex items-center  hover:text-[#FA812F] cursor-pointer">Plans{" "}<span className="text-xl"><RiArrowDropDownLine /></span></li>
                    <li className=" hover:text-[#FA812F] cursor-pointer">Pricing</li>
                    <li className="flex items-center hover:text-[#FA812F] cursor-pointer">Resources{" "}<span className="text-xl"><RiArrowDropDownLine /></span></li>
                </ul>
                </div>
       
               

                <div className="hidden md:flex items-center gap-4">
                    <button className="mt-1 text-xl cursor-pointer text-zinc-700">Log in</button>
                    <button className="bg-[#FA812F] px-3 py-4 text-xl cursor-pointer hover:bg-orange-300">Get Leadnest for free</button>
                </div>
                <div className="md:hidden text-2xl">
                  <IoMenu />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;