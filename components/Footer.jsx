import Image from "next/image";
import Link from "next/link";
import { FaHome, FaBook, FaEnvelope, FaInfoCircle } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 py-8 border-t border-gray-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Logo & Branding */}
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" alt="MasterMind Logo" width={45} height={45} />
          <h2 className="text-xl font-bold tracking-wide flex items-center gap-1">
            Master<span className="text-blue-500">Mind.</span>
          </h2>
        </div>

        {/* Quick Links with Icons */}
        <div className="flex space-x-6 text-sm font-medium mt-4 md:mt-0">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 hover:text-blue-500 transition-colors duration-300"
          >
            <FaHome className="text-lg" /> Dashboard
          </Link>
          <Link
            href="/courses"
            className="flex items-center gap-2 hover:text-blue-500 transition-colors duration-300"
          >
            <FaBook className="text-lg" /> Courses
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 hover:text-blue-500 transition-colors duration-300"
          >
            <FaEnvelope className="text-lg" /> Contact
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-2 hover:text-blue-500 transition-colors duration-300"
          >
            <FaInfoCircle className="text-lg" /> About
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 mt-6 md:mt-0">
          © {new Date().getFullYear()} MasterMind. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
