// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
// import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// const Slider = ({ slides }) => {
//   return (
//     <>
//       <style>
//         {`
//           .swiper-button-next, .swiper-button-prev {
//             color: #ffffff; 
//           }
//           .swiper-pagination-bullet {
//             background-color: #ffffff; 
//           }
//           .swiper-pagination-bullet-active {
//             background-color: #ffffff; 
//           }
//         `}
//       </style>

//       <Swiper
//         modules={[Pagination, Navigation, Autoplay]}
//         spaceBetween={0} // Remove any space between slides
//         slidesPerView={1} // Show one slide at a time
//         navigation
//         pagination={{ clickable: true }}
//         loop={true} // Enable infinite loop
//         autoplay={{
//           delay: 2000, // Change slides every 2 seconds
//           disableOnInteraction: false // Keep autoplay after interaction
//         }}
//         speed={1000} // Smooth transition of 1 second
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="w-full h-96 bg-cover bg-center"
//               style={{ backgroundImage: `url(${slide.image})` }}
//             >
//               <div className="h-full  flex items-center justify-center">
//                 {/* <h2 className="text-white text-2xl">{slide.title}</h2> */}
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   );
// };

// export default Slider;
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Slider = ({ slides }) => {
  return (
    <>
      <style>
        {`
          .swiper-button-next, .swiper-button-prev {
            color: #ffffff; 
          }
          .swiper-pagination-bullet {
            background-color: #ffffff; 
          }
          .swiper-pagination-bullet-active {
            background-color: #ffffff; 
          }
        `}
      </style>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={0} // Remove any space between slides
        slidesPerView={1} // Show one slide at a time
        navigation
        pagination={{ clickable: true }}
        loop={true} // Enable infinite loop
        autoplay={{
          delay: 2000, // Change slides every 2 seconds
          disableOnInteraction: false // Keep autoplay after interaction
        }}
        speed={1000} // Smooth transition of 1 second
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-48 sm:h-64 md:h-80 lg:h-96 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="h-full flex items-center justify-center">
                <h2 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl">
                  
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
