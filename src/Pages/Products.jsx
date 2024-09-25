// import React, { useState } from 'react';
// import Junctionbox from '../assets/1.png';
// import pda1 from '../assets/PDS/1.png'
// import pda2 from '../assets/PDS/2.png'
// import pda3 from '../assets/PDS/3.png'
// import pda4 from '../assets/PDS/4.png'
// import pda5 from '../assets/PDS/5.png'
// import pda6 from '../assets/PDS/6.png'
// import pda7 from '../assets/PDS/7.png'
// import pda8 from '../assets/PDS/8.png'
// import pda9 from '../assets/PDS/9.png'
// import pda10 from '../assets/PDS/10.png'



// const categories = [
//   "Wireless Communication System","Public Address System","Insulators","Camera & CCTV","Tape","Fibre Optic",
// ];

// const allProducts = {
//   'Wireless Communication System': [
//     { name: 'Licence Free Radio(446MHz)', image: Junctionbox },
//     { name: 'PTT OverCellular Radio', image: Junctionbox },
//     { name: 'Marine Radio', image: Junctionbox },
//     { name: 'Analog Radio', image: Junctionbox },
//     { name: 'Digital Radio', image: Junctionbox },

//   ],

 
//   'Insulators': [
//     { name: 'Polymeric Disc Insulator', image: '/path/to/image3.jpg' },
//     { name: 'Polymeric Pin Insulator', image: '/path/to/image4.jpg' },
//     { name: 'polymeric Post Insulator', image: '/path/to/image4.jpg' },
//     { name: 'Polymeric Drop out Fuze', image: '/path/to/image4.jpg' },
//     { name: 'polymeric lightning arrestor', image: '/path/to/image4.jpg' },
//     { name: 'porcelain lightning arrestor', image: '/path/to/image4.jpg' },
//     { name: 'Polymer G.O.A.B Switch', image: '/path/to/image4.jpg' },
//     { name: 'Porcelain G.O.A.B Switch', image: '/path/to/image4.jpg' },
//     { name: 'Polymer Isolator', image: '/path/to/image4.jpg' },
//     { name: 'Porcelain Isolator', image: '/path/to/image4.jpg' },  
//     { name: 'Surge Counter', image: '/path/to/image4.jpg' },  
//   ],

//   'Public Address System': [
//     { name: 'conference system', image: pda1 },
//     { name: 'mixure amplifiers', image: pda2 },
//     { name: 'power amplifiers', image: pda3 },
//     { name: 'mixures', image: pda4 },
//     { name: 'microphones', image: pda5 },
//     { name: 'speakers', image: pda6 },
//     { name: 'portable PA', image: pda7 },
//     { name: 'counter  communication system', image: pda8 },
//     { name: 'accesories', image: pda9 },
//     { name: 'paging systems', image: pda10 },  
//   ],
//   'Camera & CCTV': [
//     { name: ' Body Worn Camera', image: Junctionbox },
//     { name: 'Dash Camera', image: Junctionbox },
//   ],
 
// 'Fibre Optic': [
//     { name: 'L3 OLT', image: Junctionbox },
//     { name: 'Router and switch', image: Junctionbox },
//     { name: 'Dash Camera', image: Junctionbox },
//     { name: 'Dash Camera', image: Junctionbox },
//     { name: 'Dash Camera', image: Junctionbox },
//   ],
//   'Tape': [
//     { name: ' Self Fusing Silicon Tape High Temperature', image: '/path/to/image3.jpg' },
//     { name: 'Polyester Film Silicone Adhesive Tape', image: '/path/to/image4.jpg' },
//     { name: 'Polyimide Silicone Adhesive Tape', image: '/path/to/image4.jpg' },
//     { name: 'Cloth Insulation Tape', image: '/path/to/image4.jpg' },
//     { name: 'Cloth Insulation Tape', image: '/path/to/image4.jpg' },
//     { name: 'PVC Insulation Tape', image: '/path/to/image4.jpg' },
//     { name: 'Butyl Rubber Sealing Tape', image: '/path/to/image4.jpg' },
//     { name: 'HT EPR Insulation Tape Premium', image: '/path/to/image4.jpg' },
//     { name: 'Heavy Duty Mining Tape', image: '/path/to/image4.jpg' },
//     { name: 'EPR Insulation Tape', image: '/path/to/image4.jpg' },  
//     { name: 'Butyl Mastic Seal Tape', image: '/path/to/image4.jpg' },  
//     { name: 'Fiberglass Silicone Tape', image: '/path/to/image3.jpg' },
//     { name: 'Electrical Putty Tape', image: '/path/to/image4.jpg' },
//     { name: 'Armor-Wrap Tape', image: '/path/to/image4.jpg' },
//     { name: 'Electrical Stress Control Tape', image: '/path/to/image4.jpg' },
//     { name: 'Premium Electrical Tape', image: '/path/to/image4.jpg' },
//     { name: 'Polyisobutylene Tape', image: '/path/to/image4.jpg' },
//     { name: 'Glass Cloth Adhesive Tape', image: '/path/to/image4.jpg' },
//     { name: 'Duct Tape', image: '/path/to/image4.jpg' },
//     { name: 'Cross Filament Tape', image: '/path/to/image4.jpg' },
//     { name: 'Semi Conductive Tape Self amalgamating EPR Tape', image: '/path/to/image4.jpg' },  
//     { name: 'Wire Harness Tape', image: '/path/to/image4.jpg' },
//     { name: 'Self Curing Insulation Waterproof Protection Pad', image: '/path/to/image4.jpg' },
//     { name: 'Rubber Mastic Tape', image: '/path/to/image4.jpg' },  
//   ],

