import  { useEffect, useState } from 'react';
import bksImg1 from "src/assets/docum/organz/BKSTI1.jpeg";
import bksImg2 from "src/assets/docum/organz/BKSTI2.jpeg";
import bksImg3 from "src/assets/docum/organz/BKSTI3.jpeg";
import bks4 from "src/assets/docum/organz/BKSTI4.png";
import bks5 from "src/assets/docum/organz/BKSTI5.png";

// eslint-disable-next-line react/prop-types
const BKSTI = ({ onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentBKSTIIndex, setCurrentBKSTIIndex] = useState(0);
  const images = [bksImg1, bksImg2, bksImg3];
  const images2 = [bks4, bks5];

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousBKSTI = () => {
    setCurrentBKSTIIndex((prevIndex) =>
      prevIndex === 0 ? images2.length - 1 : prevIndex - 1
    );
  };

  const goToNextBKSTI = () => {
    setCurrentBKSTIIndex((prevIndex) =>
      prevIndex === images2.length - 1 ? 0 : prevIndex + 1
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
            Rapat Kerja Pengurus BKSTI Experience
          </h2>

          {/* Description */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              The Badan Kerja Sama Teknik Industri (BKSTI) is an organization established to enhance and improve the quality and relevance of Industrial Engineering higher education in Indonesia. It addresses and seeks solutions to issues in the administration of Industrial Engineering education. The Rapat Kerja Pengurus BKSTI is a significant event that brings together Industrial Engineering professors from across Indonesia to discuss and plan for the future of the discipline.
            </p>
            <p>
            Rapat Kerja BKSTI (Badan Kerja Sama Teknik Industri) is a working meeting organized by the BKSTI, an organization established to enhance and improve the quality and relevance of Industrial Engineering higher education in Indonesia. The meeting brings together key stakeholders, including Industrial Engineering professors, academic leaders, and professionals, to discuss and plan strategies for advancing the field of Industrial Engineering education and research in Indonesia.
            </p>
          </div>

          {/* Image Carousel */}
          <div className="flex justify-center items-center mb-6 relative">
            <button
              onClick={goToPrevious}
              className="absolute left-0 text-white text-2xl z-10 bg-black/50 p-2 rounded-full hover:bg-black/70"
            >
              &larr;
            </button>
            <img
              src={images[currentImageIndex]}
              alt={`BKSTI Image ${currentImageIndex + 1}`}
              className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
            <button
              onClick={goToNext}
              className="absolute right-0 text-white text-2xl z-10 bg-black/50 p-2 rounded-full hover:bg-black/70"
            >
              &rarr;
            </button>
          </div>

          {/* Detailed Description */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              I had the privilege of being part of the organizing committee for the Rapat Kerja Pengurus BKSTI for the 2023-2026 period, held at Wisma Makara UI on February 29, 2024. My contributions to the event included:
            </p>

            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Design Creation</strong>: Developed designs for nametags and backdrops to ensure a professional and cohesive event aesthetic.
              </li>
              <li>
                <strong>Event Documentation</strong>: Documented the event through photos and videos, capturing key moments and creating a recap video using CapCut.
              </li>
              <li>
                <strong>Schedule Preparation</strong>: Prepared the event schedule and coordinated with meeting participants to ensure smooth execution.
              </li>
            </ul>

            <p>
              Participating in the Rapat Kerja Pengurus BKSTI was a rewarding experience that allowed me to develop my organizational, design, and coordination skills. I gained valuable insights into the planning and execution of large-scale academic events and the importance of collaboration in achieving common goals.
            </p>

            <p>
              The event provided a platform for knowledge exchange and networking with leading Industrial Engineering professors from across Indonesia. It was an enriching experience that deepened my understanding of the challenges and opportunities in Industrial Engineering education.
            </p>

            <p>
              I am grateful for the opportunity to contribute to this prestigious event and look forward to applying the skills and knowledge I gained in my future endeavors.
            </p>

          {/* Image Carousel */}
          <div className="flex justify-center items-center mb-6 relative">
            <button
              onClick={goToPreviousBKSTI}
              className="absolute left-0 text-white text-2xl z-10 bg-black/50 p-2 rounded-full hover:bg-black/70"
            >
              &larr;
            </button>
            <img
              src={images2[currentBKSTIIndex]}
              alt={`image2 ${currentBKSTIIndex + 1}`}
              className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
            <button
              onClick={goToNextBKSTI}
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

export default BKSTI;