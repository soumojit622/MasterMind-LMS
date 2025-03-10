import React from "react";

function ChapterList({ course }) {
  const Chapters = course?.courseLayout?.chapters;

  return (
    <div className="mt-8 px-6">
      {/* Title */}
      <h2 className="font-semibold text-3xl text-gray-800 mt-3 mb-6">
        Chapter List
      </h2>

      <div className="mt-3 space-y-6 mb-6">
        {Chapters?.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-6 p-6 border border-gray-200 bg-gradient-to-r from-blue-50 to-cyan-100 shadow-lg rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-blue-400"
          >
            {/* Chapter Emoji */}
            <div className="text-5xl text-blue-600">{item?.black_emoji}</div>

            {/* Chapter Info */}
            <div className="flex flex-col">
              <h2 className="font-bold text-2xl text-gray-900 mb-2 transition-colors">
                {item?.chapter_title}
              </h2>
              <p className="text-sm text-gray-700 mt-1 opacity-80 hover:opacity-100 transition-opacity duration-200">
                {item?.chapter_summary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChapterList;
