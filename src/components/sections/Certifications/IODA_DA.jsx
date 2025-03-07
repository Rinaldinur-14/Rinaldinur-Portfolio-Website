import React from 'react';
import ioda_da from "src/assets/certificates/IODA_DA/ioda_da.png";

const IODA_DA = ({ onClose }) => {
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
          <h2 className="text-xl md:text-3xl font-bold mb-6 text-w hite text-center">
            Certificate of Exellence of Weekend Class Data Analyst - IODA Academy
          </h2>

          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              <strong>IODA Academy</strong> is an educational institution that offers specialized training programs to help individuals develop skills in data analysis, coding, and other technical fields. Through its intensive courses, such as the "Kelas Weekend Data Analyst," IODA Academy provides hands-on, practical learning experiences designed to enhance professional competencies. Participants who successfully complete these programs receive a certificate of excellence, recognizing their achievement and newly acquired expertise.
            </p>
          </div>

          {/* Certificate Image */}
          <div className="flex flex-col items-center mb-2">
            <img
              src={ioda_da}
              alt="IODA Academy Data Analyst Certificate"
              className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
            />
          </div>

          <div className = "transition-colors text-xs md:text-base mb-4 text-center text-blue-500">
                <a
                  href="https://drive.google.com/file/d/14S-Xo1-SizkjXUDU3pXq5eC7X6sNUkUx/view?usp=sharing"
                  target="_blank" rel="noopener noreferrer"
                >
                  View Certificate →
                </a>
         </div>
         

          {/* Certification Details */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              From <strong>February 15 to February 16, 2025</strong>, I completed the <strong>Kelas Weekend Data Analyst</strong> training program organized by <strong>IODA Academy</strong>. This intensive 2-day program focused on data analysis and visualization using tools like <strong>Excel</strong> and <strong>Looker Studio</strong>.
            </p>

            <p>
              The training covered the following topics:
            </p>

            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li><strong>Data Cleansing Using Excel Formulas</strong></li>
              <li><strong>Activating Data Analysis Tools in Excel</strong></li>
              <li><strong>Top 10 Excel Formulas for Data Analysis</strong></li>
              <li><strong>Calculating Descriptive Statistics in Excel</strong></li>
              <li><strong>Introduction to Looker Studio</strong></li>
              <li><strong>Importing Data from Excel to Looker Studio</strong></li>
              <li><strong>Creating Basic Visualizations</strong></li>
              <li><strong>Geographic Data Visualization with Maps</strong></li>
              <li><strong>Editing Tooltips and Labels for Clarity</strong></li>
              <li><strong>Adding Responsive Layouts for Desktop and Mobile</strong></li>
              <li><strong>Adding Text, Images, and Logos to Dashboards</strong></li>
              <li><strong>Keeping Data Synchronized Using Parameters</strong></li>
            </ul>

            <p>
              This certification reflects my ability to analyze and visualize data effectively using Excel and Looker Studio, as well as my understanding of data cleansing and visualization techniques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IODA_DA;