import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css'; // Swiper core styles
import 'swiper/css/navigation'; // Navigation module styles
import 'swiper/css/pagination'; // Pagination module styles
import ffiLogo from "src/assets/docum/exp/FFI.png";
import fs from "src/assets/docum/exp/f1.png";
import fd from "src/assets/docum/exp/f2.jpg";
import ft from "src/assets/docum/exp/f3.jpg";
import fe from "src/assets/docum/exp/f4.JPG";

// eslint-disable-next-line react/prop-types
const FFI = ({ onClose }) => {
  const internshipImages = [fd, ft, fe]; // Images for the carousel

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center overflow-hidden" onClick={onClose}>
      <div className="bg-white/10 p-8 rounded-lg w-[80%] h-[90%] mx-4 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl"
        >
          &times;
        </button>
        <div className="space-y-4">
          {/* Title */}
          <h2 className="text-xl md:text-3xl font-bold mb-6 text-white text-center">
            Internship at PT Frisian Flag Indonesia (FFI) as Production Intern
          </h2>

          {/* FFI Logo and Description */}
          <div className="flex flex-col items-center mb-6">
            <img
              src={ffiLogo}
              alt="PT Frisian Flag Indonesia Logo"
              className="w-48 mb-4"
            />
            <p className="text-white text-xs md:text-base text-justify">
              PT Frisian Flag Indonesia (FFI) is a leading dairy company in Indonesia, part of the global FrieslandCampina network. During my internship, I was based at their <strong>Pasar Rebo</strong> facility in East Jakarta, which specializes in the production of powdered milk and other dairy products.
            </p>
          </div>

          {/* Internship Certificate (f1) */}
          <div className="flex justify-center mb-4">
            <img
              src={fs}
              alt="Internship Certificate"
              className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>

          {/* Documentation Link */}
          <div className="transition-colors text-xs md:text-base mt-2 mb-4 text-center text-blue-500">
            <a
              href="https://drive.google.com/file/d/1jx70QEhduogbxFOawEmyAkva1Ri0C5-L/view?usp=sharing"
              target="_blank" rel="noopener noreferrer"
            >
              View Documentations →
            </a>
          </div>

          {/* Detailed Description */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              From <strong>March 20, 2024 - May 20, 2024</strong>, I had the opportunity to intern at PT Frisian Flag Indonesia as a <strong>Production Intern</strong> in the <strong>Powder Spray Dryer (PSD)</strong> department. My role involved assisting the department supervisor in various tasks to improve operational efficiency and standardization.
            </p>

            <p>
              During my internship, I contributed to the following activities:
            </p>

            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Checksheet Creation</strong>: Developed and implemented checksheets for clearance activities to ensure proper documentation and compliance with safety standards.
              </li>
              <li>
                <strong>Root Cause Analysis (RCA)</strong>: Assisted in identifying root causes of issues during clearance activities and proposed solutions to prevent recurrence.
              </li>
              <li>
                <strong>Standardization Improvement</strong>: Supported efforts to improve standardization processes within the PSD department, enhancing operational efficiency.
              </li>
            </ul>

            <p>
              This internship provided me with valuable hands-on experience in a fast-paced production environment. I gained insights into the dairy manufacturing process, quality control, and the importance of standardization in industrial operations. Additionally, I developed skills in problem-solving, teamwork, and documentation, which are essential for a career in industrial engineering.
            </p>

            <p>
              I am grateful for the opportunity to contribute to PT Frisian Flag Indonesia and look forward to applying the knowledge and skills I gained in my future endeavors.
            </p>

            {/* Carousel for f2, f3, and f4 */}
            <div className="mt-6">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                navigation={{
                  nextEl: '.swiper-button-next-ffi',
                  prevEl: '.swiper-button-prev-ffi',
                }}
                pagination={{ clickable: true }}
                className="relative"
              >
              {/* Navigation Arrows */}
              <div className="swiper-button-prev-ffi absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10 bg-black/50 p-2 rounded-full hover:bg-black/70">
                &larr;
              </div>
              <div className="swiper-button-next-ffi absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10 bg-black/50 p-2 rounded-full hover:bg-black/70">
                &rarr;
              </div>
                {internshipImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`Internship Image ${index + 1}`}
                      className="w-full h-96 rounded-lg shadow-lg object-contain mx-auto"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FFI;