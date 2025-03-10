"use client";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CourseCardItem from "./CourseCardItem";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

function CourseList() {
  const { user } = useUser();
  const [CourseList, setCourseList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) GetCourseList();
  }, [user]);

  const GetCourseList = async () => {
    setLoading(true);
    try {
      const result = await axios.post("/api/courses", {
        createdBy: user?.primaryEmailAddress.emailAddress,
      });
      setCourseList(result.data.result);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
    setLoading(false);
  };

  return (
    <div className="mt-10 px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-extrabold text-3xl text-gray-900">
          📚 Your Study Material
        </h2>
        <Button
          variant="outline"
          onClick={GetCourseList}
          className="border-gray-800 flex items-center gap-2 px-5 py-2.5 rounded-lg 
             font-semibold text-gray-800 bg-white shadow-md 
             hover:bg-gray-100 hover:shadow-lg transition-all duration-300 
             active:scale-95 cursor-pointer"
        >
          <RefreshCw className="w-5 h-5 text-gray-700 transition-transform duration-200 group-hover:rotate-180" />
          Refresh
        </Button>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {!loading
          ? CourseList?.map((course, index) => (
              <CourseCardItem course={course} key={index} />
            ))
          : Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-56 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse shadow-md"
              ></div>
            ))}
      </div>
    </div>
  );
}

export default CourseList;
