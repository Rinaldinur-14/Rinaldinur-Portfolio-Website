import React from 'react';
import bk_fd from "src/assets/certificates/BK_FD/BK_FD.png";

const BK_FD= ({ onClose }) => {
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
          Bootcamp Kilat Full-Stack Web Developer Certification - harisenin.com 
          </h2>

          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              <strong>Harisenin.com</strong> is an online learning platform that offers specialized training programs to help individuals develop in-demand skills for the modern workforce. Through its <strong>Bokil (Bootcamp Kilat)</strong> events, Harisenin provides intensive, short-term bootcamps focused on practical and hands-on learning in fields such as Full-Stack Web Development, digital marketing, and data analysis. Participants who successfully complete these bootcamps receive a certificate of participation, recognizing their achievement and newly acquired expertise.
            </p>
          </div>

          {/* Certificate Image */}
          <div className="flex flex-col items-center mb-2">
            <img
              src={bk_fd}
              alt="BooKil Full-Stack Developer Certificate"
              className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
            />
          </div>

          <div className = "transition-colors text-xs md:text-base mb-4 text-center text-blue-500">
                <a
                  href="https://drive.google.com/file/d/1BC8UxXryKf8bqi7kK1ukwqaze6VwDURT/view?usp=sharing"
                  target="_blank" rel="noopener noreferrer"
                >
                  View Certificate →
                </a>
         </div>

          {/* Certification Details */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              From <strong>February 10 to February 11, 2025</strong>, I participated in the <strong>BooKil Full-Stack Web Developer</strong> program organized by <strong>Harisenin.com</strong>. This intensive 2-day program provided a comprehensive overview of full-stack development, including front-end and back-end technologies, as well as insights into career development in the field.
            </p>

            <p>
              The program was divided into two days:
            </p>

            <h3 className="text-lg md:text-xl font-bold mt-6 mb-4 text-white">
              Day 1: Full-Stack Developer Overview
            </h3>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li><strong>Introduction to Full-Stack Development</strong></li>
              <li><strong>Basics of JavaScript, HTML, and CSS</strong></li>
              <li><strong>Functions in JavaScript</strong></li>
              <li><strong>Importance of Testing and Deployment</strong></li>
              <li><strong>Benefits of UI Frameworks</strong></li>
              <li><strong>AI and Full-Stack Developer Career Trends</strong></li>
              <li><strong>Talkshow: Pursuing a Career as a Full-Stack Developer</strong></li>
            </ul>

            <h3 className="text-lg md:text-xl font-bold mt-6 mb-4 text-white">
              Day 2: Practical Session
            </h3>
            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li><strong>Step-by-Step Guide to Creating a Landing Page</strong></li>
              <li><strong>Hands-On Practice with Front-End Development</strong></li>
            </ul>

            <p>
              This certification reflects my foundational knowledge in full-stack development and my ability to apply these skills in real-world scenarios. Additionally, the program provided valuable insights into career development and the importance of soft skills such as creativity, critical thinking, and collaboration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BK_FD;