import { UserButton } from "@clerk/nextjs";
import DashboardHeader from "./dashboard/_components/DashboardHeader";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.3)_0%,transparent_70%)] overflow-hidden">
      <DashboardHeader />

      {/* Floating Blur Drops for Extra Style */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 left-1/3 w-72 h-72 bg-cyan-400 opacity-30 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-orange-400 opacity-30 blur-3xl rounded-full"></div>
        <div className="absolute top-1/4 left-10 w-48 h-48 bg-blue-500 opacity-25 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/3 right-16 w-64 h-64 bg-purple-400 opacity-30 blur-3xl rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-red-400 opacity-20 blur-3xl rounded-full"></div>
      </div>

      <section className="relative flex flex-col items-center justify-center min-h-screen py-16 px-6 text-center">
        <div className="max-w-screen-lg mx-auto">
          {/* Heading with Gradient Effect */}
          <h1 className="mb-6 text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl text-transparent bg-clip-text bg-[linear-gradient(to_right,#06b6d4,#3b82f6,#f97316,#ef4444)]">
            AI-Powered Exam <br />
            <span className="text-gray-900 dark:text-white">
              Prep Material Generator
            </span>
          </h1>

          {/* Subtext */}
          <p className="mb-8 text-lg font-medium text-gray-600 dark:text-gray-300 sm:text-xl sm:px-12 xl:px-36 animate-fadeIn">
            Your ultimate AI companion for generating tailored exam preparation
            materials with ease.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col mb-8 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-6">
            <a
              href="/dashboard"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg transition-all transform hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-cyan-300 animate-fadeInUp"
            >
              Get Started
              <svg
                className="ml-3 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
