import React from "react";
import Header from "../Components/Header";

export default function Signup() {
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Morbi lobortis maximus
                    </p>

                    <form className="w-full max-w-sm space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1 pl-2">Email:</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1 pl-2">Full Name:</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1 pl-2">Password:</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>

                        <button className="w-full mt-3 bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600 transition-transform duration-150 hover:scale-105">
                            Sign up
                        </button>
                    </form>


                    <p className="text-sm text-gray-500">
                        Already have an account?{" "}
                        <a href="/login" className="text-orange-500 hover:underline">
                            Log in
                        </a>
                    </p>

                    <p className="text-xs text-gray-500 text-center w-full max-w-sm">
                        By signing up, you agree to the{" "}
                        <a href="#" className="underline hover:text-orange-600">Terms of Service</a> and{" "}
                        <a href="#" className="underline hover:text-orange-600">Privacy Policy</a>, including{" "}
                        <a href="#" className="underline hover:text-orange-600">cookie use</a>.
                    </p>
                </div>

                {/* Right side illustration */}
                <div className="w-1/2">
                    <img
                        src="/SignupHero.svg" // Replace this with your SVG
                        alt="Sign up illustration"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
