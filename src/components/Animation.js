import React from "react";
import { useInView } from "react-intersection-observer";
import "App.css"; // Path to my CSS file

const Animation = ({ className, children, animation }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger animation when 10% of the component is visible
  });

  return (
    <div
      ref={ref}
      className={`${className} ${animation} ${inView ? "fade-in-visible" : ""}`}
    >
      {children}
    </div>
  );
};

export default Animation;
