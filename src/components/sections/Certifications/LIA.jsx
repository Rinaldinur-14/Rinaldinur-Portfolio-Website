import 'react';
import liaa from "src/assets/certificates/LIA/liaa.jpg";
import liab from "src/assets/certificates/LIA/liab.jpg";
import liac from "src/assets/certificates/LIA/liac.jpg";
import liad from "src/assets/certificates/LIA/liad.jpg";
import liae from "src/assets/certificates/LIA/liae.jpg";

// eslint-disable-next-line react/prop-types
const LIA = ({ onClose }) => {
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
            LIA English Certificates
          </h2>

          {/* Introduction */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              <strong>LIA (Lembaga Bahasa LIA)</strong> is a prestigious language institution in Indonesia that offers a wide range of English courses for both adults and teens at various proficiency levels, including Elementary, Pre-Intermediate, Intermediate, and High-Intermediate. Through its structured and comprehensive programs, such as &quot;English for Adults&quot; and &quot;English for Teens,&quot; LIA equips learners with the skills needed to achieve fluency and confidence in English. Participants who successfully complete these courses receive a certificate of achievement, recognizing their dedication and progress in mastering the language.
            </p>
          </div>
          <p className="text-white text-xs md:text-base text-justify">
            From <strong>2014 to 2018</strong>, I completed multiple English language courses at <strong>Lembaga Bahasa LIA</strong>, a renowned language institution in Indonesia. These courses were designed to enhance my English proficiency across various levels, from elementary to high-intermediate, and focused on developing listening, speaking, reading, and writing skills.
          </p>

          {/* Certificate 1: English for Teens - Elementary Level */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              English for Teens: Elementary Level
            </h3>
            <div className="flex flex-col items-center mb-2">
              <img
                src={liaa}
                alt="English for Teens Elementary Level Certificate"
                className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
              />
            </div>
            <div className = "transition-colors text-xs md:text-base mb-4 text-center text-blue-500">
                <a
                  href="https://drive.google.com/file/d/1BTD23-BjtJ-U8AtpZkp1hNiq8NaJdBnC/view?usp=sharing"
                  target="_blank" rel="noopener noreferrer"
                >
                  View Certificate →
                </a>
         </div>
            <div className="space-y-4 text-white text-xs md:text-base text-justify">
              <p>
                In <strong>2014</strong>, I completed the <strong>English for Teens: Elementary Level</strong> course at LIA. This course focused on building foundational English skills, including vocabulary, grammar, and pronunciation, while also improving listening, speaking, reading, and writing abilities.
              </p>
            </div>
          </div>

          {/* Certificate 2: English for Teens - Pre-Intermediate Level */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              English for Teens: Pre-Intermediate Level
            </h3>
            <div className="flex flex-col items-center mb-2">
              <img
                src={liab}
                alt="English for Teens Pre-Intermediate Level Certificate"
                className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
              />
            </div>
            <div className = "transition-colors text-xs md:text-base mb-4 text-center text-blue-500">
                <a
                  href="https://drive.google.com/file/d/11ddh8ZNyV3dNkcdyNlOIRzUeBgqBZpR2/view?usp=sharing"
                  target="_blank" rel="noopener noreferrer"
                >
                  View Certificate →
                </a>
         </div>
            <div className="space-y-4 text-white text-xs md:text-base text-justify">
              <p>
                In <strong>2015</strong>, I completed the <strong>English for Teens: Pre-Intermediate Level</strong> course at LIA. This course further developed my English skills, with a focus on critical thinking, creative expression, and project-based learning.
              </p>
            </div>
          </div>

          {/* Certificate 3: English for Teens - Intermediate Level */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              English for Teens: Intermediate Level
            </h3>
            <div className="flex flex-col items-center mb-2">
              <img
                src={liac}
                alt="English for Teens Intermediate Level Certificate"
                className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
              />
            </div>
            <div className = "transition-colors text-xs md:text-base mb-4 text-center text-blue-500">
                <a
                  href="https://drive.google.com/file/d/1_63-DXnuevW02R-ZkzUmlaJZOWo4XNJV/view?usp=sharing"
                  target="_blank" rel="noopener noreferrer"
                >
                  View Certificate →
                </a>
         </div>
            <div className="space-y-4 text-white text-xs md:text-base text-justify">
              <p>
                In <strong>2016</strong>, I completed the <strong>English for Teens: Intermediate Level</strong> course at LIA. This course emphasized advanced grammar, vocabulary, and pronunciation, while also fostering a love for reading and writing through engaging materials.
              </p>
            </div>
          </div>

          {/* Certificate 4: English for Adults - Intermediate Level */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              English for Adults: Intermediate Level
            </h3>
            <div className="flex flex-col items-center mb-2">
              <img
                src={liad}
                alt="English for Adults Intermediate Level Certificate"
                className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
              />
            </div>
            <div className = "transition-colors text-xs md:text-base mb-4 text-center text-blue-500">
                <a
                  href="https://drive.google.com/file/d/16DSiMfMHKrCHluBwm7hhUIYjFptpkpJK/view?usp=sharing"
                  target="_blank" rel="noopener noreferrer"
                >
                  View Certificate →
                </a>
         </div>
            <div className="space-y-4 text-white text-xs md:text-base text-justify">
              <p>
                In <strong>2017</strong>, I completed the <strong>English for Adults: Intermediate Level</strong> course at LIA. This course focused on enhancing my English proficiency for professional and academic contexts, with an emphasis on critical thinking and effective communication.
              </p>
            </div>
          </div>

          {/* Certificate 5: English for Adults - High-Intermediate Level */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-2xl font-bold mt-6 mb-4 text-white text-center">
              English for Adults: High-Intermediate Level
            </h3>
            <div className="flex flex-col items-center mb-2">
              <img
                src={liae}
                alt="English for Adults High-Intermediate Level Certificate"
                className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
              />
            </div>
            <div className = "transition-colors text-xs md:text-base mb-4 text-center text-blue-500">
                <a
                  href="https://drive.google.com/file/d/1Zx_pSV2ao46P_3A4J5dcDI70cBIHIVKq/view?usp=sharing"
                  target="_blank" rel="noopener noreferrer"
                >
                  View Certificate →
                </a>
         </div>
            <div className="space-y-4 text-white text-xs md:text-base text-justify">
              <p>
                In <strong>2018</strong>, I completed the <strong>English for Adults: High-Intermediate Level</strong> course at LIA. This course further refined my English skills, with a focus on advanced grammar, vocabulary, and professional communication.
              </p>
            </div>
          </div>

          {/* Closing Statement */}
          <p className="text-white text-xs md:text-base text-justify">
            These certifications reflect my dedication to improving my English proficiency over the years. The skills I gained have been invaluable in both academic and professional settings, enabling me to communicate effectively and confidently in English.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LIA;