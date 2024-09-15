// import React, { useState } from 'react';

// const Admin = () => {
//   const [categories, setCategories] = useState([
//    "Acidity Testing Kit", "Acoustic Imager", "Battery Analysers and Testers",
//   "Breath Alcohol Analyser", "Cable Fault Locator", "Cable Locator and Route Tracer",
//   "Calibrator", "Capacitance Meter", "CEM Brand", "Clamp Meter", "Coming Soon",
//   "Data Logger", "DC Earth Fault Locator", "Differential Pressure Manometer",
//   "Digital Panel Meter", "Discharge Rods", "Distance Meter", "Earth/Ground Resistance Tester",
//   "ELCB Tester", "Electrical Tester", "EMF / Gauss Meter", "Environmental Meter",
//   "EV & Motor Tools", "Function Generator", "Gas Detectors & Analysers",
//   "High Voltage Test Set", "Hot Line Indicator", "IC Tester", "Infrared Thermometer",
//   "Insulation Tester", "Kelvin Double Bridge", "LCR Meter", "Metal Detector",
//   "Metravi PRO Series", "Microohms Meter", "Milli Ohms Meter", "Million MegOhms Meter",
//   "Moisture Meter", "Motor Checker", "Motor Testing Tools", "Multimeter", "Oil Test Set",
//   "Oscilloscope", "Power Guard / Energy Meter", "Power Meter", "Power Quality Analyser",
//   "Power Supply", "Primary Current Injection Test Set", "Radiation Scanner", "Relay Test Set",
//   "Rotating Machine Tester", "Short Turn Indicator", "Solar Irradiance and Power Meter",
//   "Solar MPPT Meter", "Solar Tools", "Spectrum Analyser", "Static Charge Meter",
//   "Stroboscope", "Tachometer", "Test Leads", "Thermal Imager", "Thickness Gauge",
//   "Time Interval Meter", "Transformer Turns Ratio Set", "UNIKS by Metravi", "Vibration Meter",
//   "Water Testing Meter", "Wheatstone Bridge"
//   ]);
//   const [allProducts, setAllProducts] = useState({
//     'Acidity Testing Kit': [
//       { name: 'Acidity Kit A', image: 'path/to/image.jpg' },
//       { name: 'Acidity Kit B', image: 'path/to/image.jpg' },
//     ],
    
//   });

  
//   const [newCategory, setNewCategory] = useState('');
//   const [newProduct, setNewProduct] = useState({ name: '', image: '', category: '' });
//   const [activeSection, setActiveSection] = useState('categories'); // For tracking the active section

//   // Add Category
//   const addCategory = () => {
//     if (newCategory) {
//       setCategories([...categories, newCategory]);
//       setNewCategory('');
//     }
//   };

//   // Add Product
//   const addProduct = () => {
//     if (newProduct.name && newProduct.image && newProduct.category) {
//       const updatedProducts = { ...allProducts };
//       if (!updatedProducts[newProduct.category]) {
//         updatedProducts[newProduct.category] = [];
//       }
//       updatedProducts[newProduct.category].push({
//         name: newProduct.name,
//         image: newProduct.image,
//       });
//       setAllProducts(updatedProducts);
//       setNewProduct({ name: '', image: '', category: '' });
//     }
//   };

//   // Render different sections based on activeSection
//   const renderSection = () => {
//     switch (activeSection) {
//       case 'categories':
//         return (
//           <div>
//             <h2 className="text-xl mb-4">Add Category</h2>
//             <input
//               type="text"
//               value={newCategory}
//               onChange={(e) => setNewCategory(e.target.value)}
//               placeholder="New Category"
//               className="border p-2 mr-2"
//             />
//             <button onClick={addCategory} className="bg-blue-500 text-white px-4 py-2">
//               Add Category
//             </button>

//             <h2 className="text-xl mt-8 mb-4">Categories</h2>
//             <ul>
//               {categories.map((category, idx) => (
//                 <li key={idx}>{category}</li>
//               ))}
//             </ul>
//           </div>
//         );
//       case 'products':
//         return (
//           <div>
//             <h2 className="text-xl mb-4">Add Product</h2>
//             <input
//               type="text"
//               value={newProduct.name}
//               onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
//               placeholder="Product Name"
//               className="border p-2 mr-2"
//             />
//             <input
//               type="text"
//               value={newProduct.image}
//               onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
//               placeholder="Product Image URL"
//               className="border p-2 mr-2"
//             />
//             <select
//               value={newProduct.category}
//               onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
//               className="border p-2 mr-2"
//             >
//               <option value="">Select Category</option>
//               {categories.map((category, idx) => (
//                 <option key={idx} value={category}>{category}</option>
//               ))}
//             </select>
//             <button onClick={addProduct} className="bg-blue-500 text-white px-4 py-2">
//               Add Product
//             </button>