// };

// const EnquiryModal = ({ productName, isOpen, onClose }) => {
//   if (!isOpen) return null;
  
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white rounded-lg shadow-lg p-6 w-96">
//         <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>X</button>
//         <h2 className="text-xl font-bold mb-4">Product Inquiry</h2>
//         <form>
//           <div className="mb-4">
//             <label className="block text-sm font-medium">Name</label>
//             <input type="text" className="w-full border rounded-md p-2" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium">Email *</label>
//             <input type="email" className="w-full border rounded-md p-2" required />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium">Phone</label>
//             <input type="tel" className="w-full border rounded-md p-2" />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium">Subject</label>
//             <input type="text" className="w-full border rounded-md p-2" value={productName} readOnly />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium">Message</label>
//             <textarea className="w-full border rounded-md p-2 h-24"></textarea>
//           </div>
//           <div className="mb-4">
//             <input type="checkbox" id="terms" required />
//             <label htmlFor="terms" className="ml-2">I agree to the website's terms and conditions</label>
//           </div>
//           <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition">Send</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// const Products = () => {
//   const [selectedCategory, setSelectedCategory] = useState('Acidity Testing Kit');
//   const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
//   const [selectedProductName, setSelectedProductName] = useState('');
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const products = allProducts[selectedCategory] || [];

//   const openEnquiry = (productName) => {
//     setSelectedProductName(productName);
//     setIsEnquiryOpen(true);
//   };

//   const closeEnquiry = () => setIsEnquiryOpen(false);

//   return (
//     <div className='w-full min-h-screen flex flex-col bg-gray-100'>
//       <div className='pt-24 flex-1'>
//         {/* Categories Dropdown */}
//         <div className='w-full bg-blue-500 text-white p-4 rounded-lg shadow-lg'>
//           <div onClick={() => setDropdownOpen(!dropdownOpen)} className='cursor-pointer flex justify-between items-center'>
//             <h2 className='text-xl font-bold'>Categories</h2>
//             <span className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}>
//               ▼
//             </span>
//           </div>
//           {dropdownOpen && (
//             <ul className='space-y-2 mt-4'>
//               {categories.map((category) => (
//                 <li
//                   key={category}
//                   className={`p-2 cursor-pointer rounded-md hover:bg-white hover:text-blue-500 transition-colors duration-200 ${selectedCategory === category ? 'bg-white text-blue-500' : ''}`}
//                   onClick={() => {
//                     setSelectedCategory(category);
//                     setDropdownOpen(false); // Close dropdown after selecting
//                   }}
//                 >
//                   {category}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* Products Section */}
//         <div className='mt-6 bg-white p-6 rounded-lg shadow-lg'>
//           <h2 className='text-2xl font-bold text-blue-500 mb-4'>Products</h2>
//           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
//             {products.map((product, index) => (
//               <div key={index} className='bg-gray-50 p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-200'>
//                 <img src={product.image} alt={product.name} className='w-full h-52 object-cover rounded-lg mb-2' />
//                 <h3 className='text-lg font-semibold text-gray-800'>{product.name}</h3>
//                 <button
//                   className='mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition'
//                   onClick={() => openEnquiry(product.name)}
//                 >
//                   Enquire
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <EnquiryModal productName={selectedProductName} isOpen={isEnquiryOpen} onClose={closeEnquiry} />
//     </div>
//   );
// };

// export default Products;


// 3 prdouct category 28 products 3*9 + 1

import React, { useState } from 'react';
import Junctionbox from '../assets/1.png';
import img from '../assets/camera.png';
import pda1 from '../assets/PDS/1.png'
import pda2 from '../assets/PDS/2.png'
import pda3 from '../assets/PDS/3.png'
import pda4 from '../assets/PDS/4.png'
import pda5 from '../assets/PDS/5.png'
import pda6 from '../assets/PDS/6.png'
import pda7 from '../assets/PDS/7.png'
import pda8 from '../assets/PDS/8.png'
import pda9 from '../assets/PDS/9.png'
import pda10 from '../assets/PDS/10.png'

const categories = [
  "Wireless Communication System","Public Address System","Insulators","Camera & CCTV","Tape","Fibre Optic",
];

