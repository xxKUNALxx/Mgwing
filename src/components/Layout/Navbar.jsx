
import React, { useState, useEffect, useRef } from 'react';
import { FiHeart, FiShoppingCart, FiUser, FiChevronDown, FiMenu, FiX, FiSearch } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo1 from '../../assets/logo1.png';
import Categories from '../UI/Categories'; 
import Searchbar from './Searchbar';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const dropdownRef = useRef(null);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Ensure only one dropdown/search is open at a time
  const toggleDropdown = () => {
    setDropdownOpen((prev) => {
      if (!prev) {
        setSearchOpen(false); // Close search if dropdown opens
      }
      return !prev;
    });
  };

  const toggleSearch = () => {
    setSearchOpen((prev) => {
      if (!prev) {
        setDropdownOpen(false); // Close dropdown if search opens
      }
      return !prev;
    });
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const closeAll = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
    setSearchOpen(false);
  };

  // Close dropdowns on route change
  useEffect(() => {
    closeAll();
  }, [location.pathname]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (dropdownOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) ||
        (searchOpen && searchRef.current && !searchRef.current.contains(event.target))
      ) {
        closeAll();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside); // Add touchstart for mobile
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [dropdownOpen, searchOpen]);

  return (
    <div className="w-full h-20 bg-blue-500 flex items-center px-4 lg:px-8 relative z-50">
      {/* Logo Section */}
      <Link to="/">
        <div className="flex-shrink-0 lg:size-28 md:size-28 sm:size-5">
          <img src={logo1} alt="Logo" className="w-28 h-28 object-contain" />
        </div>
      </Link>

      {/* Searchbar Section for Larger Screens */}
      <div className="flex-1 hidden lg:flex">
        <Searchbar />
      </div>

      {/* Center Section with Links for Large Screens */}
      <div className="hidden lg:flex flex-grow items-center justify-center space-x-8">
        <Link to="/" className="text-white hover:text-neutral-700">
          Home
        </Link>
        <Categories />
        <Link to="/products" className="text-white hover:text-neutral-700">
          Products
        </Link>
        <Link to="/aboutus" className="text-white hover:text-neutral-700">
          About Us
        </Link>
      </div>

      {/* Icons Section */}
      <div className="flex items-center space-x-4 lg:space-x-6 ml-auto">
        {/* Search Icon for Mobile */}
        <div className="lg:hidden" ref={searchRef}>
          <button onClick={toggleSearch} className="text-white focus:outline-none">
            <FiSearch className="mt-2 text-2xl" />
          </button>
        </div>
        
        <Link to="/whishlist">
          <FiHeart className="text-xl text-white hover:text-red-500" />
        </Link>

        {/* Dropdown for User Profile */}
        <div className="relative" ref={dropdownRef}>
          <div
            className="flex items-center cursor-pointer text-white"
            onClick={(e) => {
              toggleDropdown();
              e.stopPropagation();
            }}
          >
            <FiUser className="text-xl hover:text-amber-400" />
            <FiChevronDown className="ml-1 text-white" />
          </div>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-black text-white shadow-lg rounded-md z-50">
              <Link 
                to="/admin" 
                className="block px-4 py-2 hover:bg-blue-400"
                onClick={(e) => {
                  e.stopPropagation();
                  closeAll();
                }} 
              >
                Admin Dashboard
              </Link>
              <Link 
                to="/orders" 
                className="block px-4 py-2 hover:bg-blue-400"
                onClick={(e) => {
                  e.stopPropagation();
                  closeAll();
                }} 
              >
                My Orders
              </Link>
              <Link 
                to="/profile" 
                className="block px-4 py-2 hover:bg-blue-400"
                onClick={(e) => {
                  e.stopPropagation();
                  closeAll();
                }} 
              >
                Profile
              </Link>
              <Link 
                to="/logout" 
                className="block px-4 py-2 hover:bg-blue-400"
                onClick={(e) => {
                  e.stopPropagation();
                  closeAll();
                }} 
              >
                Logout
              </Link>
            </div>
          )}
        </div>

        {/* Burger Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {menuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-blue-500 p-4 space-y-4 z-50">
          <Link 
            to="/" 
            className="block text-white hover:text-neutral-700" 
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Categories />
          <Link 
            to="/products" 
            className="block text-white hover:text-neutral-700"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>
          <Link 
            to="/aboutus" 
            className="block text-white hover:text-neutral-700"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
        </div>
      )}

      {/* Mobile Searchbar */}
      {searchOpen && (
        <div className="absolute top-20 left-0 w-full bg-blue-500 p-4 z-50" ref={searchRef} onClick={(e) => e.stopPropagation()}>
          <Searchbar />
        </div>
      )}
    </div>
  );
};

export default Navbar;
