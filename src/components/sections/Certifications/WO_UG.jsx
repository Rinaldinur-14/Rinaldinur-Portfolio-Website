import React from 'react';
import promodel from "/src/assets/certificates/UG/wa.png";
import iso from "/src/assets/certificates/UG/wb.png";

const WO_UG = ({ onClose }) => {
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
            Gunadarma University Workshop Certificates
          </h2>
        <div className="space-y-4 pr-4">
          {/* Title */}
          <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
            Certificate of Training of Creating Simulation Using Promodel Software - Gunadarma University
          </h3>

          {/* ProModel Certificate Image */}
          <div className="flex flex-col items-center mb-6">
            <img
              src={promodel}
              alt="ProModel Workshop Certificate"
              className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
            />
          </div>

          {/* Certification Details */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              On <strong>July 15, 2023</strong>, I completed a training program on <strong>Creating Simulation Using ProModel Software</strong>, conducted by <strong>Gunadarma University</strong>. This workshop provided hands-on experience in system modeling and simulation using ProModel V7.5, a powerful tool for process optimization and decision-making.
            </p>

            <p>
              The training covered the following topics:
            </p>

            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li><strong>Understanding Systems and System Modeling</strong></li>
              <li><strong>Stages to Create Simulations</strong></li>
              <li><strong>Introduction to ProModel V7.5 Software</strong></li>
              <li><strong>Basic Elements of ProModel Software</strong></li>
              <li><strong>Description and Analysis for ProModel-Based Simulations</strong></li>
            </ul>

            <p>
              This certification reflects my ability to create and analyze simulations using ProModel, a skill that is highly valuable in industrial engineering and process optimization.
            </p>
          </div>
        </div>

        <div className="space-y-4 pr-4 mt-10">
          {/* Title */}
          <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
          Certificate of Training of Introduction to ISO 14001 - Gunadarma University
          </h3>

          {/* ISO 14001 Certificate Image */}
          <div className="flex flex-col items-center mb-6">
            <img
              src={iso}
              alt="ISO 14001 Workshop Certificate"
              className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
            />
          </div>

          {/* Certification Details */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              On <strong>October 18, 2023</strong>, I completed a training program on <strong>Introduction to ISO 14001</strong>, conducted by <strong>Gunadarma University</strong>. This workshop provided a comprehensive understanding of the ISO 14001 standard, which focuses on Environmental Management Systems (EMS).
            </p>

            <p>
              The training covered the following topics:
            </p>

            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li><strong>Environment Management System (EMS) Development</strong></li>
              <li><strong>Overview of ISO 14001</strong></li>
              <li><strong>Requirements of ISO 14001</strong></li>
              <li><strong>Certification Process</strong></li>
            </ul>

            <p>
              This certification reflects my understanding of environmental management systems and the ISO 14001 standard, which is essential for sustainable industrial practices.
            </p>
          </div>

          <div className = "transition-colors text-xs md:text-base mb-4 text-center text-blue-500">
                <a
                  href="https://drive.google.com/file/d/1U5X9Bh_81ZJd7xpwAZ5fAzkahIdWdiK-/view?usp=sharing"
                  target="_blank" rel="noopener noreferrer"
                >
                  View Certificate →
                </a>
         </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default WO_UG;