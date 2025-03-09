import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css'; // Swiper core styles
import 'swiper/css/navigation'; // Navigation module styles
import 'swiper/css/pagination'; // Pagination module styles
import fIES from "src/assets/docum/organz/5IES.png";
import sIES from "src/assets/docum/organz/6IES.png";
import dsies from "src/assets/docum/organz/d1ies.jpeg";
import ddies from "src/assets/docum/organz/d2ies.jpeg";

// eslint-disable-next-line react/prop-types
const IES = ({ onClose }) => {
  const images = [dsies, ddies]; // Images for the carousel

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
          {/* Certificate Title */}
          <h2 className="text-xl md:text-3xl font-bold mb-6 text-white text-center">
            Industrial Engineering Synergy (IES) Organizing Committee
          </h2>

          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              The Industrial Engineering Synergy (IES) is an annual event organized by Gunadarma University, aimed at fostering collaboration and knowledge sharing among industrial engineering students and professionals. The event features public lectures on cutting-edge topics relevant to the industrial engineering field.
            </p>

            <p>
              I had the privilege of participating in the 5th and 6th editions of the Industrial Engineering Synergy (IES) at Gunadarma University. These events were instrumental in enhancing my understanding of industrial engineering principles and their applications in real-world scenarios.
            </p>
          </div>

          {/* 5IES */}
          <div className="mb-6 space-x-4">
            <div className="flex justify-center mt-5">
              <img
                src={fIES}
                alt="5th Industrial Engineering Synergy Certificate"
                className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
            </div>

            <div className="transition-colors text-xs md:text-base mt-4 mb-4 text-center text-blue-500">
              <a
                href="https://drive.google.com/file/d/1lxNDBQJ7XEf07PDqiwMaZMXK2znkDLzL/view?usp=drive_link"
                target="_blank" rel="noopener noreferrer"
              >
                View Certificate →
              </a>
            </div>

            <div className="space-y-4 text-white text-xs md:text-base text-justify">
              <p>
                During the <strong>5th IES</strong> in May 2023, I served as a member of the Consumption Committee. My responsibilities included:
              </p>

              <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
                <li>
                  <strong>Vendor Coordination</strong>: Sourcing and negotiating with vendors for food and beverages.
                </li>
                <li>
                  <strong>Logistics Management</strong>: Preparing and distributing food and beverages during the event.
                </li>
              </ul>
            </div>
          </div>

          {/* 6IES */}
          <div className="mb-6 space-x-4">
            <div className="flex justify-center mt-5">
              <img
                src={sIES}
                alt="6th Industrial Engineering Synergy Certificate"
                className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
            </div>

            <div className="transition-colors text-xs md:text-base mt-4 mb-4 text-center text-blue-500">
              <a
                href="https://drive.google.com/file/d/1ZFCMX4nbyFgRvEziHSuhUfvGQJiAno8q/view?usp=drive_link"
                target="_blank" rel="noopener noreferrer"
              >
                View Certificate →
              </a>
            </div>

            <div className="space-y-4 text-white text-xs md:text-base text-justify">
              <p>
                In the <strong>6th IES</strong> in August 2024, I took on the role of Head of the Public Relations Committee. My contributions included:
              </p>

              <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
                <li>
                  <strong>Design Creation</strong>: Developing designs for posters, virtual backgrounds, and certificates.
                </li>
                <li>
                  <strong>Media Outreach</strong>: Collaborating with a media partner to promote the event.
                </li>
              </ul>
            </div>
          </div>

          {/* Certificate Description */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              These experiences have significantly enhanced my organizational, communication, and leadership skills. I gained hands-on experience in event management, vendor coordination, and public relations, which are invaluable in the field of industrial engineering.
            </p>

            <p>
              The topics covered during these events, such as &quot;International Organization for Standardization (ISO)&quot; and &quot;Green and Lean Manufacturing Toward Making Indonesia 4.0,&quot; provided deep insights into quality management and sustainable manufacturing practices. These themes are crucial in the context of Industry 4.0, where efficiency and sustainability are paramount.
            </p>

            <p>
              I am grateful for the opportunity to contribute to these prestigious events and look forward to applying the skills and knowledge I gained in my future endeavors.
            </p>
          </div>

          {/* Image Carousel */}
          <div className="mt-6">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next-ies',
                prevEl: '.swiper-button-prev-ies',
              }}
              pagination={{ clickable: true }}
              className="relative"
            >
            {/* Navigation Arrows */}
            <div className="swiper-button-prev-ies absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10 bg-black/50 p-2 rounded-full hover:bg-black/70">
              &larr;
            </div>
            <div className="swiper-button-next-ies absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10 bg-black/50 p-2 rounded-full hover:bg-black/70">
              &rarr;
            </div>
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`IES Image ${index + 1}`}
                    className="w-full h-96 rounded-lg shadow-lg object-contain mx-auto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
        </div>
      </div>
    </div>
  );
};

export default IES;