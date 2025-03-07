import React from 'react';
import dq_daa from "/src/assets/certificates/DQ_DA/DQ_DAA.PNG";
import dq_dae from "/src/assets/certificates/DQ_DA/DQ_DAE.PNG";
import dq_daml from "/src/assets/certificates/DQ_DA/DQ_DAML.PNG";
import dqa from "/src/assets/certificates/DQ_DA/DQAA.PNG";

const DQ_DA = ({ onClose }) => {
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
          Data Analyst & Machine Learning Bootcamp Certificates - DQ Lab
          </h2>

          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              <strong>DQLab</strong> is an online learning platform that offers specialized bootcamps and certification programs to help individuals develop skills in data analysis, machine learning, and programming. Through its practical and hands-on bootcamps, such as "Study Case Bootcamp Data Analyst with SQL & Python," "Study Case Bootcamp Data Analyst with Excel," and "Study Case Bootcamp Machine Learning & AI for Beginner," DQLab provides learners with the tools and knowledge needed to excel in data-driven fields. Participants who successfully complete these programs receive a certificate of completion, recognizing their achievement and newly acquired expertise.
            </p>
          </div>
          <div className="flex flex-col items-center mb-2">
              <img
                src={dqa}
                alt="Data Analyst with SQL & Python Certificate"
                className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
              />
            </div>

            <div className = "transition-colors text-xs md:text-base mb-4 text-center text-blue-500">
                <a
                  href="https://academy.dqlab.id/certificate/pdf/DQLABMBINTLC4NKKTWA"
                  target="_blank" rel="noopener noreferrer"
                >
                  View Certificate →
                </a>
         </div>

          {/* Certificate 1: Data Analyst with SQL & Python (DQ_DAA.png) */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Certificate of Completion: Data Analyst with SQL & Python - DQLab
            </h3>
            <div className="flex flex-col items-center mb-2">
              <img
                src={dq_daa}
                alt="Data Analyst with SQL & Python Certificate"
                className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
              />
            </div>

            <div className = "transition-colors text-xs md:text-base mb-4 text-center text-blue-500">
                <a
                  href="https://academy.dqlab.id/certificate/pdf/DQLABMB4SPLROCNM"
                  target="_blank" rel="noopener noreferrer"
                >
                  View Certificate →
                </a>
         </div>

            <div className="space-y-4 text-white text-xs md:text-base text-justify">
              <p>
                On <strong>February 18, 2025</strong>, I completed the <strong>Study Case Bootcamp: Data Analyst with SQL & Python</strong> at <strong>DQLab</strong>. This bootcamp provided hands-on experience in data analysis using SQL and Python, focusing on data cleaning, variable and data type manipulation, and string functions.
              </p>
              <p>
                Key skills and tasks covered during the bootcamp:
              </p>
              <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
                <li><strong>Understanding Variables and Data Types</strong></li>
                <li><strong>Using Mathematical Operators</strong></li>
                <li><strong>Applying String Functions and Methods</strong> (e.g., <code>len()</code>, <code>upper()</code>, <code>lower()</code>, <code>split()</code>, <code>join()</code>)</li>
              </ul>
              <p>
                This certification reflects my ability to analyze and manipulate data effectively using SQL and Python.
              </p>
            </div>
          </div>

          {/* Certificate 2: Data Analyst with Excel (DQ_DAE.png) */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Certificate of Completion: Data Analyst with Excel - DQLab
            </h3>
            <div className="flex flex-col items-center mb-2">
              <img
                src={dq_dae}
                alt="Data Analyst with Excel Certificate"
                className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
              />
            </div>

            <div className = "transition-colors text-xs md:text-base mb-4 text-center text-blue-500">
                <a
                  href="https://academy.dqlab.id/certificate/pdf/DQLABMB4EXCQHUJQM"
                  target="_blank" rel="noopener noreferrer"
                >
                  View Certificate →
                </a>
         </div>

            <div className="space-y-4 text-white text-xs md:text-base text-justify">
              <p>
                On <strong>February 19, 2025</strong>, I completed the <strong>Study Case Bootcamp: Data Analyst with Excel</strong> at <strong>DQLab</strong>. This bootcamp focused on data cleaning and preparation using Microsoft Excel, ensuring data integrity and accuracy.
              </p>
              <p>
                Key tasks and skills covered during the bootcamp:
              </p>
              <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
                <li><strong>Data Cleaning and Preparation</strong></li>
                <li><strong>Removing Duplicate Records and Blank Cells</strong></li>
                <li><strong>Ensuring Data Consistency</strong> (e.g., price ranges, character limits, capitalization)</li>
              </ul>
              <p>
                This certification reflects my ability to clean and prepare data effectively using Excel.
              </p>
            </div>
          </div>

          {/* Certificate 3: Machine Learning & AI for Beginners (DQ_DAML.png) */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Certificate of Completion: Machine Learning & AI for Beginners - DQLab
            </h3>
            <div className="flex flex-col items-center mb-2">
              <img
                src={dq_daml}
                alt="Machine Learning & AI for Beginners Certificate"
                className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
              />
            </div>

            <div className = "transition-colors text-xs md:text-base mb-4 text-center text-blue-500">
                <a
                  href="https://academy.dqlab.id/certificate/pdf/DQLABMB4MAINBHWAT"
                  target="_blank" rel="noopener noreferrer"
                >
                  View Certificate →
                </a>
         </div>

            <div className="space-y-4 text-white text-xs md:text-base text-justify">
              <p>
                On <strong>February 18, 2025</strong>, I completed the <strong>Study Case Bootcamp: Machine Learning & AI for Beginners</strong> at <strong>DQLab</strong>. This bootcamp introduced me to the fundamentals of machine learning and AI, focusing on data preprocessing and cleaning.
              </p>
              <p>
                Key skills and tasks covered during the bootcamp:
              </p>
              <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
                <li><strong>Data Preprocessing and Cleaning</strong></li>
                <li><strong>Handling Missing Data</strong></li>
                <li><strong>Removing Duplicate Data</strong></li>
                <li><strong>Preparing Data for Analysis</strong></li>
              </ul>
              <p>
                This certification reflects my foundational knowledge in machine learning and AI, particularly in data preparation and preprocessing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DQ_DA;