"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

function WelcomeBanner() {
  const { user } = useUser();

  return (
    <div className="p-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl shadow-lg flex items-center gap-6 animate-fade-in">
      {/* Animated Book Icon */}
      <Image
        src="/books.gif"
        alt="Book"
        width={90}
        height={90}
        className="rounded-full border-4 border-white shadow-md"
      />

      {/* Welcome Text */}
      <div className="space-y-2">
        <h2 className="text-3xl font-extrabold">
          Hello, <span className="text-yellow-300">{user?.fullName}</span> 👋
        </h2>
        <p className="text-lg opacity-90">
          Welcome back! It’s a beautiful day to learn. Start a new course or
          continue your journey today. 🚀
        </p>
      </div>
    </div>
  );
}

export default WelcomeBanner;
