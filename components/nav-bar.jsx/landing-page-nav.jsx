import Head from "next/head";
import React from "react";
import Image from "next/image";
import logo from "../../public/logo.png";

const LandingPageNavBar = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-3 flex justify-between opacity-70">
        <div className="ml-5">
          <Image
            height="100"
            width="100"
            className="border-2 border-gray-900 rounded-full"
            src={logo}
            alt="logo"
          />
        </div>
        <h2 className="welcome-text  px-3 text-4xl py-7">Welcome to Bracker</h2>
        <section className="flex justify w-30 py-2 justify-between mr-5">
          <span className="border-2 border-black h-20 items-center px-3 py-7 rounded-full bg-white hover:bg-blue-500 hover:text-white transition-colors duration-1000 ease-out">
            Contact us
          </span>
          <button className="border-2 border-black px-3 h-20 py-7 rounded-full bg-white hover:bg-pink-500 hover:text-white transition-colors duration-1000 ease-out">
            Demo
          </button>
        </section>
      </div>
    </div>
  );
};

export default LandingPageNavBar;
