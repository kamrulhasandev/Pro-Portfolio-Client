"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillCode } from "react-icons/ai";

const HeroSection = () => {
  return (
    <div className="relative min-h-[calc(100vh-56px)] flex justify-center items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/heroBg.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h4 className="text-white font-bold text-xl">I&apos;m Kamrul Hasan</h4>

        {/* Circular Gradient */}
        <div className="relative my-10">
          <div
            className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-400 rounded-full"
            style={{ clipPath: "circle(50%)" }}
          ></div>

          {/* Image with Gradient Border */}
          <div className="relative rounded-full overflow-hidden border-4 border-transparent">
            <div className="absolute inset-0 border-gradient border-4 border-opacity-0"></div>
            <div className="relative z-20">
              <Image
                src="/kamrulhasandev.png"
                alt="Hero Icon"
                width={150}
                height={150}
                className="rounded-full"
              />
            </div>
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-30">
            <AiFillCode size={50} className="text-white" />
          </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-7xl uppercase font-bold text-center bg-gradient-to-r from-purple-600 to-pink-400 bg-clip-text text-transparent opacity-80">
          Full-Stack <br />
          Web Application <br />
          Developer
        </h1>
        <div className="flex flex-wrap gap-3 mt-5 text-sm items-center justify-center">
          <Link
            className="bg-transparent bg-opacity-50  shadow-[0_10px_20px_rgba(240,_46,_170,_0.3)] text-slate-200 px-5 py-2 rounded-full transition duration-300 ease-in-out hover:bg-opacity-70"
            href="https://www.linkedin.com/in/kamrulhasandev/"
          >
            Linkedin
          </Link>
          <Link
            className="bg-transparent bg-opacity-50  shadow-[0_10px_20px_rgba(240,_46,_170,_0.3)] text-slate-200 px-5 py-2 rounded-full transition duration-300 ease-in-out hover:bg-opacity-70"
            href="https://github.com/kamrulhasandev"
          >
            Github
          </Link>
          <Link
            className="bg-transparent bg-opacity-50  shadow-[0_10px_20px_rgba(240,_46,_170,_0.3)] text-slate-200 px-5 py-2 rounded-full transition duration-300 ease-in-out hover:bg-opacity-70"
            href="https://www.facebook.com/kamrulhasandev/"
          >
            Facebook
          </Link>
          <Link
            className="bg-transparent bg-opacity-50  shadow-[0_10px_20px_rgba(240,_46,_170,_0.3)] text-slate-200 px-5 py-2 rounded-full transition duration-300 ease-in-out hover:bg-opacity-70"
            href="https://drive.google.com/file/d/1UBd11jZa2E9VBX-qY7tstm3F7VZ85x9w/view?usp=sharing"
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
