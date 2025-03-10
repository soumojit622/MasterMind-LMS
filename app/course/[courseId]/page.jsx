"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ChapterList from "./_components/ChapterList";
import CourseIntroCard from "./_components/CourseIntroCard";
import StudyMaterialSection from "./_components/StudyMaterialSection";

function Course() {
  const { courseId } = useParams();
  const [course, setCourse] = useState();
  useEffect(() => {
    GetCourse();
  }, []);
  const GetCourse = async () => {
    const result = await axios.get("/api/courses?courseId=" + courseId);
    console.log(result);
    setCourse(result.data.result);
  };
  return (
    <div>
      <div className="">
        <CourseIntroCard course={course} />
        <StudyMaterialSection courseId={courseId} />
        <ChapterList course={course} />
      </div>
    </div>
  );
}

export default Course;
