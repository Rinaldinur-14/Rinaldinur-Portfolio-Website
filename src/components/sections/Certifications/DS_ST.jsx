import 'react';
import dss from "src/assets/certificates/DS_ST/ds1.png";
import dsd from "src/assets/certificates/DS_ST/ds2.png";
import dst from "src/assets/certificates/DS_ST/ds3.png";
import dse from "src/assets/certificates/DS_ST/ds4.png";
import dsf from "src/assets/certificates/DS_ST/ds5.png";
import ds6 from "src/assets/certificates/DS_ST/ds6.png"; // Import the new certificate image

// eslint-disable-next-line react/prop-types
const DS_ST = ({ onClose }) => {
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
            Certificates of Attendance Skola Talk - Digital Skola
          </h2>

          {/* Introduction */}
          <p className="text-white text-xs md:text-base text-justify">
            In February and March 2025, I attended several online workshops hosted by <strong>DigitalSkola</strong>, a platform dedicated to providing free, high-quality learning opportunities in technology and digital skills. These workshops allowed me to expand my knowledge in various areas, from cloud computing to data analytics, and I received certificates of attendance for each event.
          </p>

          {/* Certificate 1: Management Server AWS */}
          <div className="flex flex-col items-center mb-2 transition-transform duration-300 ease-in-out transform hover:scale-105">
            <img
              src={dss}
              alt="Management Server AWS Certificate"
              className="w-full max-w-md rounded-lg shadow-lg object-contain mb-4"
            />
          </div>
            
         <div className = "transition-colors text-xs md:text-base mb-4 text-center text-blue-500">
                <a
                  href="https://cdn.digitalskola.co.id/certificates/ST/XXX/342-ST-XXX1-II-2025.png"
                  target="_blank" rel="noopener noreferrer"
                >
                  View Certificate →
                </a>
         </div>
         <div className="text-white text-xs md:text-base text-justify">
            <p >
              On <strong>February 21, 2025</strong>, I attended <strong>Skola Talk #89: Management Server AWS</strong>. This workshop provided an in-depth look at Amazon Web Services (AWS), the world&apos;s most popular cloud computing platform. Topics included designing scalable cloud architectures, key compute services like EC2, and hands-on demonstrations of deploying web applications using AWS services.
            </p>
          </div>

          {/* Certificate 2: QA Engineering */}
          <div className="flex flex-col items-center mb-2 transition-transform duration-300 ease-in-out transform hover:scale-105">
            <img
              src={dsd}
              alt="QA Engineering Certificate"
              className="w-full max-w-md rounded-lg shadow-lg object-contain mb-4"
            />
          </div>

          <div className = "transition-colors text-xs md:text-base mb-4 text-center text-blue-500">
                <a
                  href="https://cdn.digitalskola.co.id/certificates/ST/XXX/499-ST-XXX1-II-2025.png"
                  target="_blank" rel="noopener noreferrer"
                >
                  View Certificate →
                </a>
         </div>

        <div className="text-white text-xs md:text-base text-justify">
            <p>
              On <strong>February 25, 2025</strong>, I participated in <strong>Skola Talk #90: QA Engineering</strong>. This session focused on API testing, a critical skill in ensuring seamless digital experiences. I learned about setting up testing environments, writing test cases, and best practices for efficient and professional API testing using tools like Postman.
            </p>
          </div>

          {/* Certificate 3: Excel in the Workplace */}
          <div className="flex flex-col items-center mb-2 transition-transform duration-300 ease-in-out transform hover:scale-105">
            <img
              src={dst}
              alt="Excel in the Workplace Certificate"
              className="w-full max-w-md rounded-lg shadow-lg object-contain mb-4"
            />
          </div>

          <div className = "transition-colors text-xs md:text-base mb-4 text-center text-blue-500">
                <a
                  href="https://cdn.digitalskola.co.id/certificates/ST/XXX/501-ST-XXX1-II-2025.png"
                  target="_blank" rel="noopener noreferrer"
                >
                  View Certificate →
                </a>
         </div>
         <div className="text-white text-xs md:text-base text-justify">
            <p>
              Also on <strong>February 25, 2025</strong>, I attended <strong>Skola Talk #91: Excel in the Workplace</strong>. This workshop highlighted the importance of Microsoft Excel in professional settings. I gained valuable skills in data entry, formatting, and understanding career opportunities that require Excel proficiency.
            </p>
          </div>

          {/* Certificate 4: Digital Writing Camp */}
          <div className="flex flex-col items-center mb-2 transition-transform duration-300 ease-in-out transform hover:scale-105">
            <img
              src={dse}
              alt="Digital Writing Camp Certificate"
              className="w-full max-w-md rounded-lg shadow-lg object-contain mb-4"
            />
            </div>

          <div className = "transition-colors text-xs md:text-base mb-4 text-center text-blue-500">
                <a
                  href="https://cdn.digitalskola.co.id/certificates/ST/XXX/624-ST-XXX1-II-2025.png"
                  target="_blank" rel="noopener noreferrer"
                >
                  View Certificate →
                </a>
         </div>
          <div className="text-white text-xs md:text-base text-justify">
            <p>
              On <strong>February 27, 2025</strong>, I joined <strong>Skola Talk #92: Digital Writing Camp</strong>. This event explored the power of digital writing in marketing and branding. I learned techniques for crafting content across various platforms, dos and don&apos;ts of digital writing, and future trends in content creation.
            </p>
          </div>

          {/* Certificate 5: Data Science */}
          <div className="flex flex-col items-center mb-2 transition-transform duration-300 ease-in-out transform hover:scale-105">
            <img
              src={dsf}
              alt="Data Science Certificate"
              className="w-full max-w-md rounded-lg shadow-lg object-contain mb-4"
            />
          </div>

          <div className = "transition-colors text-xs md:text-base mb-4 text-center text-blue-500">
                <a
                  href="https://cdn.digitalskola.co.id/certificates/ST/XXX/052-ST-XXX1-III-2025.png"
                  target="_blank" rel="noopener noreferrer"
                >
                  View Certificate →
                </a>
         </div>
         <div className="text-white text-xs md:text-base text-justify">
            <p>
              On <strong>March 4, 2025</strong>, I attended <strong>Skola Talk #93: Data Science</strong>. This workshop highlighted the importance of Data Science in transforming industries. From e-commerce to healthcare, companies are increasingly relying on data to make more accurate decisions, improve operational efficiency, and create new innovations. The event provided insights into why Data Science is key to industry transformation, explored career paths from Data Analyst to AI Specialist, and discussed essential tools for Data Scientists. Real-world case studies demonstrated how Data Science solves complex problems, and the session concluded with a look at the future of Data Science.
            </p>
          </div>

          {/* Certificate 6: Data Analytics */}
          <div className="flex flex-col items-center mb-2 transition-transform duration-300 ease-in-out transform hover:scale-105">
            <img
              src={ds6} // Use the new certificate image
              alt="Data Analytics Certificate"
              className="w-full max-w-md rounded-lg shadow-lg object-contain mb-4"
            />
          </div>

          <div className = "transition-colors text-xs md:text-base mb-4 text-center text-blue-500">
                <a
                  href="https://cdn.digitalskola.co.id/certificates/ST/XXX/140-ST-XXX1-III-2025.png" // Update the link to the new certificate
                  target="_blank" rel="noopener noreferrer"
                >
                  View Certificate →
                </a>
         </div>
         <div className="text-white text-xs md:text-base text-justify">
            <p>
              On <strong>March 7, 2025</strong>, I attended <strong>Skola Talk #94: Data Analytics</strong>. This event focused on how data analytics is transforming businesses. I learned practical techniques for cleaning and preparing data using Excel and SQL, manipulating data with Python, and presenting data effectively using Tableau. The workshop also provided tips for building a strong portfolio and career as a Data Analyst. Additionally, we simulated database operations using <strong>Dbeaver</strong>, a powerful database management tool, to understand how to interact with and analyze data stored in databases.
            </p>
          </div>

          {/* Closing Statement */}
          <p className="text-white text-xs md:text-base text-justify">
            These workshops not only enhanced my technical and digital skills but also provided me with practical knowledge that I can apply in both academic and professional settings. I am grateful for the opportunity to learn from industry experts and look forward to applying these insights in my future endeavors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DS_ST;