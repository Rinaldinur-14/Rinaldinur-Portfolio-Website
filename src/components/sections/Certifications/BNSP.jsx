import React from 'react';
import bnsp from "/src/assets/certificates/UG/bnsp.PNG";

const BNSP = ({ onClose }) => {
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
            Certificate of Competence with Qualification of Manufacturing System Quality Control - BNSP
          </h2>

          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              <strong>BNSP (Badan Nasional Sertifikasi Profesi)</strong> is the Indonesian National Professional Certification Authority responsible for certifying individuals' competencies in various professional fields. Through its certification programs, BNSP ensures that individuals meet national competency standards, as outlined in the Indonesian National Work Competency Standards (SKKNI). Certificates issued by BNSP, such as those for competencies in Manufacturing Systems and Quality Control, are recognized nationally and are valid for three years, providing professionals with formal acknowledgment of their skills and expertise.
            </p>
          </div>

          {/* BNSP Certificate Image */}
          <div className="flex flex-col items-center mb-2 transition-transform duration-300 ease-in-out transform hover:scale-105">
            <img
              src={bnsp}
              alt="BNSP Certification"
              className="w-full max-w-md rounded-lg shadow-lg object-contain mb-4"
            />
          </div>

          <div className = "transition-colors text-xs md:text-base mb-4 text-center text-blue-500">
                <a
                  href="https://drive.google.com/file/d/1SCO7eCBrHzJX29XRQZmKWPKEbOHCjbKx/view?usp=drive_link"
                  target="_blank" rel="noopener noreferrer"
                >
                  View Certificate →
                </a>
         </div>

          {/* Certification Details */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              On <strong>July 6, 2024</strong>, I was awarded a <strong>Certificate of Competence</strong> by the <strong>Badan Nasional Sertifikasi Profesi (BNSP)</strong>, the Indonesian Professional Certification Authority. This certification is valid for <strong>3 years</strong> and attests to my competence in the field of <strong>Manufacturing System Quality Control</strong>.
            </p>

            <p>
              The certification was issued by the <strong>Professional Certification Agency of Gunadarma University</strong> and covers the following competency units:
            </p>

            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li><strong>Setting Quality Standards</strong> (M.702092.016.01)</li>
              <li><strong>Determining Sampling Programs</strong> (M.702092.016.01)</li>
              <li><strong>Using Statistical Techniques for Quality Control</strong> (M.702092.017.01)</li>
              <li><strong>Using Troubleshooting Techniques</strong> (M.702092.018.01)</li>
              <li><strong>Developing Quality Assurance Plans</strong> (M.702092.019.01)</li>
              <li><strong>Conducting Internal Audits</strong> (M.702092.020.01)</li>
              <li><strong>Following Up on Customer Complaints</strong> (M.702092.021.01)</li>
            </ul>

            <p>
              This certification reflects my expertise in ensuring quality control within manufacturing systems, a critical skill in industrial engineering. It also demonstrates my ability to apply statistical techniques, develop quality assurance plans, and address customer complaints effectively.
            </p>

            <p>
              I am proud to have achieved this certification and look forward to applying the knowledge and skills it represents in my professional career.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BNSP;