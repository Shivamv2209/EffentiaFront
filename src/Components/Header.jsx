import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between border-b border-gray-200">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-black">
        LEADNEST
      </Link>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <select
          className="text-sm text-gray-600 bg-transparent focus:outline-none"
          defaultValue="en"
        >
          <option value="en">English (United States)</option>
          <option value="hi">Hindi (India)</option>
        </select>
      </div>
    </header>
  );
}
