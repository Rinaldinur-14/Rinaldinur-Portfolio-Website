import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css"; // Swiper core styles
import "swiper/css/navigation"; // Navigation module styles
import "swiper/css/pagination"; // Pagination module styles
import ffiLogo from "src/assets/docum/exp/FFI.png";
import fs from "src/assets/docum/exp/f1.png";
import fd from "src/assets/docum/exp/f2.jpg";
import ft from "src/assets/docum/exp/f3.jpg";
import fe from "src/assets/docum/exp/f4.JPG";

// eslint-disable-next-line react/prop-types
const PTM = ({ onClose }) => {
  const internshipImages = [fd, ft, fe]; // Images for the carousel

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center overflow-hidden"
      onClick={onClose}
    >
      <div
        className="bg-white/10 p-8 rounded-lg w-[80%] h-[90%] mx-4 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl"
        >
          &times;
        </button>
        <div className="space-y-4">
          {/* Title */}
          <h2 className="text-xl md:text-3xl font-bold mb-6 text-white text-center">
            Internship at PT Pertamina Persero as Sea Transportation
            Optimisation Intern
          </h2>

          {/* FFI Logo and Description */}
          <div className="flex flex-col items-center mb-6">
            <img
              src={ffiLogo}
              alt="PT Frisian Flag Indonesia Logo"
              className="w-48 mb-4"
            />
            <p className="text-white text-xs md:text-base text-justify">
              PT Pertamina (Persero) is Indonesia’s state-owned energy company,
              operating across integrated energy sectors including upstream,
              refining, logistics, and marine transportation. During my
              internship, I was assigned to the{" "}
              <strong>Sea Transportation Optimisation</strong> function, which
              focuses on supporting efficient and reliable maritime distribution
              operations for domestic and import fuel transportation.
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
              target="_blank"
              rel="noopener noreferrer"
            >
              View Documentations →
            </a>
          </div>

          {/* Detailed Description */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              From <strong>August 2025 – Present</strong>, I have had the
              opportunity to intern at PT Pertamina (Persero) as a Sea
              Transportation Optimisation Intern. My role involves supporting
              monitoring, reporting, and operational analysis activities related
              to marine transportation performance and vessel operations.
            </p>

            <p>
              During my internship, I contributed to the following activities:
            </p>

            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Critical Supply Monitoring</strong>: Monitored and
                compiled reports on critical depot supply for domestic and
                import vessels to support smooth fuel distribution operations.
              </li>
              <li>
                <strong>Tonnage & Vessel Performance Monitoring</strong>:
                Assisted in tracking tonnage fulfillment and vessel performance
                to support reliable and optimized sea transportation operations.
              </li>
              <li>
                <strong>Port Time Data Analysis</strong>: Processed integrated
                port time data to identify major waiting times during cargo
                loading and unloading operations, followed by creating data
                visualizations for operational analysis.
              </li>
              <li>
                <strong>Business Requirement Alignment</strong>: Conducted
                analysis and alignment between Business Requirement Documents
                (BRD) and system mock-up designs to ensure compatibility between
                business needs and system development.
              </li>
              <li>
                <strong>Voyage Order Monitoring</strong>: Monitored voyage order
                progress to ensure voyage orders were created on time and voyage
                completeness requirements were fulfilled.
              </li>
            </ul>

            <p>
              This internship has provided me with valuable exposure to maritime
              logistics, vessel operation monitoring, and operational data
              analysis within the energy distribution industry. Through this
              experience, I have strengthened my analytical thinking, reporting,
              data visualization, and problem-solving skills while gaining a
              deeper understanding of sea transportation optimization processes.
            </p>

            <p>
              I am grateful for the opportunity to contribute to PT Pertamina
              (Persero) and look forward to applying the knowledge and
              experience gained to future professional and academic endeavors.
            </p>

            {/*Carousel for f2, f3, and f4 */}
            <div className="mt-6">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                navigation={{
                  nextEl: ".swiper-button-next-ffi",
                  prevEl: ".swiper-button-prev-ffi",
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

export default PTM;
