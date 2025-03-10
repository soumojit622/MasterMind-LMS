import DashboardHeader from "@/app/dashboard/_components/DashboardHeader";
import React from "react";

function CourseViewLayout({ children }) {
  return (
    <div className="relative">
      {/* Soft Background Gradient Spots centered and on the sides */}
      {/* <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute bg-blue-500 rounded-full opacity-40 w-[350px] h-[350px] top-1/4 left-1/4 blur-3xl"></div>
        <div className="absolute bg-cyan-500 rounded-full opacity-40 w-[300px] h-[300px] top-1/3 left-1/2 blur-3xl"></div>
        <div className="absolute bg-orange-500 rounded-full opacity-40 w-[250px] h-[250px] top-2/3 left-1/3 blur-3xl"></div>
        <div className="absolute bg-red-500 rounded-full opacity-40 w-[280px] h-[280px] top-1/2 left-2/3 blur-3xl"></div>

        <div className="absolute bg-blue-500 rounded-full opacity-40 w-[300px] h-[300px] top-1/3 left-[-150px] blur-3xl"></div>
        <div className="absolute bg-cyan-500 rounded-full opacity-40 w-[250px] h-[250px] top-1/2 left-[-200px] blur-3xl"></div>
        <div className="absolute bg-orange-500 rounded-full opacity-40 w-[280px] h-[280px] top-2/3 left-[-250px] blur-3xl"></div>

        <div className="absolute bg-red-500 rounded-full opacity-40 w-[320px] h-[320px] top-1/4 right-[-150px] blur-3xl"></div>
        <div className="absolute bg-blue-500 rounded-full opacity-40 w-[250px] h-[250px] top-2/3 right-[-200px] blur-3xl"></div>
        <div className="absolute bg-cyan-500 rounded-full opacity-40 w-[300px] h-[300px] top-1/2 right-[-250px] blur-3xl"></div>
      </div> */}

      {/* Dashboard Header and Content */}
      <DashboardHeader />
      <div className="mx-10 md:mx-36 lg:mx-60 mt-10">{children}</div>
    </div>
  );
}

export default CourseViewLayout;
