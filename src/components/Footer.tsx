import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black dark:bg-black text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          {/* Footer Logo or Site Name */}
          <div className="mb-4 sm:mb-0">
            <h3 className="text-2xl font-bold text-light dark:text-dark">
              MyWebsite
            </h3>
            <p className="text-sm text-light/70 dark:text-dark/70">
              © 2025 MyWebsite, All Rights Reserved.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-x-8 sm:space-y-0">
            <Link href="/" className="text-light dark:text-dark hover:text-accentDarkPrimary">
              Home
            </Link>
            <Link href="/About" className="text-light dark:text-dark hover:text-accentDarkPrimary">
              About
            </Link>
            <Link href="/Contact" className="text-light dark:text-dark hover:text-accentDarkPrimary">
              Contact
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="https://facebook.com" target="_blank">
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
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <svg
                className="w-6 h-6 text-light dark:text-dark hover:text-accentDarkPrimary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 8C20 12.419 16.39 16 12 16C7.61 16 4 12.419 4 8C4 5.79 5.05 4 7 4C8.25 4 9.38 4.64 9.9 5.79C10.42 6.94 11.54 7.5 12.72 7.5C13.9 7.5 15.02 6.94 15.54 5.79C16.06 4.64 17.19 4 18.44 4C20.14 4 21.14 5.79 21.14 8H20Z"
                />
              </svg>
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <svg
                className="w-6 h-6 text-light dark:text-dark hover:text-accentDarkPrimary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 2H8C5.79 2 4 3.79 4 6V18C4 20.21 5.79 22 8 22H16C18.21 22 20 20.21 20 18V6C20 3.79 18.21 2 16 2ZM16 18H8V6H16V18Z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
