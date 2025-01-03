"use client";

import { useState } from "react";
import Link from "next/link";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="bg-black dark:bg-black text-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-6">
        {/* Logo or Site Name */}
        <div className="text-2xl font-bold">
          <Link href="/" className="text-light dark:text-dark hover:text-accentDarkPrimary">
            MyWebsite
          </Link>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="hidden sm:flex space-x-6 text-lg font-medium">
            <li>
              <Link href="/" className="text-light dark:text-dark hover:text-accentDarkPrimary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/About" className="text-light dark:text-dark hover:text-accentDarkPrimary">
                About
              </Link>
            </li>
            <li>
              <Link href="/Contact" className="text-light dark:text-dark hover:text-accentDarkPrimary">
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu (Hamburger) */}
          <div className="sm:hidden">
            <button
              type="button"
              className="text-light dark:text-dark hover:text-accentDarkPrimary focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
  className="w-6 h-6"
  fill="none"
  stroke="currentColor"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M4 6h16M4 12h16M4 18h16"
  />
</svg>

            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`sm:hidden ${menuOpen ? "block" : "hidden"} bg-dark dark:bg-light text-white`}
      >
        <ul className="space-y-4 px-4 py-6">
          <li>
            <Link href="/" className="block text-lg font-medium hover:text-accentDarkPrimary">
              Home
            </Link>
          </li>
          <li>
            <Link href="/About" className="block text-lg font-medium hover:text-accentDarkPrimary">
              About
            </Link>
          </li>
          <li>
          <Link href="/Contact" className="block text-lg font-medium hover:text-accentDarkPrimary">
  Contact
</Link>

          </li>
        </ul>
      </div>
    </header>
  );
}
