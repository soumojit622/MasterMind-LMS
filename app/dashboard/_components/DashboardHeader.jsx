import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function DashboardHeader() {
  return (
    <header className="p-4 shadow-md flex items-center justify-between bg-white border-b border-gray-200">
      {/* Logo & Branding - Redirects to Dashboard */}
      <Link href="/dashboard" passHref>
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <Image src="/logo.svg" alt="logo" width={40} height={40} />
          <h1 className="text-2xl font-bold text-gray-900">
            Master<span className="text-blue-500">Mind.</span>
          </h1>
        </div>
      </Link>

      {/* User Profile */}
      <UserButton
        afterSignOutUrl="/"
        appearance={{
          elements: {
            avatarBox:
              "w-12 h-12 border-2 border-gray-300 rounded-full hover:border-gray-500 transition-transform duration-300 hover:scale-110 shadow-md",
          },
        }}
      />
    </header>
  );
}

export default DashboardHeader;
