"use client";

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-3xl bg-white shadow-md rounded-lg p-8">
        {/* Header Section */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
        <p className="text-gray-600 mb-6">
          Hi, I&apos;m Hamza Javed, a passionate Computer Science student currently pursuing my BSCS at Iqra University. With a strong foundation in web development and programming, I am always eager to learn and grow in the tech industry.
        </p>

        {/* Education Section */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Education</h2>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>
            BS Computer Science (BSCS), Iqra University (6th Semester) - Graduating in 2024
          </li>
          <li>Intermediate in Pre-Engineering, Jinnah Government College</li>
          <li>Matriculation, F.M Public School</li>
        </ul>

        {/* Skills Section */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h2>
        <p className="text-gray-600 mb-6">
          I have experience in various areas of technology, including:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Web Development: HTML, CSS, JavaScript, TypeScript, Next.js</li>
          <li>Programming: C++, Java, Python</li>
          <li>Other Skills: Digital graphics, Assembly language</li>
        </ul>

        {/* Interests Section */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Interests</h2>
        <p className="text-gray-600 mb-6">
          I am deeply interested in information security, cryptography, and building user-friendly web applications. I enjoy working on innovative projects and exploring new technologies to expand my knowledge.
        </p>

        {/* Contact CTA */}
        <div className="mt-6 text-center">
          <a
            href="/Contact"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
