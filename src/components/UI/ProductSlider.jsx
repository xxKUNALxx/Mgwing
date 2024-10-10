import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaHeart } from 'react-icons/fa';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Modal from './Modal';

const ProductSlider3 = ({ products }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleMouseEnter = (swiper) => {
    swiper.autoplay.stop(); // Stop autoplay on hover
  };

  const handleMouseLeave = (swiper) => {
    swiper.autoplay.start(); // Resume autoplay when no longer hovering
  };

  const handleCardClick = () => {
    setModalVisible(true); // Show modal when card is clicked
  };


  return (
    <div className="relative">
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        navigation={{
          prevEl: '.custom-swiper-button-prev',
          nextEl: '.custom-swiper-button-next',
        }}
        loop={true} // Enable infinite looping
        autoplay={{
          delay: 0, // Autoplay with no delay
          disableOnInteraction: false, // Keep autoplay running even after user interaction
        }}
        speed={5000} // Slower transition speed for smooth, continuous scrolling
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => {
          swiper.el.onmouseenter = () => handleMouseEnter(swiper);
          swiper.el.onmouseleave = () => handleMouseLeave(swiper);
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="relative bg-white shadow-lg rounded-lg overflow-hidden group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-white text-sm font-semibold mb-2">{product.name}</h3>
                <button className="text-xs px-3 py-1 w-full bg-cyan-500 text-black font-semibold rounded hover:bg-amber-500 transition"
                 onClick={handleCardClick}>
                  Add to Cart
                </button>
                <button className="absolute top-2 right-2 text-red-500 hover:text-red-600 transition">
                  <FaHeart size={18} />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation buttons */}
        <div className="custom-swiper-button-prev absolute top-1/2 left-2 transform -translate-y-1/2 z-10 text-white cursor-pointer">
          <FaArrowLeft size={24} />
        </div>
        <div className="custom-swiper-button-next absolute top-1/2 right-2 transform -translate-y-1/2 z-10 text-white cursor-pointer">
          <FaArrowRight size={24} />
        </div>
      </Swiper>

      {/* Hide default Swiper navigation buttons */}
      <style jsx>{`
        .swiper-button-prev,
        .swiper-button-next {
          display: none !important;
        }
      `}</style>

            {/* Modal for Under Maintenance */}
            <Modal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)} // Hide modal when close button is clicked
      />
    </div>
  );
};

export default ProductSlider3;
