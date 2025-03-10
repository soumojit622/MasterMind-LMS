import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaEye } from "react-icons/fa"; // Using react-icons for the icon
import React from "react";

function MaterialCardItem({ item }) {
  return (
    <div className="flex flex-col gap-6 items-center p-6 bg-white border rounded-2xl transform transition-all duration-300 shadow-2xl border-blue-400 bg-gradient-to-r from-blue-50 to-cyan-100">
      {/* Icon with hover scale effect */}
      <Image
        src={item.icon}
        alt={item.name}
        width={100}
        height={100}
        className="rounded-full border-4 border-gray-300 shadow-xl transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
      />

      {/* Title with hover effect */}
      <h2 className="font-semibold text-2xl text-gray-900 mt-4 mb-2 transition-colors duration-300 hover:text-blue-600 tracking-wide">
        {item.name}
      </h2>

      {/* Description with elegant spacing */}
      <p className="text-sm text-gray-600 text-center mb-5 opacity-80 hover:opacity-100 transition-opacity duration-200">
        {item.desc}
      </p>

      {/* Button with gradient, hover transition, and icon */}
      <Button className="mt-4 w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg shadow-md hover:from-blue-400 hover:to-cyan-400 transform transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center gap-2">
        {/* Icon beside the "View" text */}
        <FaEye className="text-white" /> {/* Eye icon */}
        View
      </Button>
    </div>
  );
}

export default MaterialCardItem;
