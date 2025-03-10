import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import React from "react";

function CourseIntroCard({ course }) {
  return (
    <div className="p-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl shadow-lg flex items-center gap-6 animate-fade-in transform transition-all duration-300 hover:shadow-2xl hover:bg-gray-50">
      <div className="flex-shrink-0">
        <Image
          src="/knowledge.png"
          alt="knowledge"
          width={90}
          height={90}
          className="rounded-full border-4 border-white shadow-md transform transition-transform duration-300 "
        />
      </div>
      <div className="flex-1">
        <h2 className="font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 mb-3 hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-500 transition-colors duration-300">
          {course?.courseLayout?.course_name}
        </h2>

        <p className="text-lg opacity-90 mb-6">
          {course?.courseLayout?.course_summary}
        </p>
        <Progress className="mt-4 rounded-full bg-gray-200 shadow-sm" />
        <div className="flex items-center mt-4 text-sm">
          <span className="mr-2 text-xl">📚</span>
          <span>Chapters: {course?.courseLayout?.chapters?.length}</span>
        </div>
      </div>
    </div>
  );
}

export default CourseIntroCard;
