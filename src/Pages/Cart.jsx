import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

const Cart = () => {
  // Placeholder for cart items data
  const cartItems = [
    {
      id: 1,
      name: 'Product 1',
      quantity: 2,
      image: 'https://via.placeholder.com/150', 
    },
    {
      id: 2,
      name: 'Product 2',
      quantity: 1,
      image: 'https://via.placeholder.com/150', 
    },
    {
      id: 3,
      name: 'Product 3',
      quantity: 1,
      image: 'https://via.placeholder.com/150', 
    },
  ];

  return (
    <div className='min-h-screen bg-gray-100 text-gray-800 flex flex-col justify-between p-8'>
      {/* Header */}
      <h1 className='text-3xl font-bold mb-8 text-blue-500'>Shopping Cart</h1>

      {/* Cart Items */}
      <div className='flex flex-col space-y-6'>
        {cartItems.map((item) => (
          <div key={item.id} className='flex items-center space-x-6 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200'>
            {/* Product Image */}
            <img
              src={item.image}
              alt={item.name}
              className='w-32 h-32 object-cover rounded-md border-2 border-blue-500'
            />

            {/* Product Details */}
            <div className='flex-grow'>
              <h2 className='text-xl font-semibold text-gray-800'>{item.name}</h2>
              <p className='text-gray-600 mt-2'>Quantity: {item.quantity}</p>
            </div>

            {/* Remove Button */}
            <button className='text-blue-500 hover:text-red-500 transition duration-200'>
              <FiTrash2 className='text-2xl' />
            </button>
          </div>
        ))}
      </div>

      {/* Inquiry and Checkout Section */}
      <div className='mt-12 p-6 bg-white rounded-lg shadow-md'>
        <div className='flex justify-between items-center'>
          <h2 className='text-xl font-bold text-gray-800'>Total Items:</h2>
          <p className='text-2xl font-semibold text-gray-800'>{cartItems.reduce((total, item) => total + item.quantity, 0)}</p>
        </div>

        <button className='mt-6 w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200'>
          Proceed to Inquiry
        </button>
      </div>
    </div>
  );
};

export default Cart;
