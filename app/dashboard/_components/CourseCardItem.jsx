import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Eye, RefreshCw } from "lucide-react"; // Only necessary import
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Helper function to format date
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options); // Return formatted date
};

// Function to get the current date
const getCurrentDate = () => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date();
  return date.toLocaleDateString(undefined, options); // Return current date
};

function CourseCardItem({ course }) {
  return (
    <div className="border rounded-lg shadow-xl hover:shadow-2xl transition-shadow p-6">
      {/* Top Section: Course Icon & Date */}
      <div className="flex justify-between items-center mb-4">
        <Image
          src={"/bulb.gif"}
          alt="course icon"
          width={50}
          height={50}
          className="rounded-lg shadow-md"
        />
        {/* Display creation date and current date */}
        <h2 className="text-xs p-2 px-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md">
          {getCurrentDate()}
        </h2>
      </div>

      {/* Course Name */}
      <h2 className="mt-2 font-bold text-xl text-gray-900 truncate">
        {course?.courseLayout.course_name}
      </h2>

      {/* Course Summary */}
      <p className="text-sm line-clamp-3 text-gray-600 mt-2">
        {course?.courseLayout.course_summary}
      </p>

      {/* Progress Bar */}
      <div className="mt-4">
        <Progress value={0} />
      </div>

      {/* Footer Section: Status and View Button */}
      <div className="mt-4 flex justify-between items-center">
        {course?.status === "Generating" ? (
          <div className="flex items-center gap-2 text-sm font-medium p-2 px-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
            <RefreshCw className="w-5 h-5 animate-spin" />
            Generating...
          </div>
        ) : (
          <Link href={`/course/${course?.courseId}`}>
            <Button className="w-full cursor-pointer text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:scale-105 transition-all">
              <Eye className="w-5 h-5" />
              View Course
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default CourseCardItem;
