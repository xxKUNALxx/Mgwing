import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaHeart } from 'react-icons/fa';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ProductSlider = ({ products }) => {
  return (
    <div className='relative'>
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        modules={[Navigation]}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className='relative bg-white shadow-lg rounded-lg overflow-hidden group'>
              <img 
                src={product.image} 
                alt={product.name} 
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity'>
                <h3 className='text-white text-sm font-semibold mb-2'>{product.name}</h3>
                <button className='text-xs px-3 py-1 w-full bg-cyan-500 text-black font-semibold rounded hover:bg-amber-500 transition'>
                  Add to Cart
                </button>
                <button className='absolute top-2 right-2 text-red-500 hover:text-red-600 transition'>
                  <FaHeart size={18} />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation buttons */}
        <div className='swiper-button-prev absolute top-1/2 left-0 transform -translate-y-1/2 z-10 text-black'>
          <FaArrowLeft size={24} />
        </div>
        <div className='swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2 z-10 text-black'>
          <FaArrowRight size={24} />
        </div>
      </Swiper>
    </div>
  );
};

export default ProductSlider;
