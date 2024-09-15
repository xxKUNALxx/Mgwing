// import React from 'react';
// import backgroundImg from '../assets/bg.jpg';
// const Aboutus = () => {
//   return (
//     <div className="w-full">
//       {/* First Section with Background Image */}
//       <div
//         className="w-full h-[400px] flex items-center justify-center bg-cover bg-center text-white"
//         style={{ backgroundImage: `url(${backgroundImg})` }}
//       >
//         <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
//           <h1 className="text-4xl font-bold mb-4">Welcome to MG Enterprises: A Leader in Manufactoring & Trading Excellence</h1>
//           <p>
//             MG Enterprises stands as a beacon of trading excellence, built on a foundation of trust, quality, and integrity.
//             Founded by Gourahari Nayak, an accomplished MBA graduate and a retired General Manager from the government banking
//             sector, MG Enterprises has grown to become a symbol of reliability and superior service.
//           </p>
//         </div>
//       </div>

//       {/* Second Section with Side-by-Side Image and Paragraph */}
//       <div className="container mx-auto my-16 flex flex-col lg:flex-row items-center">
//         {/* Image Section */}
//         <div className="lg:w-1/2 w-full p-6">
//           <img
//             src="/path/to/founder-image.jpg"
//             alt="Founder"
//             className="w-full h-auto rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Text Section */}
//         <div className="lg:w-1/2 w-full p-6">
//           <h2 className="text-3xl font-bold mb-4">Our Founder’s Vision and Legacy</h2>
//           <p>
//             Gourahari Nayak’s journey to founding MG Enterprises was shaped by his vast experience in the banking industry,
//             where he held significant leadership roles. His extensive background in finance and management provided him with
//             a deep understanding of market dynamics and customer expectations.
//           </p>
//           <p className="mt-4">
//             Mr. Nayak’s experience as a General Manager honed his skills in strategic decision-making, customer relations, and
//             organizational leadership. These skills have been pivotal in shaping MG Enterprises into a company that not only
//             meets but exceeds customer expectations.
//           </p>
//         </div>
//       </div>

//       {/* Third Section */}
//       <div className="container mx-auto my-16">
//         <h2 className="text-3xl font-bold text-center mb-6">Our Mission and Values</h2>
//         <p className="text-center max-w-2xl mx-auto">
//           At the core of MG Enterprises lies a mission to deliver excellence in every aspect of our business. We are committed to
//           being a leading trading company that sets the standard for quality and reliability. We believe in offering only the best
//           to our customers. Every product that we trade undergoes rigorous quality checks to ensure it meets the highest standards.
//         </p>
//       </div>

     
//     </div>
//   );
// };

// export default Aboutus;



import React from 'react';
import backgroundImg from '../assets/bg.jpg';

const Aboutus = () => {
  return (
    <div className="w-full">
      {/* First Section with Background Image */}
      <div
        className="w-full h-[400px] md:h-[500px] flex items-center justify-center bg-cover bg-center text-white relative"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 bg-black bg-opacity-70 p-8 md:p-12 rounded-lg text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Welcome to MG Enterprises: A Leader in Manufacturing & Trading Excellence
          </h1>
          <p className="text-sm md:text-lg">
            MG Enterprises stands as a beacon of trading excellence, built on a foundation of trust, quality, and integrity.
            Founded by Gourahari Nayak, an accomplished MBA graduate and a retired General Manager from the government banking
            sector, MG Enterprises has grown to become a symbol of reliability and superior service.
          </p>
        </div>
      </div>

      {/* Second Section with Side-by-Side Image and Paragraph */}
      <div className="container mx-auto my-16 px-4 lg:flex lg:space-x-8 lg:items-center">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full mb-8 lg:mb-0">
          <img
            src="/path/to/founder-image.jpg"
            alt="Founder"
            className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-3xl font-bold mb-4">Our Founder’s Vision and Legacy</h2>
          <p className="text-justify text-base md:text-lg">
            Gourahari Nayak’s journey to founding MG Enterprises was shaped by his vast experience in the banking industry,
            where he held significant leadership roles. His extensive background in finance and management provided him with
            a deep understanding of market dynamics and customer expectations.
          </p>
          <p className="mt-4 text-justify text-base md:text-lg">
            Mr. Nayak’s experience as a General Manager honed his skills in strategic decision-making, customer relations, and
            organizational leadership. These skills have been pivotal in shaping MG Enterprises into a company that not only
            meets but exceeds customer expectations.
          </p>
        </div>
      </div>

      {/* Third Section */}
      <div className="container mx-auto my-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Mission and Values</h2>
        <p className="max-w-3xl mx-auto text-base md:text-lg">
          At the core of MG Enterprises lies a mission to deliver excellence in every aspect of our business. We are committed to
          being a leading trading company that sets the standard for quality and reliability. We believe in offering only the best
          to our customers. Every product that we trade undergoes rigorous quality checks to ensure it meets the highest standards.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
