import React, { useEffect, useState } from "react";
import MaterialCardItem from "./MaterialCardItem";
import Link from "next/link";
import axios from "axios";

function StudyMaterialSection({ courseId }) {
  const MaterialList = [
    {
      name: "Notes/Chapters",
      desc: "These are the notes for this course",
      icon: "/notes.gif",
      path: "/notes",
    },
  ];
  const [studyNotes, setNotesContent] = useState();

  useEffect(() => {
    GetNotes();
  }, []);
  const GetNotes = async () => {
    const result = await axios.post("/api/study-type", {
      courseId: courseId,
    });
    console.log(result.data);
    setNotesContent(result.data);
  };

  return (
    <div className="mt-5">
      <h2 className="font-semibold text-3xl mt-3 mb-3">Study Material</h2>

      <div>
        {MaterialList.map((item, index) => (
          <Link key={index} href={"/course/" + courseId + item.path}>
            <MaterialCardItem key={index} item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default StudyMaterialSection;
