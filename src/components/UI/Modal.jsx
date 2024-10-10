import React from 'react';

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Under Maintenance</h2>
        <p className="text-gray-700">This feature is currently under maintenance. Please check back later!</p>
        <button
          className="mt-4 px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition-all"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
