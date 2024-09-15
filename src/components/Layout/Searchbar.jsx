import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
  return (
    <div className='relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl'>
      <input
        type='text'
        placeholder='Search'
        className='w-full px-4 py-2 pl-10 rounded-full bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-600 shadow-md transition-all'
      />
      <FiSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
    </div>
  );
};

export default Searchbar;
