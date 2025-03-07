import React from 'react';
import ka from "/src/assets/certificates/UG/ka.png";
import kb from "/src/assets/certificates/UG/kb.png";
import kc from "/src/assets/certificates/UG/kc.png";
import kd from "/src/assets/certificates/UG/kd.png";
import ke from "/src/assets/certificates/UG/ke.png";
import kf from "/src/assets/certificates/UG/kf.png";
import kg from "/src/assets/certificates/UG/kg.png";
import kh from "/src/assets/certificates/UG/kh.png";

const KURSUS_UG = ({ onClose }) => {
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
            Gunadarma University Training Certificates
          </h2>

          {/* Certificate 1: Product Design (ka.png) */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Certificate of Training in Product Design - Gunadarma University
            </h3>
            <div className="flex flex-col items-center mb-6">
              <img
                src={ka}
                alt="Product Design Certificate"
                className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
              />
            </div>
            <div className="space-y-4 text-white text-xs md:text-base text-justify">
              <p>
                From <strong>February 22 to February 27, 2021</strong>, I completed a training program on <strong>Product Design</strong>, conducted by <strong>Gunadarma University</strong>. This program focused on designing product samples, creating product designs, and determining the flow of the manufacturing process.
              </p>
              <p>
                The training covered the following topics:
              </p>
              <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
                <li><strong>Designing Product Designs</strong></li>
                <li><strong>Designing Product Samples</strong></li>
                <li><strong>Determining the Flow of the Manufacturing Process</strong></li>
              </ul>
              <p>
                This certification reflects my foundational skills in product design and manufacturing processes.
              </p>
            </div>
          </div>

          {/* Certificate 2: Process Planning (kb.png) */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Certificate of Training in Process Planning - Gunadarma University
            </h3>
            <div className="flex flex-col items-center mb-6">
              <img
                src={kb}
                alt="Process Planning Certificate"
                className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
              />
            </div>
            <div className="space-y-4 text-white text-xs md:text-base text-justify">
              <p>
                From <strong>August 16 to August 21, 2021</strong>, I completed a training program on <strong>Process Planning</strong>, conducted by <strong>Gunadarma University</strong>. This program focused on determining the flow of manufacturing processes, managing resources, and planning costs for product and process design.
              </p>
              <p>
                The training covered the following topics:
              </p>
              <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
                <li><strong>Determining the Flow of Manufacturing Processes</strong></li>
                <li><strong>Managing Resources for Product and Process Design</strong></li>
                <li><strong>Planning Costs for Product and Process Design</strong></li>
              </ul>
              <p>
                This certification reflects my ability to plan and optimize manufacturing processes effectively.
              </p>
            </div>
          </div>

          {/* Certificate 3: Production System Design (kc.png) */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Certificate of Training in Production System Design - Gunadarma University
            </h3>
            <div className="flex flex-col items-center mb-6">
              <img
                src={kc}
                alt="Production System Design Certificate"
                className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
              />
            </div>
            <div className="space-y-4 text-white text-xs md:text-base text-justify">
              <p>
                From <strong>February 21 to March 4, 2022</strong>, I completed a training program on <strong>Production System Design</strong>, conducted by <strong>Gunadarma University</strong>. This program focused on designing production process layouts, workplace layouts, and analyzing material handling.
              </p>
              <p>
                The training covered the following topics:
              </p>
              <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
                <li><strong>Designing Production Process Layouts</strong></li>
                <li><strong>Designing Workplace Layouts</strong></li>
                <li><strong>Analyzing Material Handling</strong></li>
              </ul>
              <p>
                This certification reflects my ability to design and optimize production systems.
              </p>
            </div>
          </div>

          {/* Certificate 4: Evaluation of Production System Design (kd.png) */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Certificate of Training in Evaluation of Production System Design - Gunadarma University
            </h3>
            <div className="flex flex-col items-center mb-6">
              <img
                src={kd}
                alt="Evaluation of Production System Design Certificate"
                className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
              />
            </div>
            <div className="space-y-4 text-white text-xs md:text-base text-justify">
              <p>
                From <strong>June 20 to June 25, 2022</strong>, I completed a training program on <strong>Evaluation of Production System Design</strong>, conducted by <strong>Gunadarma University</strong>. This program focused on designing continuous improvements, planning purchasing activities, and evaluating maintenance systems.
              </p>
              <p>
                The training covered the following topics:
              </p>
              <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
                <li><strong>Designing Continuous Improvements</strong></li>
                <li><strong>Planning Purchasing Activities</strong></li>
                <li><strong>Evaluating Maintenance Systems</strong></li>
              </ul>
              <p>
                This certification reflects my ability to evaluate and improve production systems.
              </p>
            </div>
          </div>

          {/* Certificate 5: Production Planning (ke.png) */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Certificate of Training in Production Planning - Gunadarma University
            </h3>
            <div className="flex flex-col items-center mb-6">
              <img
                src={ke}
                alt="Production Planning Certificate"
                className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
              />
            </div>
            <div className="space-y-4 text-white text-xs md:text-base text-justify">
              <p>
                From <strong>February 27 to March 4, 2023</strong>, I completed a training program on <strong>Production Planning</strong>, conducted by <strong>Gunadarma University</strong>. This program focused on analyzing production capacity, adjusting production capacity, and planning material requirements.
              </p>
              <p>
                The training covered the following topics:
              </p>
              <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
                <li><strong>Analyzing Production Capacity</strong></li>
                <li><strong>Adjusting Production Capacity</strong></li>
                <li><strong>Planning Material Requirements</strong></li>
              </ul>
              <p>
                This certification reflects my ability to plan and optimize production processes.
              </p>
            </div>
          </div>

          {/* Certificate 6: Production Control (kf.png) */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Certificate of Training in Production Control - Gunadarma University
            </h3>
            <div className="flex flex-col items-center mb-6">
              <img
                src={kf}
                alt="Production Control Certificate"
                className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
              />
            </div>
            <div className="space-y-4 text-white text-xs md:text-base text-justify">
              <p>
                From <strong>June 19 to June 24, 2023</strong>, I completed a training program on <strong>Production Control</strong>, conducted by <strong>Gunadarma University</strong>. This program focused on setting quality standards, determining sampling programs, and using statistical techniques for quality control.
              </p>
              <p>
                The training covered the following topics:
              </p>
              <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
                <li><strong>Setting Quality Standards</strong></li>
                <li><strong>Determining Sampling Programs</strong></li>
                <li><strong>Using Statistical Techniques for Quality Control</strong></li>
              </ul>
              <p>
                This certification reflects my ability to control and optimize production processes.
              </p>
            </div>
          </div>

          {/* Certificate 7: Quality Control (kg.png) */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Certificate of Training in Quality Control - Gunadarma University
            </h3>
            <div className="flex flex-col items-center mb-6">
              <img
                src={kg}
                alt="Quality Control Certificate"
                className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
              />
            </div>
            <div className="space-y-4 text-white text-xs md:text-base text-justify">
              <p>
                From <strong>December 27 to December 30, 2023</strong>, I completed a training program on <strong>Quality Control</strong>, conducted by <strong>Gunadarma University</strong>. This program focused on setting quality standards, determining sampling programs, and using statistical techniques for quality control.
              </p>
              <p>
                The training covered the following topics:
              </p>
              <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
                <li><strong>Setting Quality Standards</strong></li>
                <li><strong>Determining Sampling Programs</strong></li>
                <li><strong>Using Statistical Techniques for Quality Control</strong></li>
              </ul>
              <p>
                This certification reflects my ability to ensure quality in production processes.
              </p>
            </div>
          </div>

          {/* Certificate 8: Quality Assurance (kh.png) */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              Certificate of Training in Quality Assurance - Gunadarma University
            </h3>
            <div className="flex flex-col items-center mb-6">
              <img
                src={kh}
                alt="Quality Assurance Certificate"
                className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
              />
            </div>
            <div className="space-y-4 text-white text-xs md:text-base text-justify">
              <p>
                From <strong>June 10 to June 22, 2024</strong>, I completed a training program on <strong>Quality Assurance</strong>, conducted by <strong>Gunadarma University</strong>. This program focused on developing quality assurance plans, conducting internal audits, and following up on customer complaints.
              </p>
              <p>
                The training covered the following topics:
              </p>
              <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
                <li><strong>Developing Quality Assurance Plans</strong></li>
                <li><strong>Conducting Internal Audits</strong></li>
                <li><strong>Following Up on Customer Complaints</strong></li>
              </ul>
              <p>
                This certification reflects my ability to ensure quality and compliance in production systems.
              </p>
            </div>
            <div className = "transition-colors text-xs md:text-base mb-4 text-center text-blue-500">
                <a
                  href="https://drive.google.com/file/d/1f88TL7MISZU3Nk-iGDjun6g_qf_3zOoP/view?usp=sharing"
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

export default KURSUS_UG;