const allProducts = {
  'Wireless Communication System': [
    { name: 'Licence Free Radio(446MHz)', image: Junctionbox },
    { name: 'PTT OverCellular Radio', image: img },
    { name: 'Marine Radio', image: img },
    { name: 'Analog Radio', image: img },
    { name: 'Digital Radio', image: img },

  ],
  'Insulators': [
    { name: 'Polymeric Disc Insulator', image: '/path/to/image3.jpg' },
    { name: 'Polymeric Pin Insulator', image: '/path/to/image4.jpg' },
    { name: 'polymeric Post Insulator', image: '/path/to/image4.jpg' },
    { name: 'Polymeric Drop out Fuze', image: '/path/to/image4.jpg' },
    { name: 'polymeric lightning arrestor', image: '/path/to/image4.jpg' },
    { name: 'porcelain lightning arrestor', image: '/path/to/image4.jpg' },
    { name: 'Polymer G.O.A.B Switch', image: '/path/to/image4.jpg' },
    { name: 'Porcelain G.O.A.B Switch', image: '/path/to/image4.jpg' },
    { name: 'Polymer Isolator', image: '/path/to/image4.jpg' },
    { name: 'Porcelain Isolator', image: '/path/to/image4.jpg' },  
    { name: 'Surge Counter', image: '/path/to/image4.jpg' },  
  ],
  'Public Address System': [
    { name: 'conference system', image: pda1 },
    { name: 'mixure amplifiers', image: pda2 },
    { name: 'power amplifiers', image: pda3 },
    { name: 'mixures', image: pda4 },
    { name: 'microphones', image: pda5 },
    { name: 'speakers', image: pda6 },
    { name: 'portable PA', image: pda7 },
    { name: 'counter  communication system', image: pda8 },
    { name: 'accesories', image: pda9 },
    { name: 'paging systems', image: pda10 },  
  ],
  'Camera & CCTV': [
    { name: ' Body Worn Camera', image: Junctionbox },
    { name: 'Dash Camera', image: img },
  ],
  'Fibre Optic': [
    { name: 'L3 OLT', image: Junctionbox },
    { name: 'Router and switch', image: img },
  ],
  'Tape': [
    { name: 'Self Fusing Silicon Tape High Temperature', image: '/path/to/image3.jpg' },
    { name: 'Polyester Film Silicone Adhesive Tape', image: '/path/to/image4.jpg' },
    // Add more products
  ],
};

const EnquiryModal = ({ productName, isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>X</button>
        <h2 className="text-xl font-bold mb-4">Product Inquiry</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium">Name</label>
            <input type="text" className="w-full border rounded-md p-2" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Email *</label>
            <input type="email" className="w-full border rounded-md p-2" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Phone</label>
            <input type="tel" className="w-full border rounded-md p-2" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Subject</label>
            <input type="text" className="w-full border rounded-md p-2" value={productName} readOnly />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Message</label>
            <textarea className="w-full border rounded-md p-2 h-24"></textarea>
          </div>
          <div className="mb-4">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms" className="ml-2">I agree to the website's terms and conditions</label>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition">Send</button>
        </form>
      </div>
    </div>
  );
};

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('Wireless Communication System');
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedProductName, setSelectedProductName] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const products = allProducts[selectedCategory] || [];

  const openEnquiry = (productName) => {
    setSelectedProductName(productName);
    setIsEnquiryOpen(true);
  };

  const closeEnquiry = () => setIsEnquiryOpen(false);

  return (
    <div className='w-full min-h-screen flex flex-col lg:flex-row bg-gray-100'>
      {/* Sidebar for larger screens */}
      <div className='lg:w-1/4 lg:h-full bg-blue-500 text-white p-4 shadow-lg'>
        <div onClick={() => setDropdownOpen(!dropdownOpen)} className='cursor-pointer flex justify-between items-center lg:hidden'>
          <h2 className='text-xl font-bold'>Categories</h2>
          <span className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}>▼</span>
        </div>
        <ul className={`space-y-2 mt-4 lg:block ${dropdownOpen ? 'block' : 'hidden'} lg:space-y-0 lg:mt-0`}>
          {categories.map((category) => (
            <li
              key={category}
              className={`p-2 m-2 cursor-pointer rounded-md hover:bg-white hover:text-blue-500 transition-colors duration-200 ${selectedCategory === category ? 'bg-white text-blue-500' : ''}`}
              onClick={() => {
                setSelectedCategory(category);
                setDropdownOpen(false); // Close dropdown after selecting on mobile
              }}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Products Section */}
      <div className='lg:w-3/4 mt-6 lg:mt-0 bg-white p-6 rounded-lg shadow-lg flex-1'>
        <h2 className='text-2xl font-bold text-blue-500 mb-4'>Products</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {products.map((product, index) => (
            <div key={index} className='bg-gray-50 p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-200'>
              <img src={product.image} alt={product.name} className='w-full h-52 object-cover rounded-lg mb-2' />
              <h3 className='text-lg font-semibold text-gray-800'>{product.name}</h3>
              <button
                className='mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition'
                onClick={() => openEnquiry(product.name)}
              >
                Enquire
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <EnquiryModal productName={selectedProductName} isOpen={isEnquiryOpen} onClose={closeEnquiry} />
    </div>
  );
};

export default Products;
