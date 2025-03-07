import React, { useEffect, useState } from 'react';
import eliteLogo from "/src/assets/docum/exp/ELITE.PNG";
import es from "/src/assets/docum/exp/e1.PNG";
import ed from "/src/assets/docum/exp/e2.PNG";
import et from "/src/assets/docum/exp/e3.JPEG";
import ee from "/src/assets/docum/exp/e4.JPEG";
import el from "/src/assets/docum/exp/e5.JPEG";
import en from "/src/assets/docum/exp/e6.JPEG";
import eu from "/src/assets/docum/exp/e7.JPEG";
import ea from "/src/assets/docum/exp/e8.JPG";
import em from "/src/assets/docum/exp/e9.JPEG";
import ese from "/src/assets/docum/exp/e10.PNG"
import esb from "/src/assets/docum/exp/e11.PNG"
import fa from "/src/assets/docum/exp/ea.JPG"
import fb from "/src/assets/docum/exp/eb.JPG"
import fc from "/src/assets/docum/exp/ec.JPG"


const Lab = ({ onClose }) => {
  const [currentCertIndex, setCurrentCertIndex] = useState(0);
  const [currentDocIndex, setCurrentDocIndex] = useState(0);
  const certificationImages = [es, ed]; // Images for certification carousel
  const documentationImages = [et, ee, esb, ese, el, en, fc, eu, ea, em, fa, fb]; // Images for documentation carousel

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const goToPreviousCert = () => {
    setCurrentCertIndex((prevIndex) =>
      prevIndex === 0 ? certificationImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextCert = () => {
    setCurrentCertIndex((prevIndex) =>
      prevIndex === certificationImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousDoc = () => {
    setCurrentDocIndex((prevIndex) =>
      prevIndex === 0 ? documentationImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextDoc = () => {
    setCurrentDocIndex((prevIndex) =>
      prevIndex === documentationImages.length - 1 ? 0 : prevIndex + 1
    );
  };

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
            Laboratory Assistant at Elementary Laboratory of Industrial Engineering, Gunadarma University
          </h2>

          {/* ELITE Logo and Description */}
          <div className="flex flex-col items-center mb-6">
            <img
              src={eliteLogo}
              alt="ELITE Logo"
              className="w-48 mb-4"
            />
            <p className="text-white text-xs md:text-base text-justify">
            The Elementary Laboratory of Industrial Engineering (ELITE) at Gunadarma University is one of the three main laboratories in the Industrial Engineering major. ELITE is responsible for facilitating five key practicums: Probability Theory, Engineering Drawing, Statistical Inference, Manufacturing Information Systems, and Industrial Engineering Design 1. These practicums provide students with hands-on learning experiences that bridge theoretical knowledge and practical application in industrial engineering. As a Laboratory Assistant, I contributed to various roles and responsibilities across different divisions.
            </p>
          </div>

          {/* Certification Carousel (e1 and e2) */}
          <div className="flex justify-center mb-4 relative">
            <button
              onClick={goToPreviousCert}
              className="absolute left-0 text-white text-2xl z-10 bg-black/50 p-2 rounded-full hover:bg-black/70"
            >
              &larr;
            </button>
            <img
              src={certificationImages[currentCertIndex]}
              alt={`Certification Image ${currentCertIndex + 1}`}
              className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
            <button
              onClick={goToNextCert}
              className="absolute right-0 text-white text-2xl z-10 bg-black/50 p-2 rounded-full hover:bg-black/70"
            >
              &rarr;
            </button>
          </div>

          {/* View Certificate Button */}
          <div className="transition-colors text-xs md:text-base mt-2 mb-4 text-center text-blue-500">
            <a
              href="https://drive.google.com/file/d/10eKV17Jm_xT8LjZJf_Qrw5q9RLvhnEZF/view?usp=sharing"
              target="_blank" rel="noopener noreferrer"
            >
              View Certificates →
            </a>
          </div>

          {/* Detailed Description */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              From <strong>August 14, 2022 - January 18, 2025</strong>, I served as a <strong>Laboratory Assistant</strong> at the Elementary Laboratory of Industrial Engineering (ELITE) at Gunadarma University. My roles and responsibilities included:
            </p>

            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Explored and Prepared Practicum Materials</strong>: Developed materials and systems for 5 practicums, ensuring smooth execution of lab activities.
              </li>
              <li>
                <strong>Conducted Teaching</strong>: Delivered instruction to over 600 practicum participants, fostering a collaborative learning environment.
              </li>
              <li>
                <strong>Evaluated Assignments</strong>: Assisted in assessing and providing feedback on practicum participants' assignments.
              </li>
            </ul>

            <p>
              Additionally, I contributed to the <strong>Maintenance Division</strong> from <strong>August 2022 - January 2024</strong>, where I:
            </p>

            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Maintained Electronic Facilities</strong>: Ensured all lab equipment and software were operational for practicum activities.
              </li>
              <li>
                <strong>Created Databases</strong>: Developed systems for tracking practicum participant attendance and grades.
              </li>
              <li>
                <strong>Monitored Computers</strong>: Used Veyon Master to oversee over 40 computers during practicum sessions.
              </li>
            </ul>

            <p>
              From <strong>January 2024 - January 2025</strong>, I served as the <strong>PIC of Assistants</strong>, where I:
            </p>

            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Coordinated Teams</strong>: Supervised a team of 30 assistants across 6 divisions.
              </li>
              <li>
                <strong>Acted as Liaison</strong>: Facilitated communication between stakeholders, assistants, and practicum participants.
              </li>
              <li>
                <strong>Led Projects</strong>: Organized and led internal projects and collaborative activities.
              </li>
              <li>
                <strong>Hired Assistants</strong>: Recruited and onboarded over 21 new assistants.
              </li>
            </ul>

            <p>
            During my time as a laboratory assistant, I gained invaluable technical skills and hands-on experience with various tools and technologies. I learned how to operate and troubleshoot 3D printers, work with IoT (Internet of Things) devices, and utilize software such as SPSS, Minitab, CATIA, Cura, and Bambu Studio. These tools were essential for supporting practicum activities, from designing prototypes to analyzing data and optimizing manufacturing processes. This experience not only enhanced my technical proficiency but also deepened my understanding of how these technologies are applied in real-world industrial engineering scenarios.
            </p>

            <p>
              This experience enhanced my leadership, technical, and organizational skills, preparing me for future challenges in industrial engineering and beyond.
            </p>

            {/* Documentation Carousel (e3 - e9) */}
            <div className="flex justify-center items-center mt-6 relative">
              <button
                onClick={goToPreviousDoc}
                className="absolute left-0 text-white text-2xl z-10 bg-black/50 p-2 rounded-full hover:bg-black/70"
              >
                &larr;
              </button>
              <img
                src={documentationImages[currentDocIndex]}
                alt={`Documentation Image ${currentDocIndex + 1}`}
                className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
              <button
                onClick={goToNextDoc}
                className="absolute right-0 text-white text-2xl z-10 bg-black/50 p-2 rounded-full hover:bg-black/70"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lab;