//             <h2 className="text-xl mt-8 mb-4">Products by Category</h2>
//             {categories.map((category) => (
//               <div key={category} className="mb-6">
//                 <h3 className="text-lg font-bold">{category}</h3>
//                 {allProducts[category] ? (
//                   <ul>
//                     {allProducts[category].map((product, idx) => (
//                       <li key={idx}>{product.name}</li>
//                     ))}
//                   </ul>
//                 ) : (
//                   <p>No products for this category.</p>
//                 )}
//               </div>
//             ))}
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <div className="w-1/4  bg-gray-800 text-white p-6">
//         <h1 className="text-2xl mb-6">Admin Panel</h1>
//         <ul>
//           <li className={`cursor-pointer mb-4 ${activeSection === 'categories' ? 'font-bold' : ''}`}
//             onClick={() => setActiveSection('categories')}>
//             Categories
//           </li>
//           <li className={`cursor-pointer ${activeSection === 'products' ? 'font-bold' : ''}`}
//             onClick={() => setActiveSection('products')}>
//             Products
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="w-3/4 p-8">
//         {renderSection()}
//       </div>
//     </div>
//   );
// };

// export default Admin;

import React, { useState } from 'react';

const Admin = () => {
  const [categories, setCategories] = useState([
    "Acidity Testing Kit", "Acoustic Imager", "Battery Analysers and Testers",
    "Breath Alcohol Analyser", "Cable Fault Locator", "Cable Locator and Route Tracer",
    "Calibrator", "Capacitance Meter", "CEM Brand", "Clamp Meter", "Coming Soon",
    // ... (rest of the categories)
  ]);

  const [allProducts, setAllProducts] = useState({
    'Acidity Testing Kit': [
      { name: 'Acidity Kit A', image: 'path/to/image.jpg' },
      { name: 'Acidity Kit B', image: 'path/to/image.jpg' },
    ],
  });

  const [newCategory, setNewCategory] = useState('');
  const [newProduct, setNewProduct] = useState({ name: '', image: '', category: '' });
  const [activeSection, setActiveSection] = useState('categories');

  // Add Category
  const addCategory = () => {
    if (newCategory) {
      setCategories([...categories, newCategory]);
      setNewCategory('');
    }
  };

  // Add Product
  const addProduct = () => {
    if (newProduct.name && newProduct.image && newProduct.category) {
      const updatedProducts = { ...allProducts };
      if (!updatedProducts[newProduct.category]) {
        updatedProducts[newProduct.category] = [];
      }
      updatedProducts[newProduct.category].push({
        name: newProduct.name,
        image: newProduct.image,
      });
      setAllProducts(updatedProducts);
      setNewProduct({ name: '', image: '', category: '' });
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'categories':
        return (
          <div>
            <h2 className="text-xl mb-4">Add Category</h2>
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="New Category"
              className="border p-2 mr-2 w-full md:w-1/2"
            />
            <button onClick={addCategory} className="bg-blue-500 text-white px-4 py-2 mt-2 md:mt-0">
              Add Category
            </button>

            <h2 className="text-xl mt-8 mb-4">Categories</h2>
            <ul className="list-disc pl-4">
              {categories.map((category, idx) => (
                <li key={idx} className="mb-2">{category}</li>
              ))}
            </ul>
          </div>
        );
      case 'products':
        return (
          <div>
            <h2 className="text-xl mb-4">Add Product</h2>
            <input
              type="text"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              placeholder="Product Name"
              className="border p-2 mr-2 w-full md:w-1/3"
            />
            <input
              type="text"
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
              placeholder="Product Image URL"
              className="border p-2 mr-2 w-full md:w-1/3"
            />
            <select
              value={newProduct.category}
              onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
              className="border p-2 mr-2 w-full md:w-1/3"
            >
              <option value="">Select Category</option>
              {categories.map((category, idx) => (
                <option key={idx} value={category}>{category}</option>
              ))}
            </select>
            <button onClick={addProduct} className="bg-blue-500 text-white px-4 py-2 mt-2 md:mt-0">
              Add Product
            </button>

            <h2 className="text-xl mt-8 mb-4">Products by Category</h2>
            {categories.map((category) => (
              <div key={category} className="mb-6">
                <h3 className="text-lg font-bold">{category}</h3>
                {allProducts[category] ? (
                  <ul className="list-disc pl-4">
                    {allProducts[category].map((product, idx) => (
                      <li key={idx}>{product.name}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No products for this category.</p>
                )}
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-gray-800 text-white p-6 lg:min-h-screen">
        <h1 className="text-2xl mb-6">Admin Panel</h1>
        <ul>
          <li
            className={`cursor-pointer mb-4 ${activeSection === 'categories' ? 'font-bold' : ''}`}
            onClick={() => setActiveSection('categories')}
          >
            Categories
          </li>
          <li
            className={`cursor-pointer ${activeSection === 'products' ? 'font-bold' : ''}`}
            onClick={() => setActiveSection('products')}
          >
            Products
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-3/4 p-6 lg:p-8">
        {renderSection()}
      </div>
    </div>
  );
};

export default Admin;
