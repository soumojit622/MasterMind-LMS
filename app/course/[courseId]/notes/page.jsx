"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Undo2 } from "lucide-react";

function ViewNotes() {
  const { courseId } = useParams();
  const [Notes, setNotes] = useState([]);
  const [stepCount, setStepCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    GetNotes();
  }, []);

  const GetNotes = async () => {
    const result = await axios.post("/api/study-type", {
      courseId: courseId,
    });
    setNotes(result?.data?.notes || []);
  };

  return (
    Notes.length > 0 && (
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        {/* Step Progress Bar */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <Button
            size="sm"
            className="bg-gray-700 text-white disabled:opacity-50 flex items-center gap-2"
            disabled={stepCount === 0}
            onClick={() => setStepCount(stepCount - 1)}
          >
            <ArrowLeft size={16} /> Previous
          </Button>

          <div className="flex w-full max-w-md gap-2">
            {Notes.map((_, index) => (
              <div
                key={index}
                className={`h-2 flex-1 rounded-full transition-all duration-300
                  ${index <= stepCount ? "bg-blue-500" : "bg-gray-300"}`}
              />
            ))}
          </div>

          <Button
            size="sm"
            className="bg-blue-600 text-white disabled:opacity-50 flex items-center gap-2"
            disabled={stepCount === Notes.length - 1}
            onClick={() => setStepCount(stepCount + 1)}
          >
            Next <ArrowRight size={16} />
          </Button>
        </div>

        {/* Notes Content */}
        <div className="p-6 bg-gray-50 rounded-md shadow-md">
          <div
            dangerouslySetInnerHTML={{ __html: Notes[stepCount]?.notes }}
            className="prose prose-lg max-w-none"
          />
        </div>

        {/* End of Notes Section */}
        {stepCount === Notes.length - 1 && (
          <div className="mt-10 flex flex-col items-center">
            <h2 className="text-xl font-semibold text-gray-700">End of Notes</h2>
            <Button
              onClick={() => router.back()}
              className="mt-4 bg-green-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-600 transition-all flex items-center gap-2"
            >
              <Undo2 size={16} /> Go Back to Course Page
            </Button>
          </div>
        )}
      </div>
    )
  );
}

export default ViewNotes;
