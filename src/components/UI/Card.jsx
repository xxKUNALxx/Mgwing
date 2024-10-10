

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Modal from './Modal'; // Import the Modal component

gsap.registerPlugin(ScrollTrigger);

const Card = ({ title, image, desc }) => {
  const [isModalVisible, setModalVisible] = useState(false);
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

  const handleCardClick = () => {
    setModalVisible(true); // Show modal when card is clicked
  };

  return (
    <div>
      <div
        ref={cardRef}
        className="relative shadow-2xl rounded-lg overflow-hidden group w-full mb-6 transition-transform duration-300 hover:scale-105 hover:shadow-3xl"
        onClick={handleCardClick} // Handle card click
      >
        <img
          src={image || defaultImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

        {/* Title and description within blue background */}
        <div className="absolute bottom-0 left-0 w-full z-10">
          <div className="bg-gradient-to-r from-teal-600 to-blue-500 p-2 sm:p-3 md:p-4 text-center transform translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
            <h3 className="text-base sm:text-lg md:text-lg font-semibold text-white">{title}</h3>
            <p className="text-sm sm:text-base md:text-base text-white mt-1">{desc}</p>
          </div>
        </div>

        {/* Permanent glowing border effect */}
        <div className="absolute inset-0 opacity-100 rounded-lg pointer-events-none animate-pulse"></div>
      </div>

      {/* Modal for Under Maintenance */}
      <Modal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)} // Hide modal when close button is clicked
      />
    </div>
  );
};

export default Card;
