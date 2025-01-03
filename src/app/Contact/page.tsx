"use client";

import Link from "next/link";


export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg max-w-md w-full p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          We would love to hear from you! Fill out the form below to get in touch.
        </p>
        <form className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Your Message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <Link href="/" className="text-blue-500 hover:underline">
            Go Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
