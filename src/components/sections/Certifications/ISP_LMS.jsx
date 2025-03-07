import  { useEffect } from 'react';
import isp from "src/assets/certificates/ISP/ISP.png";

// eslint-disable-next-line react/prop-types
const ISP_LMS = ({ onClose }) => {
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
         Transforming On-the-Job Training Webinar Certification - iSpring Learn
        </h2>
        <div className="space-y-4 text-white text-xs md:text-base text-justify">
            <p>
                <strong>iSpring Learn</strong> is a leading provider of e-learning solutions and tools that help organizations create, manage, and deliver interactive online training programs. Through its webinars and training sessions, such as &quot;Transformasikan On-the-Job Training,&quot; iSpring offers valuable insights and practical strategies for enhancing workplace learning and development. Participants who attend these sessions receive a certificate of participation, acknowledging their engagement and commitment to professional growth.
            </p>
        </div>

        {/* Certificate Image */}
         <div className="flex justify-center mb-2">
          <img
            src={isp}
            alt="iSpring Webinar Certificate"
            className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <div className = "transition-colors text-xs md:text-base mt-4 mb-4 text-center text-blue-500">
                <a
                  href="https://drive.google.com/file/d/1zWINv6mZKhVy3H3svig2BXTjHsfP7PuY/view?usp=sharing"
                  target="_blank" rel="noopener noreferrer"
                >
                  View Certificate →
                </a>
        </div>

        <div className="space-y-4 text-white text-xs md:text-base text-justify">
          <p>
            On <strong>February 27, 2025</strong>, I participated in a webinar hosted by <strong>iSpring Solutions</strong> titled <strong>&quot;Transformasikan On-the-Job Training&quot;</strong> (Transforming On-the-Job Training). The webinar was led by <strong>Bimo Ardiansyah</strong>, a Learning Expert Consultant, and provided valuable insights into the implementation and optimization of on-the-job training (OJT) programs using the <strong>iSpring Learn</strong> platform.
          </p>
        </div>

        {/* Certificate Description */}
        <div className="space-y-4 text-white text-xs md:text-base text-justify">
          <p>
            The webinar covered the following key topics:
          </p>

          <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
            <li><strong>Introduction to On-the-Job Training (OJT)</strong>: Understanding what OJT is and how it is used in businesses.</li>
            <li><strong>Impact of OJT</strong>: Exploring the positive impact of OJT on business performance and employee development.</li>
            <li><strong>Stakeholders in OJT</strong>: Identifying who needs to be involved in OJT programs within a company.</li>
            <li><strong>Preparing for OJT</strong>: Steps to prepare before launching an OJT module in the iSpring Learn platform.</li>
            <li><strong>Assessment and Reporting</strong>: Conducting assessment sessions at retail points and analyzing reports to measure training effectiveness.</li>
          </ul>

          <p>
            The webinar also highlighted the features of <strong>iSpring Learn</strong>, a powerful learning management system (LMS) designed to streamline training programs, including OJT. Key features discussed included:
          </p>

          <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
            <li><strong>Customizable Training Modules</strong>: Creating tailored training content to meet specific business needs.</li>
            <li><strong>Assessment Tools</strong>: Designing and conducting assessments to evaluate employee performance.</li>
            <li><strong>Reporting and Analytics</strong>: Generating detailed reports to track training progress and outcomes.</li>
          </ul>

          <p>
            This webinar provided me with a deeper understanding of how to design, implement, and optimize on-the-job training programs using modern tools like iSpring Learn. The insights gained will be invaluable in enhancing training programs and driving employee development in future projects.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ISP_LMS;