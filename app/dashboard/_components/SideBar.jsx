"use client";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, UserCircle, Shield, PlusCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function SideBar() {
  const MenuList = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Profile", icon: UserCircle, path: "/dashboard/profile" },
    { name: "Upgrade", icon: Shield, path: "/dashboard/profile" },
  ];

  const path = usePathname();

  return (
    <aside className="h-screen w-64 bg-white/30 backdrop-blur-lg shadow-xl p-6 flex flex-col border-r border-gray-200">
      {/* Logo Section */}
      <div className="flex items-center gap-3 justify-center">
        <Image src="/logo.svg" alt="logo" width={40} height={40} />
      </div>

      {/* Create New Button */}

      <div className="mt-10">
        <Link href="/create">
          <Button className="w-full cursor-pointer bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-lg shadow-lg font-medium flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-105 hover:shadow-xl">
            <PlusCircle className="w-5 h-5" />
            Create New
          </Button>
        </Link>
      </div>
      {/* Menu List */}
      <nav className="mt-6 flex flex-col gap-3">
        {MenuList.map((menu, index) => (
          <Link key={index} href={menu.path}>
            <div
              className={`flex items-center gap-4 px-5 py-3 rounded-lg text-gray-700 font-medium transition-all duration-200
              ${
                path === menu.path
                  ? "bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-600 shadow-md scale-105"
                  : "hover:bg-gray-100 hover:scale-105"
              }`}
            >
              <menu.icon size={24} className="text-blue-500" />
              <span>{menu.name}</span>
            </div>
          </Link>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto pt-6 border-t border-gray-300">
        <p className="text-gray-500 text-sm text-center">
          © {new Date().getFullYear()} MasterMind
        </p>
      </div>
    </aside>
  );
}

export default SideBar;
