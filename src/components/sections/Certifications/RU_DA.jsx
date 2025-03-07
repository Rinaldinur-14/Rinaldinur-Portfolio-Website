import React from 'react';
import ru_da from "src/assets/certificates/RU_DA/ru_da.png";

const RU_DA = ({ onClose }) => {
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
          Introduction to Data Analytics Mini Course Certification - RevoU 
          </h2>

          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              <strong>RevoU</strong> is an online education platform that empowers individuals with digital skills, entrepreneurship knowledge, and career development tools. Through its <strong>RevoU Mini Courses</strong>, the platform provides shorter, focused programs designed to deliver quick yet comprehensive introductions to data analysis, making it ideal for beginners or busy individuals looking to upskill efficiently and affordably.
            </p>
          </div>

          {/* Certificate Image */}
          <div className="flex flex-col items-center mb-2">
            <img
              src={ru_da}
              alt="RevolU Data Analytics Certificate"
              className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
            />
          </div>

          <div className = "transition-colors text-xs md:text-base mb-4 text-center text-blue-500">
                <a
                  href="https://drive.google.com/file/d/1tzmRdkZJgY7nIsngxrIhyZESfXVX_Vme/view"
                  target="_blank" rel="noopener noreferrer"
                >
                  View Certificate →
                </a>
         </div>

          {/* Certification Details */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              On <strong>February 14, 2025</strong>, I successfully completed the <strong>Introduction to Data Analytics</strong> course offered by <strong>RevolU</strong>. This 10-day mini course provided a comprehensive introduction to data analytics, covering both theoretical concepts and practical applications in business.
            </p>

            <p>
              The mini course was structured into 10 days (February 3 to February 14, 2025), with each day focusing on a specific topic:
            </p>

            <h3 className="text-lg md:text-xl font-bold mt-6 mb-4 text-white">
              Key Topics Covered:
            </h3>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li><strong>Introduction to Data Analytics</strong> (Day 1)</li>
              <li><strong>Data Analytics in Business</strong> (Day 2)</li>
              <li><strong>Solving Problems with Metrics</strong> (Days 3-4)</li>
              <li><strong>Career Preparation and Alumni Sharing</strong> (Day 5)</li>
              <li><strong>CV Crafting and Interview Tips</strong> (Days 6-7)</li>
              <li><strong>Case Study Review and Best Practices</strong> (Day 8)</li>
              <li><strong>Self-Development and Professional Growth</strong> (Day 9)</li>
              <li><strong>Becoming a Data Analyst at Top Companies</strong> (Day 10)</li>
            </ul>

            <p>
              The mini course also emphasized the use of tools such as <strong>Python</strong>, <strong>Google Data Studio</strong>, <strong>SQL</strong>, <strong>Looker</strong>, <strong>Google BigQuery</strong>, and <strong>Tableau</strong>. I gained proficiency in data visualization, data-driven marketing, and spreadsheet analysis, as reflected in the skills assessment:
            </p>

            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li><strong>Google Data Studio</strong>: 80%</li>
              <li><strong>Data Visualization</strong>: 95%</li>
              <li><strong>Data-Driven Marketing</strong>: 50%</li>
              <li><strong>Spreadsheet</strong>: 60%</li>
            </ul>

            <p>
              This certification reflects my foundational knowledge in data analytics and my ability to apply these skills in real-world business scenarios. Additionally, the program provided valuable career preparation tips, including CV crafting, interview techniques, and case study best practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RU_DA;