"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 text-gray-900 text-center px-6 relative overflow-hidden">
      {/* Soft Background Gradient Spots centered in the middle area */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute bg-blue-500 rounded-full opacity-40 w-[350px] h-[350px] top-1/4 left-1/4 blur-3xl"></div>
        <div className="absolute bg-cyan-500 rounded-full opacity-40 w-[300px] h-[300px] top-1/3 left-1/2 blur-3xl"></div>
        <div className="absolute bg-orange-500 rounded-full opacity-40 w-[250px] h-[250px] top-2/3 left-1/3 blur-3xl"></div>
        <div className="absolute bg-red-500 rounded-full opacity-40 w-[280px] h-[280px] top-1/2 left-2/3 blur-3xl"></div>
      </div>

      {/* Animated 404 */}
      <h1 className="text-[9rem] md:text-[10rem] font-extrabold text-blue-500 drop-shadow-xl">
        404
      </h1>

      {/* Subtitle */}
      <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-800">
        Oops! Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-600 mt-2 max-w-lg text-lg md:text-xl leading-relaxed">
        The page you're looking for doesn't exist. It might have been removed,
        renamed, or is temporarily unavailable.
      </p>

      {/* Button */}
      <Button
        onClick={() => router.push("/")}
        className="mt-6 flex items-center gap-3 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg rounded-full shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        <FaHome className="text-xl" />
        Go Home
      </Button>

      {/* Illustration with Floating Animation */}
      <img
        src="https://illustrations.popsy.co/white/resistance-band.svg"
        alt="Not Found Illustration"
        className="mt-8 w-72 md:w-80 opacity-90 transition-transform duration-500 ease-in-out"
      />
    </div>
  );
};

export default NotFound;
