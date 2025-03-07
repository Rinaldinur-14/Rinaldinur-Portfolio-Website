import React, { useEffect, useState } from 'react';
import es from "src/assets/docum/char/e1.png";
import ed from "src/assets/docum/char/e2.png";
import et from "src/assets/docum/char/e3.png";

const EChar = ({ onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const charityImages = [es, ed, et]; // Images for the carousel (ed and et)

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? charityImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === charityImages.length - 1 ? 0 : prevIndex + 1
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
            ELITE Charity Experience
          </h2>

          {/* Description */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              ELITE Charity is a social initiative and annual event organized by the Laboratory Assistants of Elementary Laboratory of Industrial Engineering at Gunadarma University. The program aims to give back to the community through acts of kindness, such as donating to orphanages and underprivileged communities. The theme of the event is <strong>"The Smallest Act of Kindness is Worth More Than The Greatest Intention"</strong>, emphasizing the importance of taking action to help others.
            </p>
          </div>

          {/* Carousel for ed and et */}
          <div className="flex justify-center items-center mb-6 relative">
            <button
              onClick={goToPrevious}
              className="absolute left-0 text-white text-2xl z-10 bg-black/50 p-2 rounded-full hover:bg-black/70"
            >
              &larr;
            </button>
            <img
              src={charityImages[currentImageIndex]}
              alt={`ELITE Charity Image ${currentImageIndex + 1}`}
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
              I had the honor of serving as the <strong>Fundraising Coordinator</strong> for the ELITE Charity event held on <strong>August 14, 2024</strong>. My responsibilities included:
            </p>

            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li>
                <strong>Fundraising Strategy</strong>: Planned and executed fundraising strategies to collect donations from assistants across three regions.
              </li>
              <li>
                <strong>Beneficiary Survey</strong>: Surveyed orphanages and underprivileged communities to identify suitable beneficiaries for the donations.
              </li>
              <li>
                <strong>Donor Engagement</strong>: Delivered presentations to potential donors to encourage participation and contributions.
              </li>
              <li>
                <strong>Event Coordination</strong>: Coordinated and supervised over 40 assistants during the charity event to ensure smooth execution.
              </li>
            </ul>

            <p>
              The event was successfully held, with proceeds used to purchase essential groceries(<strong>sembako</strong>) for the residents of <strong>Griya Yatim dan Dhuafa Cibubur</strong>, an orphanage in East Jakarta. The donations were handed over directly to the caretakers of the orphanage.
            </p>

            <p>
              Participating in ELITE Charity was a deeply rewarding experience. It reinforced the importance of giving back to the community and working together to make a positive impact. I am proud to have contributed to this meaningful initiative and look forward to future opportunities to support similar causes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EChar;