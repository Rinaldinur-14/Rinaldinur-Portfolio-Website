import React from 'react';
import ru_fd from "src/assets/certificates/RU_FD/RU_FD.png";
import pfd from "src/assets/projects/RUW/PRUW.png";

const RU_FD = ({ onClose }) => {
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
          {/* Title */}
          <h2 className="text-xl md:text-3xl font-bold mb-6 text-white text-center">
            Introduction to Software Engineering Mini Course Certification - RevoU
          </h2>

          {/* Introduction */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              <strong>RevoU</strong> is an online education platform that empowers individuals with digital skills, entrepreneurship knowledge, and career development tools. Through its <strong>RevoU Mini Courses</strong>, the platform provides shorter, focused programs designed to deliver quick yet comprehensive introductions to software engineering, making it ideal for beginners or busy individuals looking to upskill efficiently and affordably.
            </p>
          </div>

          {/* Certificate Image */}
          <div className="flex flex-col items-center mb-2">
            <img
              src={ru_fd}
              alt="RevoU Software Engineering Certificate"
              className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
            />
          </div>

          <div className="transition-colors text-xs md:text-base mb-4 text-center text-blue-500">
            <a
              href="https://drive.google.com/file/d/1BGmgkZYvmSgsM6jKfQ_B6Sjzzc_Oq0FG/view"
              target="_blank" rel="noopener noreferrer"
            >
              View Certificate →
            </a>
          </div>

          {/* Certification Details */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              On <strong>28 February 2025</strong>, I successfully completed the <strong>Introduction to Software Engineering</strong> course offered by <strong>RevoU</strong>. This 2-week mini course provided a comprehensive introduction to software engineering, covering both theoretical concepts and practical applications.
            </p>

            <p>
              The mini course was structured into 9 days (17 March to 27 March 2025), with each day focusing on a specific topic:
            </p>

            <h3 className="text-lg md:text-xl font-bold mt-6 mb-4 text-white">
              Key Topics Covered:
            </h3>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li><strong>Introduction to Web Engineering</strong> (Day 1)</li>
              <li><strong>Creating UI with HTML</strong> (Day 2)</li>
              <li><strong>Designing with CSS</strong> (Day 3)</li>
              <li><strong>Introduction to JavaScript</strong> (Day 4)</li>
              <li><strong>Dynamic Views with JavaScript</strong> (Day 6)</li>
              <li><strong>JavaScript Validation & Deployment</strong> (Day 7)</li>
              <li><strong>Career Opportunities in Software Engineering</strong> (Day 9)</li>
            </ul>

            <p>
              The mini course also emphasized hands-on learning through a <strong>mini project</strong>, where I developed a responsive travel agency website. This project allowed me to apply the skills I learned, including:
            </p>

            
          {/* Project Image */}
          <div className="flex flex-col items-center mb-2">
            <img
              src={pfd}
              alt="RevoU Software Engineering Certificate"
              className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
            />
          </div>

          <div className="transition-colors text-xs md:text-base mb-4 text-center text-blue-500">
            <a
              href="https://revou-fundamental-course.github.io/17-feb-25-Rinaldinur-14/#cta"
              target="_blank" rel="noopener noreferrer"
            >
              View Mini Project →
            </a>
          </div>

            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li><strong>HTML</strong>: Structuring the website layout.</li>
              <li><strong>CSS</strong>: Styling and responsive design.</li>
              <li><strong>JavaScript</strong>: Implementing form validation and dynamic features like an auto-sliding banner.</li>
              <li><strong>Git & GitHub</strong>: Version control and deployment.</li>
            </ul>

            <p>
              This certification reflects my foundational knowledge in software engineering and my ability to apply these skills in real-world projects. Additionally, the program provided valuable career preparation tips, including CV crafting, interview techniques, and insights into the software engineering career path.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RU_FD;