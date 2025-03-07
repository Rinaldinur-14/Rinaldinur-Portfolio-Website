import React, { useEffect, useState } from 'react';
import ugLogo from "/src/assets/docum/edu/UG.PNG";
import us from "/src/assets/docum/edu/u1.PNG";
import ud from "/src/assets/docum/edu/u2.PNG";
import ut from "/src/assets/docum/edu/u3.JPEG";
import ue from "/src/assets/docum/edu/u4.JPEG";
import ul from "/src/assets/docum/edu/u5.JPEG";
import un from "/src/assets/docum/edu/u6.JPG";
import uu from "/src/assets/docum/edu/u7.JPG";
import ua from "/src/assets/docum/edu/u8.JPG";
import da from "/src/assets/docum/edu/da.JPG"
import db from "/src/assets/docum/edu/db.JPG"
import dc from "/src/assets/docum/edu/dc.JPG"

const Education = ({ onClose }) => {
  const [currentAccreditationIndex, setCurrentAccreditationIndex] = useState(0);
  const [currentLSPIndex, setCurrentLSPIndex] = useState(0);
  const [currentGraduationIndex, setCurrentGraduationIndex] = useState(0);
  const lspImages = [ue, ul]; // LSP documentation
  const graduationImages = [un, dc, uu, ua, da, db]; // Graduation documentation

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const goToPreviousLSP = () => {
    setCurrentLSPIndex((prevIndex) =>
      prevIndex === 0 ? lspImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextLSP = () => {
    setCurrentLSPIndex((prevIndex) =>
      prevIndex === lspImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousGraduation = () => {
    setCurrentGraduationIndex((prevIndex) =>
      prevIndex === 0 ? graduationImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextGraduation = () => {
    setCurrentGraduationIndex((prevIndex) =>
      prevIndex === graduationImages.length - 1 ? 0 : prevIndex + 1
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
            Education and Achievements
          </h2>

          {/* Gunadarma University Logo and Accreditation */}
          <div className="flex flex-col items-center mb-6">
            <div className="flex justify-center  mb-4">
              <img
                src={ugLogo}
                alt="Gunadarma University Logo"
                className="w-48 rounded-lg shadow-lg object-contain"
              />
            </div>
            <p className="text-white text-xs md:text-base text-justify">
              <strong>Gunadarma University</strong> is one of the leading private universities in Indonesia, known for its focus on technology, innovation, and practical education. Established in 1981, the university has consistently produced graduates who excel in various fields, particularly in engineering and information technology.
            </p>
            <p className="text-white text-xs md:text-base text-justify mt-4">
              The Industrial Engineering program at Gunadarma University is accredited with an <strong>"Unggul" (Excellent)</strong> rating by the <strong>Lembaga Akreditasi Mandiri Program Studi Keteknikan (LAM Teknik)</strong>, as stated in the accreditation certificate (No. 0246/SK/LAM Teknik/AS/VIII/2023). This accreditation is valid from <strong>August 21, 2023, to August 20, 2028</strong>.
            </p>
            <div className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mt-5">
            <img
                src={us}
                alt="Industrial Engineering Accreditation"
                className="w-full max-w-md rounded-lg shadow-lg object-contain"
              />
            </div>  
            <div className = "transition-colors text-xs md:text-base mt-4  text-center text-blue-500">
                    <a
                      href="http://career.gunadarma.ac.id/sites/default/files/sertifikat_akreditasi_s1_teknik_industri_2023-2028.pdf"
                      target="_blank" rel="noopener noreferrer"
                    >
                      View Certificate →
                    </a>
            </div>

          </div>

          <p className="text-white text-xs md:text-base text-justify mt-4">
              I pursued my <strong>Bachelor of Industrial Engineering</strong> at Gunadarma University from <strong>September 2020 to September 2024</strong>, achieving a GPA of <strong>3.72/4.00</strong>.
              I have gained knowledge in key industrial engineering concepts, including supply chaint management (SCM), logistics, production planning, material requirements planning (MRP), ergonomics, statistical analysis, EHS (Environment, Health, and Safety), quality control, quality assurance etc.
              During my studies, I was honored to receive the <strong>PT Adaro Foundation Indonesia Scholarship</strong>, which supported my academic journey.
            </p>


          {/* Scholarship (u2) */}
          <div className="flex justify-center mb-4">
            <img
              src={ud}
              alt="Scholarship Certificate"
              className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
          <div className = "transition-colors text-xs md:text-base mt-4 mb-4 text-center text-blue-500">
                    <a
                      href="https://drive.google.com/file/d/1DyvIVWrfw1b20JoPQP6hKB6iZWciohb3/view?usp=sharing"
                      target="_blank" rel="noopener noreferrer"
                    >
                      View Document →
                    </a>
            </div>
          
          {/* Beyond Education: Organizations and Projects */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              Beyond my academic pursuits, I actively participated in organizations, in projects, and assisted lecturers as an assistant instructor that enriched my skills and experiences. These activities allowed me to apply my knowledge in real-world scenarios and develop leadership, teamwork, and problem-solving abilities.
            </p>

            {/* ProModel Workshop Instructor (u3) */}
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white">
              Instructor for ProModel Workshop
            </h3>
            <p>
              In <strong>June 2024</strong>, I served as an instructor for a ProModel Workshop, where I:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>Provided instruction on <strong>ProModel 7.5</strong> and <strong>ProModel 2016</strong> software to over <strong>100 participants</strong>.</li>
              <li>Covered both theoretical material and provided hands-on tutoring to ensure participants' understanding.</li>
            </ul>
            <div className="flex justify-center mb-4">
              <img
                src={ut}
                alt="ProModel Workshop Documentation"
                className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
            </div>

            {/* Assistant Instructor for LSP (u4 & u5) */}
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white">
              Assistant Instructor for Lembaga Sertifikasi Profesi (LSP)
            </h3>
            <p>
              In <strong>September 2024</strong>, I served as an Assistant Instructor for the <strong>Lembaga Sertifikasi Profesi (LSP)</strong>, where I:
            </p>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>Provided instruction on <strong>Manufacturing System Quality Control</strong> to over <strong>60 participants</strong>.</li>
              <li>Covered both theoretical material and provided tutoring to ensure participants' success.</li>
            </ul>
            <div className="flex justify-center mb-4 relative">
              <button
                onClick={goToPreviousLSP}
                className="absolute left-0 text-white text-2xl z-10 bg-black/50 p-2 rounded-full hover:bg-black/70"
              >
                &larr;
              </button>
              <img
                src={lspImages[currentLSPIndex]}
                alt={`LSP Documentation ${currentLSPIndex + 1}`}
                className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
              <button
                onClick={goToNextLSP}
                className="absolute right-0 text-white text-2xl z-10 bg-black/50 p-2 rounded-full hover:bg-black/70"
              >
                &rarr;
              </button>
            </div>

            {/* Graduation and Gratitude (u6 - u8) */}
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4  text-white">
              Graduation and Gratitude
            </h3>
            <p>
              I successfully completed my <strong>sarjana's thesis</strong> and graduated in <strong>September 2024</strong>. This achievement would not have been possible without the unwavering support of my family, friends, and mentors. I am deeply grateful for their encouragement and guidance throughout my academic journey.
            </p>
            <div className="flex justify-center mb-4 relative">
              <button
                onClick={goToPreviousGraduation}
                className="absolute left-0 text-white text-2xl z-10 bg-black/50 p-2 rounded-full hover:bg-black/70"
              >
                &larr;
              </button>
              <img
                src={graduationImages[currentGraduationIndex]}
                alt={`Graduation Documentation ${currentGraduationIndex + 1}`}
                className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
              <button
                onClick={goToNextGraduation}
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

export default Education;