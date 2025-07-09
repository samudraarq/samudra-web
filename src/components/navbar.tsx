"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="custom-container">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className={`text-lg font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
              pathname === "/" ? "text-blue-600 dark:text-blue-400" : ""
            }`}
          >
            Samudra Faris
          </Link>

          <div className="flex items-center space-x-8">
            <Link
              href="/projects"
              className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
                pathname === "/projects"
                  ? "text-blue-600 dark:text-blue-400"
                  : ""
              }`}
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
