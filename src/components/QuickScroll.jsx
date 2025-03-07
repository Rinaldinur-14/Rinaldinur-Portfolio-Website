import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export const QuickScroll = ({ isLightMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      const footerSection = document.getElementById("footer"); // Ensure your footer has an ID of "footer"

      if (homeSection && footerSection) {
        const homeSectionBottom = homeSection.offsetTop + homeSection.offsetHeight;
        const footerSectionTop = footerSection.offsetTop;

        // Show QuickScroll button only if scrolled past the home section
        setIsVisible(window.scrollY > homeSectionBottom);

        // Hide QuickScroll button if it's near or overlapping the footer
        const quickScrollButton = document.querySelector(".quick-scroll-button");
        if (quickScrollButton) {
          const buttonBottom = window.scrollY + quickScrollButton.getBoundingClientRect().bottom;
          setIsNearFooter(buttonBottom >= footerSectionTop);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className={`quick-scroll-button fixed bottom-8 right-8 z-10 cursor-pointer after:content-['scroll_to_top'] after:text-sm text-white
         after:absolute after:text-nowrap after:scale-0 hover:after:scale-100 after:duration-200 w-12 h-12 rounded-full border-2 bg-clip-border
        bg-transparent 
        ${isLightMode ? 'border-orange-500 after:text-orange-500' : 'border-blue-500 after:text-blue-500'} 
        pointer flex items-center justify-center duration-300 hover:rounded-[50px] hover:w-23 group/button overflow-hidden active:scale-90 transition-opacity 
        ${isVisible && !isNearFooter ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      onClick={scrollToTop}
    >
      <svg
        className={`w-3 ${isLightMode ? 'fill-orange-500':'fill-blue-500'} bg-clip-text delay-50 duration-200 group-hover/button:-translate-y-12 `}
        viewBox="0 0 384 512"
      >
        <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
      </svg>
    </button>
  );
};

export default QuickScroll;