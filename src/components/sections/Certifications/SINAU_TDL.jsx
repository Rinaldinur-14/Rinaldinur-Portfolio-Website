import 'react';
import tdl from "src/assets/certificates/SINAU_TDL/tdl.png";

// eslint-disable-next-line react/prop-types
const SINAU_TDL = ({ onClose }) => {
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
            Building a To-Do List App for Efficient Time Management Webinar - Sinau Koding
          </h2>

          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              <strong>Sinau Koding</strong> is an educational platform that offers training and certification programs to help individuals develop technical skills in coding and software development. Through its webinars and courses, such as &quot;Buat Aplikasi To-Do-List untuk Manajemen Waktu yang Lebih Efisien,&quot; Sinau Koding provides practical, hands-on learning experiences. Participants who successfully complete these programs receive a certificate of participation, recognizing their achievement and newly acquired skills.
            </p>
          </div>

          {/* Certificate Image */}
          <div className="flex flex-col items-center mb-2">
            <img
              src={tdl}
              alt="Webinar Sinau Coding Certificate"
              className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4"
            />
          </div>

          <div className = "transition-colors text-xs md:text-base mb-4 text-center text-blue-500">
                <a
                  href="https://drive.google.com/file/d/1IO5WHX4Rwl6hIUzrqCnoZuZk-qzoe2D3/view?usp=drive_link"
                  target="_blank" rel="noopener noreferrer"
                >
                  View Certificate →
                </a>
         </div>

          {/* Certification Details */}
          <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
              On <strong>February 11, 2025</strong>, I participated in a webinar hosted by <strong>Sinau Koding Academy</strong> titled <strong>&quot;Buat Aplikasi To-Do-List untuk Manajemen Waktu yang Lebih Efisien&quot;</strong> (Building a To-Do List App for More Efficient Time Management). This webinar provided valuable insights into time management and hands-on experience in building a simple to-do list application using <strong>HTML, CSS, and JavaScript</strong>.
            </p>

            <p>
              The webinar covered the following topics:
            </p>

            <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
              <li><strong>Secrets to Becoming a Successful Programmer</strong></li>
              <li><strong>Using To-Do List Applications in Daily Life</strong></li>
              <li><strong>Practical Session: Building a Simple To-Do List App with HTML, CSS, and JavaScript</strong></li>
            </ul>

            <p>
              This certificate reflects my participation in the webinar and my ability to apply basic web development skills to create practical applications for time management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SINAU_TDL;