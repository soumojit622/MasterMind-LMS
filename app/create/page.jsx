"use client";
import React, { useState } from "react";
import SelectOption from "./_components/SelectOption";
import TopicInput from "./_components/TopicInput";
import { Button } from "@/components/ui/button";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { Loader, ChevronRight, ChevronLeft, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";

function Create() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleUserInput = (fieldName, fieldValue) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
  };

  const GenerateCourseOutline = async () => {
    console.log(formData);
    const courseId = uuidv4();
    setLoading(true);
    const result = await axios.post("/api/generate-course-outline", {
      courseId,
      topic: formData.topic,
      courseType: formData.studyType,
      difficultyLevel: formData.difficultylevel,
      createdBy: user?.primaryEmailAddress.emailAddress,
    });

    setLoading(false);
    router.replace("/dashboard");
    toast("Your course is generating. Please refresh to check if it's ready!");
    console.log(result.data.result.resp);
  };

  return (
    <div className="relative flex flex-col items-center px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36 mt-12 sm:mt-16">
      {/* Background Spots */}
      <div className="absolute top-10 left-5 sm:left-10 w-40 sm:w-64 h-40 sm:h-64 bg-blue-500 rounded-full blur-[80px] sm:blur-[100px] opacity-50 z-[-1]"></div>
      <div className="absolute top-1/3 right-5 sm:right-10 w-36 sm:w-60 h-36 sm:h-60 bg-cyan-400 rounded-full blur-[80px] sm:blur-[100px] opacity-50 z-[-1]"></div>
      <div className="absolute bottom-10 left-1/5 w-52 sm:w-72 h-52 sm:h-72 bg-orange-500 rounded-full blur-[90px] sm:blur-[120px] opacity-50 z-[-1]"></div>
      <div className="absolute bottom-20 right-1/4 w-60 sm:w-80 h-60 sm:h-80 bg-red-500 rounded-full blur-[100px] sm:blur-[130px] opacity-50 z-[-1]"></div>
      {/* Heading */}
      <h2
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center 
  bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text 
  text-transparent tracking-tight drop-shadow-md pb-3"
      >
        <Link href="/dashboard" className="hover:underline">
          AI Study Material
        </Link>
      </h2>
      <p
        className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 text-center mt-2 
        leading-snug"
      >
        AI-powered learning tailored just for you.
      </p>
      <p
        className="text-gray-600 text-base sm:text-lg md:text-xl text-center mt-4 max-w-2xl mx-auto 
        leading-relaxed opacity-90"
      >
        Enter your topic and let AI generate high-quality study materials in
        seconds.
      </p>
      {/* Form Container */}
      <div className="relative z-10 mt-10 sm:mt-12 w-full max-w-lg sm:max-w-xl p-6 sm:p-8 rounded-xl shadow-lg border border-gray-300 bg-white">
        {step === 0 ? (
          <SelectOption
            selectedStudyType={(value) => handleUserInput("studyType", value)}
          />
        ) : (
          <TopicInput
            SetTopic={(value) => handleUserInput("topic", value)}
            setDifficultyLevel={(value) =>
              handleUserInput("difficultylevel", value)
            }
          />
        )}

        {/* Buttons */}
        <div className="flex justify-between w-full mt-10 sm:mt-12 flex-wrap gap-4">
          {step !== 0 && (
            <Button
              variant="outline"
              className="border-gray-400 hover:bg-gray-100 transition-all px-4 sm:px-5 py-2 rounded-lg cursor-pointer text-gray-700 flex items-center gap-2"
              onClick={() => setStep(step - 1)}
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </Button>
          )}

          {step === 0 ? (
            <Button
              onClick={() => setStep(step + 1)}
              className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700 transition-all px-4 sm:px-6 py-2 rounded-lg shadow-lg flex items-center gap-2 cursor-pointer"
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </Button>
          ) : (
            <Button
              onClick={GenerateCourseOutline}
              disabled={loading}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white transition-all px-4 sm:px-6 py-2 rounded-lg shadow-lg flex items-center gap-2 cursor-pointer"
            >
              {loading ? (
                <Loader className="animate-spin" />
              ) : (
                <Sparkles className="w-5 h-5" />
              )}
              Generate
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Create;
