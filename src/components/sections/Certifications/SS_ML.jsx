import React from 'react';
import ss_ml from "src/assets/certificates/SS_ML/ss_ml.png";

const SS_ML = ({ onClose }) => {
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
            Machine Learning Class Certification - Special Skill
          </h2>

          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              <strong>Special Skill</strong> is an online learning platform that offers certification programs to help individuals develop specialized skills in various fields. The platform provides courses designed to enhance professional competencies, with a focus on practical and actionable knowledge. Participants who successfully complete the courses receive a certificate of participation, recognizing their achievement and newly acquired expertise.
            </p>
          </div>

          {/* Certificate Image */}
          <div className="flex flex-col items-center mb-2">
            <img
              src={ss_ml}
              alt="Special Skill Machine Learning Certificate"
              className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
            />
          </div>

          <div className = "transition-colors text-xs md:text-base mb-4 text-center text-blue-500">
                <a
                  href="https://drive.google.com/file/d/1pNu1PoNN90IOhgONqFoVRtq18uFwkrM3/view?usp=sharing"
                  target="_blank" rel="noopener noreferrer"
                >
                  View Certificate →
                </a>
         </div>

          {/* Certification Details */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              On <strong>February 23, 2025</strong>, I successfully completed the <strong>Machine Learning</strong> class organized by <strong>Special Skill Indonesia</strong>. This program provided a comprehensive understanding of machine learning concepts and practical skills in building AI models.
            </p>

            <p>
              The training covered the following topics:
            </p>

            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li><strong>Introduction to Artificial Intelligence (AI)</strong></li>
              <li><strong>History of AI</strong></li>
              <li><strong>How AI Works</strong></li>
              <li><strong>Data for AI</strong></li>
              <li><strong>Machine Learning Fundamentals</strong></li>
              <li><strong>Deep Learning Basics</strong></li>
              <li><strong>Practical Session: Building AI Models</strong></li>
            </ul>

            <p>
              This certification reflects my understanding of machine learning concepts and my ability to apply them in real-world scenarios. Additionally, the program provided access to resources such as learning modules, mentorship, and opportunities for internships and part-time work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SS_ML;