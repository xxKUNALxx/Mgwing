

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Card = ({ title, image }) => {
  const defaultImage = '/path/to/default-image.jpg'; // Replace with your default image path
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, scale: 0.9 }, // Start slightly smaller and transparent
      {
        opacity: 1,
        scale: 1, // Scale to full size
        duration: 0.4, // Quick animation
        ease: 'none', // No easing, for a continuous effect
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
          once: true, // Trigger only once
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative shadow-2xl rounded-lg overflow-hidden group w-full mb-6 transition-transform duration-300 hover:scale-105 hover:shadow-3xl"
    >
      <img
        src={image || defaultImage}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
      
      {/* Title always visible */}
      <div className="absolute bottom-0 left-0 w-full p-2 sm:p-3 md:p-4 flex items-center justify-center z-10">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white hover:text-white text-center">{title}</h3>
      </div>

      {/* Blue background that appears on hover */}
      <div className="absolute bottom-0 left-0 w-full h-10 sm:h-12 md:h-14 bg-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Permanent glowing border effect */}
      <div className="absolute inset-0 opacity-100 rounded-lg pointer-events-none animate-pulse"></div>
    </div>
  );
};

export default Card;
