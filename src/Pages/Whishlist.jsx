import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

const Wishlist = () => {
  // Placeholder for wishlist items data
  const wishlistItems = [
    {
      id: 1,
      name: 'Wishlist Item 1',
      
      image: 'https://via.placeholder.com/150', // Placeholder image
    },
    {
      id: 2,
      name: 'Wishlist Item 2',
      
      image: 'https://via.placeholder.com/150', // Placeholder image
    },
  ];

  return (
    <div className='min-h-screen bg-gray-100 p-8'>
      {/* Header */}
      <h1 className='text-3xl font-bold text-blue-500 mb-8'>My Wishlist</h1>

      {/* Wishlist Items */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {wishlistItems.map((item) => (
          <div key={item.id} className='bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200'>
            {/* Product Image */}
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-48 object-cover rounded-md border-2 border-blue-500 mb-4'
            />

            {/* Product Details */}
            <h2 className='text-xl font-semibold text-gray-800'>{item.name}</h2>
            

            {/* Action Buttons */}
            <div className='flex justify-between items-center mt-4'>
              <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200'>
                Add to Cart
              </button>
              <button className='text-blue-500 hover:text-red-500 transition duration-200'>
                <FiTrash2 className='text-2xl' />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
