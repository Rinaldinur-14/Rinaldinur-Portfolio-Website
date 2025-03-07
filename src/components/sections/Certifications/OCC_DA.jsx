import  { useEffect } from 'react';
import sertifikat from "src/assets/certificates/OCC_DA/OCC_DA.png";

// eslint-disable-next-line react/prop-types
const OCC_DA = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

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

        {/* Certificate Title */}
        <h2 className="text-xl md:text-3xl font-bold mb-6 text-white text-center">
          Data Analytics Fundamentals Bootcamp
        </h2>

        <div className="space-y-4 text-white text-xs md:text-base text-justify">
          <p>
            <strong>One Code Camp</strong> is an Australian-based organization that offers coding education and training programs designed to help individuals develop skills in software development and programming. The bootcamp focuses on providing accessible and practical coding education, often catering to beginners and those looking to transition into tech careers.
          </p>
        </div>

        {/* Certificate Image */}
        <div className="flex justify-center mb-6">
          <img
            src={sertifikat}
            alt="Data Analytics Fundamentals Bootcamp Certificate"
            className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <div className = "transition-colors text-xs md:text-base mt-4 mb-4 text-center text-blue-500">
                <a
                  href="https://api.onecodecamp.com/uploads/certificate/certificate.Data%20Analytics%20Fundamentals%20Bootcamp_Rinaldi.png"
                  target="_blank" rel="noopener noreferrer"
                >
                  View Certificate →
                </a>
        </div>

        {/* Certificate Description */}
        <div className="space-y-4 text-white text-xs md:text-base text-justify">
          <p>
            I am thrilled to share that I successfully completed the <strong>Data Analytics Fundamentals Bootcamp</strong> at <strong>One Code Camp Academy</strong> from <strong>February 3 to February 13, 2025</strong>. This intensive 2-week program (8 days, Monday to Thursday) was an incredible journey into the world of data analytics, equipping me with foundational skills and hands-on experience in key tools and techniques used in the industry.
          </p>

          <p>
            The bootcamp was designed to achieve the following objectives:
          </p>

          <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
            <li><strong>Introduce Fundamental Concepts</strong>: Understand the basics of data analysis and interpretation.</li>
            <li><strong>Hands-On Python Programming</strong>: Gain practical experience in Python for data manipulation and analysis.</li>
            <li><strong>Jupyter Notebooks</strong>: Explore Jupyter Notebooks as a versatile tool for interactive data exploration.</li>
            <li><strong>SQL Fundamentals</strong>: Learn SQL for querying and managing relational databases.</li>
            <li><strong>Data Cleaning and Preprocessing</strong>: Ensure high-quality data for analysis through cleaning and preprocessing techniques.</li>
            <li><strong>Data Manipulation with Pandas</strong>: Master data manipulation techniques using the Pandas library.</li>
            <li><strong>Data Visualization</strong>: Create insightful visualizations using Matplotlib and Seaborn.</li>
            <li><strong>Practical Exercises and Projects</strong>: Apply skills through hands-on exercises, data projects, and real-world case studies.</li>
            <li><strong>Collaborative Learning</strong>: Foster a supportive environment for collaboration, experimentation, and knowledge sharing.</li>
            <li><strong>Career Preparation</strong>: Equip participants with foundational skills to pursue further learning and career opportunities in data analytics.</li>
          </ul>

          <p>
            During the bootcamp, I gained proficiency in the following tools and technologies:
          </p>

          <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
            <li><strong>Python</strong>: Essentials for data analysis, including libraries like Pandas, NumPy, and Matplotlib.</li>
            <li><strong>Jupyter Notebooks</strong>: Interactive data exploration and analysis.</li>
            <li><strong>SQL</strong>: Querying and managing relational databases.</li>
            <li><strong>Data Cleaning and Preprocessing</strong>: Techniques to ensure data quality.</li>
            <li><strong>Data Visualization</strong>: Creating visualizations to communicate insights effectively.</li>
          </ul>

          <p>
            This bootcamp has significantly enhanced my ability to work with data, from cleaning and processing to analyzing and visualizing it. The hands-on projects and real-world scenarios provided during the course have given me the confidence to tackle data challenges head-on and derive meaningful insights.
          </p>

          <p>
            Completing this bootcamp has been a pivotal step in my journey as a data enthusiast. It has not only strengthened my technical skills but also deepened my appreciation for the power of data in driving informed decisions. I am excited to apply these skills in my future projects and continue growing in the field of data analytics.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default OCC_DA;