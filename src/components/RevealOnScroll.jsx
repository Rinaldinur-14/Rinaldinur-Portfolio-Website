import { useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("visible");
          ref.current.classList.add("animate-back-in-left");
          ref.current.classList.remove("animate-back-out-right");
        } else {
          ref.current.classList.remove("animate-back-in-left");
          ref.current.classList.add("animate-back-out-right");
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );


    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  });

  return (
    <div ref={ref} className="reveal animate-back-in-left">

      {children}
    </div>
  );
};
