'use client';
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#121120]">
      <div className="max-w-screen-xl mx-auto py-10 px-5">
        <div className="flex justify-between items-center text-gray-400">
          <div className="flex items-center gap-2">
            <div className="relative z-10 flex flex-col items-start">
              {/* Circular Gradient */}
              <div className="relative">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-400 rounded-full"
                  style={{ clipPath: "circle(50%)" }}
                ></div>

                {/* Image with Gradient Border */}
                <div className="relative rounded-full overflow-hidden border-2 border-transparent">
                  <div className="absolute inset-0 border-gradient border-2 border-opacity-0"></div>
                  <div className="relative z-20">
                    <Image
                      src="/kamrulhasandev.png"
                      alt="Hero Icon"
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-xl">Kamrul Hasan</p>
          </div>
          <div className="flex gap-5 text-gray-400">
            <Link href="https://github.com/kamrulhasandev">
              <FaGithub size={28} />
            </Link>
            <Link href="https://www.linkedin.com/in/kamrulhasandev/">
              <FaLinkedin size={28} />
            </Link>
            <Link href="https://www.facebook.com/kamrulhasandev/">
              <FaFacebook size={28} />
            </Link>
          </div>
        </div>
        <p className="text-gray-400 text-center text-sm mt-5">
          &copy; {currentYear} Kamrul Hasan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
