import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ isActive, setIsActive }) {
  function toggleMobileNav() {
    setIsActive(!isActive);
  }
  return (
    <nav className={isActive ? "flex justify-end h-16 items-center" : "flex content-center justify-center min-h-screen bg-off-cream text-light-gray"}>
      <Link to="/" className="absolute left-0 font-mono font-bold text-5xl">
        Wow List
      </Link>
      <div className={isActive ? "hidden md:block" : "flex flex-col text-center space-y-10 mt-20 text-2xl font-extrabold"}>
        <Link to="/about" className="p-1">
          About
        </Link>
        <Link to="/login" className="p-1">
          Login
        </Link>
        <Link to="/logout" className="p-1">
          Logout
        </Link>
      </div>
      <div className={"absolute right-0 md:hidden pr-2"}>
        <button onClick={toggleMobileNav}>
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
        </button>
      </div>
      {/* <div
        className={
          isActive
            ? "hidden"
            : "fixed min-h-screen min-w-full bg-off-cream text-light-gray md:hidden"
        }
      >
        <a>About</a>
        <a>Login</a>
      </div> */}
    </nav>
  );
}

export default Navbar;
