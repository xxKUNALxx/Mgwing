


// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const Card = ({ title, image, desc }) => {
//   const defaultImage = '/path/to/default-image.jpg'; // Replace with your default image path
//   const cardRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       cardRef.current,
//       { opacity: 0, scale: 0.9 }, // Start slightly smaller and transparent
//       {
//         opacity: 1,
//         scale: 1, // Scale to full size
//         duration: 0.4, // Quick animation
//         ease: 'none', // No easing, for a continuous effect
//         scrollTrigger: {
//           trigger: cardRef.current,
//           start: 'top 85%',
//           once: true, // Trigger only once
//         },
//       }
//     );
//   }, []);

//   return (
//     <div
//       ref={cardRef}
//       className="relative shadow-2xl rounded-lg overflow-hidden group w-full mb-6 transition-transform duration-300 hover:scale-105 hover:shadow-3xl"
//     >
//       <img
//         src={image || defaultImage}
//         alt={title}
//         className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//       />
//       <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

//       {/* Title and description within blue background */}
//       <div className="absolute bottom-0 left-0 w-full z-10">
//         <div className="bg-sky-500 p-2 sm:p-3 md:p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <h3 className="text-base sm:text-lg md:text-lg font-semibold text-white">{title}</h3>
//           <p className="text-sm sm:text-base md:text-base text-white mt-1">{desc}</p>
//         </div>
//       </div>

//       {/* Permanent glowing border effect */}
//       <div className="absolute inset-0 opacity-100 rounded-lg pointer-events-none animate-pulse"></div>
//     </div>
//   );
// };

// export default Card;


import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Card = ({ title, image, desc }) => {
  const defaultImage = '/path/to/default-image.jpg'; // Replace with your default image path
  const cardRef = useRef(null);

  useEffect(() => {
    // Uniform fade and slide up animation for each row of cards
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 }, // Start faded out and slightly below
      {
        opacity: 1,
        y: 0, // Fade in and slide up into position
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 90%', // Trigger as the element enters the viewport
          toggleActions: 'play reverse play reverse', // Resets on scroll up
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative shadow-lg rounded-lg overflow-hidden group w-full mb-6 transition-transform duration-300 hover:scale-105"
    >
      {/* Image */}
      <img
        src={image || defaultImage}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

      {/* Title and description */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <div className="bg-gradient-to-r from-teal-600 to-blue-500 p-2 sm:p-3 md:p-4 text-center transform translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
          <h3 className="text-base sm:text-lg md:text-lg font-semibold text-white">
            {title}
          </h3>
          <p className="text-sm sm:text-base md:text-base text-white mt-1">
            {desc}
          </p>
        </div>
      </div>

      {/* Glowing shadow effect on hover */}
      <div className="absolute inset-0 rounded-lg pointer-events-none shadow-lg group-hover:shadow-[0px_0px_20px_5px_rgba(0,128,255,0.8)] transition-shadow duration-500"></div>
    </div>
  );
};

export default Card;
