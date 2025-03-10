import Image from "next/image";
import React, { useState } from "react";

function SelectOption({ selectedStudyType }) {
  const Options = [
    {
      name: "Exam",
      icon: "/Exam.png",
    },
    {
      name: "Job Interview",
      icon: "/Interview.png",
    },
    {
      name: "Practice",
      icon: "/practice.png",
    },
    {
      name: "Coding Prep",
      icon: "/coding.png",
    },
    {
      name: "Other",
      icon: "/Other.png",
    },
  ];
  
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-center mb-4 text-xl font-semibold text-gray-800 dark:text-white">
        What would you like to learn? 📚
      </h2>
      <div className="grid grid-cols-2 mt-5 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {Options.map((option, index) => (
          <div
            key={index}
            className={`p-4 flex flex-col items-center justify-center border rounded-xl shadow-lg 
                bg-white dark:bg-gray-900 backdrop-blur-lg transition-all duration-300 ease-in-out transform
                hover:scale-105 hover:shadow-xl cursor-pointer border-gray-200 dark:border-gray-700
                ${
                  option?.name === selectedOption 
                    ? "border-primary ring-2 ring-primary shadow-xl"
                    : ""
                }`}
            onClick={() => {
              setSelectedOption(option.name);
              selectedStudyType(option.name);
            }}
          >
            <Image
              src={option.icon}
              alt={option.name}
              width={60}
              height={60}
              className="drop-shadow-md"
            />
            <h2 className="text-sm mt-3 font-medium text-gray-800 dark:text-gray-300">
              {option.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectOption;
