import  { useEffect } from 'react';
import gC from "src/assets/docum/organz/GIEF.png";

// eslint-disable-next-line react/prop-types
const GIEF = ({ onClose }) => {
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
              Gunadarma Industrial Engineering Fair (GIEF) Experience
            </h2>
    
            <div className="space-y-4 text-white text-xs md:text-base text-justify">
              <p>
                The Gunadarma Industrial Engineering Fair (GIEF) is an annual event organized by Gunadarma University, aimed at promoting awareness and understanding of industrial engineering principles and their applications. The event features seminars, workshops, and exhibitions that focus on current trends and challenges in the industry.
              </p>
              </div>
    
            {/* Certificate Image */}
            <div className="flex justify-center mb-6">
              <img
                src={gC}
                alt="7th Gunadarma Industrial Engineering Fair Certificate"
                className="w-full max-w-md rounded-lg shadow-lg object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
            <div className = "transition-colors text-xs md:text-base mt-4 mb-4 text-center text-blue-500">
                    <a
                      href="https://drive.google.com/file/d/1Umg4LnvOGwXprPxIBnE81YGOA30F6e0e/view?usp=drive_link"
                      target="_blank" rel="noopener noreferrer"
                    >
                      View Certificate →
                    </a>
            </div>
    
            {/* Certificate Description */}
            <div className="space-y-4 text-white text-xs md:text-base text-justify">
              <p>
                I had the honor of being a member of the organizing committee for the 7th Gunadarma Industrial Engineering Fair (GIEF) 2023, held on September 13th, 2023, at the Gunadarma University F8 Campus Auditorium in Depok. The theme of the event was &quot;Circular Economy for Greener Industry in Indonesia,&quot; which highlighted the importance of sustainable practices in the industrial sector.
              </p>
    
              <p>
                My contributions to the event included:
              </p>
    
              <ul className="list-disc ml-5 space-y-2 text-left md:text-justify">
                <li>
                  <strong>Event Preparation and Execution</strong>: Assisting with the planning and coordination of various event activities to ensure a smooth and successful execution.
                </li>
                <li>
                  <strong>Guest Management</strong>: Greeting and escorting important guests, ensuring they had a positive experience throughout the event.
                </li>
              </ul>
    
              <p>
                Participating in the 7th GIEF was a rewarding experience that allowed me to develop my organizational and interpersonal skills. I gained valuable insights into the principles of circular economy and their application in creating a greener and more sustainable industry.
              </p>
    
              <p>
                The event provided a platform for knowledge exchange and networking with industry professionals and peers. It was an enriching experience that deepened my understanding of sustainable industrial practices and their impact on the environment.
              </p>
    
              <p>
                I am grateful for the opportunity to contribute to this prestigious event and look forward to applying the skills and knowledge I gained in my future endeavors.
              </p>
    
              </div>
            </div>
          </div>
        </div>
      );
    };
    
  
  export default GIEF;