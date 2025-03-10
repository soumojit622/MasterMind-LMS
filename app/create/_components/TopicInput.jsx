import React from "react";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function TopicInput({ SetTopic, setDifficultyLevel }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 shadow-lg rounded-xl border border-gray-200 dark:border-gray-700">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
        ✨ What do you want AI to generate study material for?
      </h2>
      <Textarea
        placeholder="Start writing here..."
        className="mt-3 w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 
                   focus:ring-2 focus:ring-primary focus:border-primary transition-all"
        onChange={(event) => SetTopic(event.target.value)}
      />

      <h2 className="mt-6 mb-3 text-lg font-semibold text-gray-800 dark:text-white">
        🎯 Choose Difficulty Level:
      </h2>
      <Select onValueChange={(value) => setDifficultyLevel(value)}>
        <SelectTrigger className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-4 text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-primary transition-all">
          <SelectValue placeholder="Select Difficulty" />
        </SelectTrigger>
        <SelectContent className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-md rounded-lg">
          <SelectItem value="Easy">🟢 Easy</SelectItem>
          <SelectItem value="Medium">🟠 Medium</SelectItem>
          <SelectItem value="Hard">🔴 Hard</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default TopicInput;
