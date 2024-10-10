import React from 'react';
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white py-16">
      <div className="container mx-auto px-16">
        {/* Footer Top Section */}
        <div className="grid  md:grid-cols-4 gap-8 mb-8">
          {/* MG Enterprises Section */}
          <div className=" space-y-6">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-bold text-cyan-500">MG Enterprises</h2>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Twincity Township,<br/> Trisulia, Bhubaneswar,<br/> Odisha-754005
              <br /> GSTIN: 21ABVFM0775C1ZB
            </p>
          </div>

          {/* Legals Section */}
          <div className=" space-y-6  mx-8">
            <h2 className="text-xl font-semibold text-cyan-500">Legal</h2>
            <ul className="space-y-3">
              {['FAQs', 'Terms & Conditions', 'Privacy Policy', 'Return & Warranty Policy'].map((legal) => (
                <li key={legal}>
                  <a  className="hover:text-cyan-500 relative group text-sm">
                    {legal}
                    <span className="block h-0.5 w-0 bg-cyan-500 transition-all group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="md:col-span-1 space-y-6">
            <h2 className="text-xl font-semibold text-cyan-500">Contact Us</h2>
            <div className="space-y-4 text-gray-400">
              <p className="text-sm leading-relaxed">
                For Sales Inquiry:&nbsp;
                <a href="mailto:sales@mgwing.com" target="_blank" className="hover:text-cyan-500">
                sales@mgwing.com
                </a>
              </p>
              <p className="text-sm leading-relaxed">
                More Information:&nbsp; 
                <a href="mailto:info@mgwing.com" target="_blank" className="hover:text-cyan-500">
                  info@mgwing.com
                </a>
              </p>
              <p className="text-sm leading-relaxed">
                Contact Numbers <br />
                +91 9777400976 <br /> +91 9777481043
              </p>
            </div>
          </div>

          {/* Social Media Icons Section */}
          <div className="md:col-span-1  space-y-6 mx-10">
            <h2 className="text-xl font-semibold text-cyan-500">Follow Us</h2>
            <div className="flex space-x-6 text-2xl">
              {[
                { icon: FaLinkedinIn, link: 'https://www.linkedin.com/in/reyansh-tripathy-a81497328' },
                { icon: FaFacebookF, link: 'https://www.facebook.com/profile.php?id=61565836200986' },
                { icon: FaInstagram, link: 'https://www.instagram.com/mgwing_/' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="text-gray-300 hover:text-cyan-500 transition-colors"
                >
                  {React.createElement(social.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} MG Wing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
