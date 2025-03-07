import React, { useEffect } from 'react';
import sertifikat from "src/assets/certificates/ALZ/ALZ.png";

const ALZ = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center overflow-hidden" onClick={onClose}>
      <div className="bg-white/10 p-8 rounded-lg w-[70%] h-[90%] mx-4 overflow-y-auto" onClick={(e) => e.stopPropagation()}>

        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl"
        >
          &times;
        </button>
        <div className="space-y-4 pr-4">

        {/* Certificate Title */}
        <h2 className="text-xl md:text-3xl font-bold mb-6 text-white text-center">
          Backend Python Mini Bootcamp Certification - Alhazen Academy
        </h2>

        <div className="space-y-4 text-white text-xs md:text-base text-justify">
          <p>
            <strong>Alhazen Academy</strong> is an organization that offers coding education and training programs designed to help individuals develop skills in software development and programming. The bootcamp focuses on providing accessible and practical coding education, often catering to beginners and those looking to transition into tech careers.
          </p>
        </div>

        {/* Certificate Image */}
        <div className="flex justify-center mb-6">
          <img
            src={sertifikat}
            alt="Mini Bootcamp: Backend Python Certificate"
            className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <div className = "transition-colors text-xs md:text-base mt-4 mb-4 text-center text-blue-500">
                <a
                  href="https://drive.google.com/file/d/1NsDq4lKbnJx4KW26ioy3sdSJycgsIPCg/view"
                  target="_blank" rel="noopener noreferrer"
                >
                  View Certificate →
                </a>
        </div>

        {/* Certificate Description */}
        <div className="space-y-4 text-white text-xs md:text-base text-justify">
          <p>
            I am thrilled to share that I successfully completed the <strong>Mini Bootcamp: Backend Python Batch 1</strong> at <strong>Alhazen Academy</strong> from <strong>February 17 to February 19, 2025</strong>. This intensive 3-day program was an incredible journey into the world of backend development using Python, equipping me with foundational skills and hands-on experience in key tools and techniques used in the industry.
          </p>

          <p>
            The bootcamp was designed to achieve the following objectives:
          </p>

          <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
            <li><strong>Introduce Fundamental Concepts</strong>: Understand the basics of Python programming and backend development.</li>
            <li><strong>Hands-On Python Programming</strong>: Gain practical experience in Python for backend development.</li>
            <li><strong>Basic Syntax and Statements</strong>: Learn the basic syntax, statements, and functions in Python.</li>
            <li><strong>Variables and Input Handling</strong>: Master the use of variables and input functions in Python.</li>
            <li><strong>Practical Exercises and Projects</strong>: Apply skills through hands-on exercises and real-world case studies.</li>
          </ul>

          <p>
            During the bootcamp, I gained proficiency in the following tools and technologies:
          </p>

          <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
            <li><strong>Python</strong>: Essentials for backend development, including basic syntax, variables, and functions.</li>
            <li><strong>Interactive and Scripting Mode</strong>: Using Python in both interactive and scripting modes.</li>
            <li><strong>Basic Python Functions</strong>: Utilizing functions like <code>print()</code> and <code>input()</code>.</li>
            <li><strong>Error Handling</strong>: Understanding and handling syntax errors in Python.</li>
          </ul>

          <p>
            One of the key tasks during the bootcamp was to create a Python program that produces a specific output, as shown in the task image. I successfully completed this task, which involved creating a program that interacts with the user and displays the correct output based on their input.
          </p>

          <p>
            This bootcamp has significantly enhanced my ability to work with Python for backend development. The hands-on projects and real-world scenarios provided during the course have given me the confidence to tackle backend challenges head-on and develop efficient solutions.
          </p>

          <p>
            Completing this bootcamp has been a pivotal step in my journey as a backend developer. It has not only strengthened my technical skills but also deepened my appreciation for the power of Python in backend development. I am excited to apply these skills in my future projects and continue growing in the field of backend development.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ALZ;