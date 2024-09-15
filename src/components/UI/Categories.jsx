import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa'; // Chevron icon for dropdown

const Categories = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    "Acidity Testing Kit", "Acoustic Imager", "Battery Analysers and Testers",
    "Breath Alcohol Analyser", "Cable Fault Locator", "Cable Locator and Route Tracer",
    "Calibrator", "Capacitance Meter", "CEM Brand", "Clamp Meter", "Coming Soon",
    "Data Logger", "DC Earth Fault Locator", "Differential Pressure Manometer",
    "Digital Panel Meter", "Discharge Rods", "Distance Meter", "Earth/Ground Resistance Tester",
    "ELCB Tester", "Electrical Tester", "EMF / Gauss Meter", "Environmental Meter",
    "EV & Motor Tools", "Function Generator", "Gas Detectors & Analysers",
    "High Voltage Test Set", "Hot Line Indicator", "IC Tester", "Infrared Thermometer",
    "Insulation Tester", "Kelvin Double Bridge", "LCR Meter", "Metal Detector",
    "Metravi PRO Series", "Microohms Meter", "Milli Ohms Meter", "Million MegOhms Meter",
    "Moisture Meter", "Motor Checker", "Motor Testing Tools", "Multimeter", "Oil Test Set",
    "Oscilloscope", "Power Guard / Energy Meter", "Power Meter", "Power Quality Analyser",
    "Power Supply", "Primary Current Injection Test Set", "Radiation Scanner", "Relay Test Set",
    "Rotating Machine Tester", "Short Turn Indicator", "Solar Irradiance and Power Meter",
    "Solar MPPT Meter", "Solar Tools", "Spectrum Analyser", "Static Charge Meter",
    "Stroboscope", "Tachometer", "Test Leads", "Thermal Imager", "Thickness Gauge",
    "Time Interval Meter", "Transformer Turns Ratio Set", "UNIKS by Metravi", "Vibration Meter",
    "Water Testing Meter", "Wheatstone Bridge"
  ];
  return (
    <div className="relative z-50">
      {/* Dropdown Toggle */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center cursor-pointer text-white py-2 hover:text-gray-300 transition-colors duration-300"
      >
        Categories
        <FaChevronDown className={`ml-2 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-300 rounded-md shadow-lg max-h-80 overflow-y-auto z-50">
          <ul className="text-black">
            {categories.map((category, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-300 hover:text-black transition-colors duration-300"
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Categories;