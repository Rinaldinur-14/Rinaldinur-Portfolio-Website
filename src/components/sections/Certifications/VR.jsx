import React from 'react';
import vr from "/src/assets/certificates/UG/vr.png";

const VR = ({ onClose }) => {
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
            Training Certificate of Virtual Reality (VR) Training Certification - Gunadarma University
          </h2>

          {/* VR Certificate Image */}
          <div className="flex flex-col items-center mb-2">
            <img
              src={vr}
              alt="VR Certification"
              className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
            />
          </div>

          <div className = "transition-colors text-xs md:text-base mb-4 text-center text-blue-500">
                <a
                  href="https://drive.google.com/file/d/1SLWiQlD2ELmnZGBsOhFYbxzRUSe-_XK-/view?usp=sharing"
                  target="_blank" rel="noopener noreferrer"
                >
                  View Certificate →
                </a>
         </div>

          {/* Certification Details */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              From <strong>June 19 to June 23, 2023</strong>, I participated in a comprehensive training program on <strong>Virtual Reality (VR) Technology in Industry 4.0</strong>. This program was conducted under the leadership of <strong>Prof. Dr. Ing. Adang Suhendra, M.Sc.</strong> and covered a wide range of topics essential for understanding and applying VR in industrial contexts.
            </p>

            <p>
              The training included the following modules:
            </p>

            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li><strong>Introduction to VR Applications and VR Devices</strong> (6 hours)</li>
              <li><strong>Scenario Design and User Interface Development for VR</strong> (6 hours)</li>
              <li><strong>3D Modeling Using Blender</strong> (6 hours)</li>
              <li><strong>Introduction to Game Engines</strong> (6 hours)</li>
              <li><strong>Integration of Oculus with Game Engines</strong> (6 hours)</li>
            </ul>

            <p>
              This certification reflects my foundational knowledge and practical skills in VR technology, including 3D modeling, game engine integration, and user interface design. These skills are highly relevant in the context of Industry 4.0, where VR is increasingly used for simulation, training, and design.
            </p>

            <p>
              I am grateful for the opportunity to participate in this training and look forward to applying these skills in future projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VR;