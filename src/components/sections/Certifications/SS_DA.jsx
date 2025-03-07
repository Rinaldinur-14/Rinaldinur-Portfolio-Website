import React from 'react';
import ss_da from "/src/assets/certificates/SS_DA/ss_da.png";

const SS_DA = ({ onClose }) => {
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
            Data Analyst Class Certification - Special Skill
          </h2>

          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              <strong>Special Skill</strong> is an online learning platform that offers certification programs to help individuals develop specialized skills in various fields. The platform provides courses designed to enhance professional competencies, with a focus on practical and actionable knowledge. Participants who successfully complete the courses receive a certificate of participation, recognizing their achievement and newly acquired expertise.
            </p>
          </div>

          {/* Certificate Image */}
          <div className="flex flex-col items-center mb-2">
            <img
              src={ss_da}
              alt="Special Skill Data Analyst Certificate"
              className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
            />
          </div>

          <div className = "transition-colors text-xs md:text-base mb-4 text-center text-blue-500">
                <a
                  href="https://drive.google.com/file/d/1inhM-YQOv3_SrLMDXd9aEIT8HSxhwGkf/view?usp=sharing"
                  target="_blank" rel="noopener noreferrer"
                >
                  View Certificate →
                </a>
         </div>

          {/* Certification Details */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              On <strong>February 24, 2025</strong>, I successfully completed the <strong>Data Analyst</strong> class organized by <strong>Special Skill Indonesia</strong>. This program provided a comprehensive understanding of data analysis concepts and practical skills in using tools like <strong>Excel</strong> and <strong>Python</strong> for data analysis.
            </p>

            <p>
              The training covered the following topics:
            </p>

            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li><strong>Introduction to Data and Its Sources</strong></li>
              <li><strong>Utilization of Data in Business</strong></li>
              <li><strong>Importance of Data in Decision-Making</strong></li>
              <li><strong>Data Analysis Lifecycle</strong></li>
              <li><strong>Introduction to Data Analysis Tools</strong></li>
              <li><strong>Practical Data Analysis with Excel and Python</strong></li>
            </ul>

            <p>
              This certification reflects my ability to analyze and interpret data effectively, as well as my proficiency in using Excel and Python for data analysis. Additionally, the program provided access to resources such as learning modules, mentorship, and opportunities for real-world projects and networking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SS_DA;