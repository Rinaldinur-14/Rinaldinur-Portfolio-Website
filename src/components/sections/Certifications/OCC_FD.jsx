import React, { useEffect } from 'react';
import sertifikat from "/src/assets/certificates/OCC_FD/OCC_FD.png";

const OCC_FD = ({ onClose }) => {
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
          Frontend Fundamentals Bootcamp
        </h2>

        <div className="space-y-4 text-white text-xs md:text-base text-justify">
          <p>
            <strong>One Code Camp</strong> is an Australian-based organization that offers coding education and training programs designed to help individuals develop skills in software development and programming. The bootcamp focuses on providing accessible and practical coding education, often catering to beginners and those looking to transition into tech careers.
          </p>
        </div>

        {/* Certificate Image */}
        <div className="flex justify-center mb-6">
          <img
            src={sertifikat}
            alt="Frontend Fundamentals Bootcamp Certificate"
            className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <div className = "transition-colors text-xs md:text-base mt-4 mb-4 text-center text-blue-500">
                <a
                  href="https://api.onecodecamp.com/uploads/certificate/certificate.Frontend%20Fundamentals%20Bootcamp_Rinaldi.png"
                  target="_blank" rel="noopener noreferrer"
                >
                  View Certificate →
                </a>
        </div>

        {/* Certificate Description */}
        <div className="space-y-4 text-white text-xs md:text-base text-justify">
          <p>
            I am thrilled to share that I successfully completed the <strong>Frontend Fundamentals Bootcamp</strong> at <strong>One Code Camp Academy</strong> on <strong>March 2nd, 2025</strong>. This intensive 2-week program was an incredible journey into the world of frontend development, equipping me with foundational skills and hands-on experience in key tools and techniques used in the industry.
          </p>

          <p>
            The bootcamp was designed to achieve the following objectives:
          </p>

          <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
            <li><strong>Introduce Fundamental Concepts</strong>: Understand the basics of frontend development.</li>
            <li><strong>Hands-On HTML, CSS, and JavaScript</strong>: Gain practical experience in building web pages.</li>
            <li><strong>Git & GitHub</strong>: Learn version control and collaboration using Git and GitHub.</li>
            <li><strong>JavaScript DOM Manipulation</strong>: Explore how to dynamically interact with web pages.</li>
            <li><strong>Practical Exercises and Projects</strong>: Apply skills through hands-on exercises and projects.</li>
            <li><strong>Collaborative Learning</strong>: Foster a supportive environment for collaboration and knowledge sharing.</li>
            <li><strong>Career Preparation</strong>: Equip participants with foundational skills to pursue further learning and career opportunities in frontend development.</li>
          </ul>

          <p>
            During the bootcamp, I gained proficiency in the following tools and technologies:
          </p>

          <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
            <li><strong>HTML</strong>: Structure and semantics of web pages.</li>
            <li><strong>CSS</strong>: Styling and design principles.</li>
            <li><strong>JavaScript</strong>: Adding interactivity to web pages.</li>
            <li><strong>Git & GitHub</strong>: Version control and collaboration.</li>
            <li><strong>JavaScript DOM Manipulation</strong>: Dynamic interaction with web pages.</li>
          </ul>

          <p>
            This bootcamp has significantly enhanced my ability to build and style web pages, from structuring content to adding interactivity. The hands-on projects and real-world scenarios provided during the course have given me the confidence to tackle frontend challenges head-on and create engaging user experiences.
          </p>

          <p>
            Completing this bootcamp has been a pivotal step in my journey as a frontend developer. It has not only strengthened my technical skills but also deepened my appreciation for the creative possibilities of web design. I am excited to apply these skills in my future projects and continue growing in the field of frontend development.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default OCC_FD;