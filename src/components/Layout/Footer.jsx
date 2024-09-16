import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Social media icons

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Us Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-cyan-500 mb-2">About Us</h2>
            <p className="text-sm leading-relaxed text-gray-300">
              We are dedicated to providing high-quality products with a focus on innovation, 
              affordability, and exceptional customer service. Our passion is helping you find 
              the perfect solutions for your needs.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-cyan-500 mb-2">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-cyan-500 relative group">Home<span className="block h-0.5 w-0 bg-cyan-500 transition-all group-hover:w-full"></span></a></li>
              <li><a href="/about" className="hover:text-cyan-500 relative group">About<span className="block h-0.5 w-0 bg-cyan-500 transition-all group-hover:w-full"></span></a></li>
              <li><a href="/products" className="hover:text-cyan-500 relative group">Products<span className="block h-0.5 w-0 bg-cyan-500 transition-all group-hover:w-full"></span></a></li>
              <li><a href="/contact" className="hover:text-cyan-500 relative group">Contact<span className="block h-0.5 w-0 bg-cyan-500 transition-all group-hover:w-full"></span></a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-cyan-500 mb-2">Contact Us</h2>
            <p className="text-sm text-gray-300">Twincity Township, Trisulia, Bhubaneswar, Odisha-754005</p>
            <p className="text-sm text-gray-300">Email: sales@mgwing.com</p>
            <p className="text-sm text-gray-300">For more info: info@mgwing.com </p>
            <p className="text-sm text-gray-300">Phone: +91 9777481043 ,+91 9777400976</p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/profile.php?id=61565836200986" className="text-gray-300 hover:text-cyan-500 transition-colors"><FaFacebookF /></a>
              <a href="https://x.com/MGWing_" className="text-gray-300 hover:text-cyan-500 transition-colors"><FaTwitter /></a>
              <a href="https://www.instagram.com/mgwing_/" className="text-gray-300 hover:text-cyan-500 transition-colors"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/reyansh-tripathy-a81497328" className="text-gray-300 hover:text-cyan-500 transition-colors"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} MG Wing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
