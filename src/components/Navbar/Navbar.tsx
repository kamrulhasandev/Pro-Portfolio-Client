"use client";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#121121] backdrop-filter backdrop-blur-lg backdrop-saturate-150 shadow-md text-white">
      <div className="max-w-screen-xl mx-auto px-5">
        <nav className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="text-slate-300 font-bold">
            KamrulH.
          </a>

          {/* Mobile Menu Toggle Button */}
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-300 focus:outline-none focus:bg-opacity-70"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden absolute top-14 right-0 bg-[#121121] backdrop-filter backdrop-blur-lg backdrop-saturate-150 shadow-md text-white w-full ${
              isOpen ? "block" : "hidden"
            } transition-all duration-300 ease-in-out transform origin-top`}
          >
            <ul className="flex flex-col text-slate-300 gap-5 items-center py-4">
              <li>
                <a href="/" className="text-slate-300 hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/blog" className="text-slate-300 hover:text-gray-300">
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-slate-300 hover:text-gray-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <button className="bg-transparent bg-opacity-50 shadow-[0_10px_20px_rgba(200,_10,_170,_0.2)] text-slate-200 px-3 py-1 rounded-full transition duration-300 ease-in-out hover:bg-opacity-70">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Desktop Menu Links */}
          <ul className="hidden lg:flex lg:flex-row lg:space-x-4 text-slate-300 items-center">
            <li>
              <a href="/" className="text-slate-300 hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/blog" className="text-slate-300 hover:text-gray-300">
                Blogs
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="text-slate-300 hover:text-gray-300"
              >
                Projects
              </a>
            </li>
            <li>
              <button className="bg-transparent bg-opacity-50 shadow-[0_10px_20px_rgba(200,_10,_170,_0.2)] text-slate-200 px-3 py-1 rounded-full transition duration-300 ease-in-out hover:bg-opacity-70">
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
