import React, { useEffect, useState } from 'react';
import ls from "/src/assets/docum/organz/l1.png";
import ld from "/src/assets/docum/organz/l2.jpeg";
import is from "/src/assets/docum/organz/i1.jpeg";
import id from "/src/assets/docum/organz/i2.jpeg";

const Accreditation = ({ onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const lamTeknikImages = [ls, ld]; // Images for LAM TEKNIK
  const iabeeImages = [is, id]; // Images for IABEE

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const goToPrevious = (images) => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (images) => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
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
            Accreditation Preparation Experience
          </h2>

          {/* Description */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              I had the privilege of contributing to the accreditation preparation processes for the Industrial Engineering program at Gunadarma University under two prestigious accreditation bodies: <strong>LAM TEKNIK</strong> and <strong>IABEE</strong>. These experiences allowed me to develop my organizational, technical, and leadership skills while ensuring the program met the highest standards of quality and excellence.
            </p>
          </div>

          {/* LAM TEKNIK Section */}
          <h3 className="text-lg md:text-2xl font-bold mt-8 mb-4 text-white text-center">
            LAM TEKNIK Accreditation (June 2023)
          </h3>

          {/* LAM TEKNIK Carousel */}
          <div className="flex justify-center items-center mb-6 relative">
            <button
              onClick={() => goToPrevious(lamTeknikImages)}
              className="absolute left-0 text-white text-2xl z-10 bg-black/50 p-2 rounded-full hover:bg-black/70"
            >
              &larr;
            </button>
            <img
              src={lamTeknikImages[currentImageIndex]}
              alt={`LAM TEKNIK Image ${currentImageIndex + 1}`}
              className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
            <button
              onClick={() => goToNext(lamTeknikImages)}
              className="absolute right-0 text-white text-2xl z-10 bg-black/50 p-2 rounded-full hover:bg-black/70"
            >
              &rarr;
            </button>
          </div>

          <div className = "transition-colors text-xs md:text-base mt-4 mb-4 text-center text-blue-500">
                    <a
                      href="http://career.gunadarma.ac.id/sites/default/files/sertifikat_akreditasi_s1_teknik_industri_2023-2028.pdf"
                      target="_blank" rel="noopener noreferrer"
                    >
                      View Certificate →
                    </a>
            </div>

          {/* LAM TEKNIK Description */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              As an <strong>Assistant</strong> for the LAM TEKNIK accreditation preparation, I contributed to the following activities:
            </p>

            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>VR Training</strong>: Participated in virtual reality training activities to familiarize myself with the accreditation process.
              </li>
              <li>
                <strong>Document Preparation</strong>: Prepared necessary documents and set up facilities for the accreditation assessment.
              </li>
              <li>
                <strong>Facility Demonstration</strong>: Answered the assessor's questions and demonstrated the use of the facilities during the assessment.
              </li>
            </ul>

            <p>
              The program successfully achieved an <strong>UNGGUL</strong> (Excellent) accreditation rating, valid from August 21, 2023, to August 20, 2028.
            </p>
          </div>

          {/* IABEE Section */}
          <h3 className="text-lg md:text-2xl font-bold mt-8 mb-4 text-white text-center">
            IABEE Accreditation (November 2024)
          </h3>

          {/* IABEE Carousel */}
          <div className="flex justify-center items-center mb-6 relative">
            <button
              onClick={() => goToPrevious(iabeeImages)}
              className="absolute left-0 text-white text-2xl z-10 bg-black/50 p-2 rounded-full hover:bg-black/70"
            >
              &larr;
            </button>
            <img
              src={iabeeImages[currentImageIndex]}
              alt={`IABEE Image ${currentImageIndex + 1}`}
              className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
            <button
              onClick={() => goToNext(iabeeImages)}
              className="absolute right-0 text-white text-2xl z-10 bg-black/50 p-2 rounded-full hover:bg-black/70"
            >
              &rarr;
            </button>

          </div>

          {/* IABEE Description */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              As the <strong>Head of Assistant</strong> for the IABEE accreditation preparation, I contributed the following activities:
            </p>

            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>EHS Training</strong>: Attended Environment, Health, and Safety (EHS) training activities to ensure compliance with IABEE standards.
              </li>
              <li>
                <strong>Team Coordination</strong>: Coordinated assistants to prepare necessary documents and set up facilities for the accreditation assessment.
              </li>
              <li>
                <strong>Facility Demonstration</strong>: Answered the assessor's questions and demonstrated the use of the facilities during the assessment.
              </li>
            </ul>

            <p>
              The IABEE accreditation process is ongoing, and I am proud to contribute to ensuring the program meets international standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accreditation;