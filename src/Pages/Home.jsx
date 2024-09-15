  import React, { useState, useEffect } from 'react';
  import Slider from '../components/UI/Slider';
  import Card from '../components/UI/Card';
  import Fridge from '../assets/Fridge.png';
  import Meter from '../assets/Meter.png';
  import Transfromer from '../assets/Transformer.png';
  import Cables from '../assets/Cables.png';
  import Insulators from '../assets/Insulators.png';
  import Speakers from '../assets/Speakers.png';
  import Mccb from '../assets/Mccb.png';
  import Lights from '../assets/Lights.png';
  import Safety from '../assets/Safety.png';
  import Tools from '../assets/Tools.png';
  import Bearings from '../assets/Bearings.png';
  import Ac from '../assets/Ac.png';
  import TV from '../assets/TV.png';
  import Computer from '../assets/Computer.png';
  import ProductSlider from '../components/UI/ProductSlider';
  import ProductSlider2 from '../components/UI/ProductSlider2';
  import Junctionbox from '../assets/Junctionbox.png';
  import Logo from '../assets/logo.png'; 
  import banner from '../assets/Banner.png';
  import banner2 from '../assets/Banner2.png';
  import { FaTruck, FaDollarSign, FaLock } from 'react-icons/fa'; // Import icons



const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // State to manage the preloader visibility

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Preloader logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide the preloader after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  const slides = [
    { title: 'Product 1', image: banner },
    { title: 'Product 2', image: banner2 },
  ];

  const cardData = [
    { title: 'Meters', image: Meter },
    { title: 'Junction box', image: Junctionbox },
    { title: 'Transformers', image: Transfromer },
    { title: 'Cables', image: Cables },
    { title: 'Lights', image: Lights },
    { title: 'Speakers', image: Speakers },
    { title: 'MCCB / MCB', image: Mccb },
    { title: 'Home Appliance', image: Fridge },
    { title: 'Safety Equipment', image: Safety },
    { title: 'Tools', image: Tools },
    { title: 'Bearings', image: Bearings },
    { title: 'Computer', image: Computer },
    { title: 'AC', image: Ac },
    { title: 'Television', image: TV },
    { title: 'Insulators', image: Insulators },
    { title: 'Insulators', image: Insulators },
  ];

  const products = [
    { name: 'Product 1', image: Fridge },
    { name: 'Product 2', image: Fridge },
    { name: 'Product 3', image: Fridge },
    { name: 'Product 4', image: Fridge },
    { name: 'Product 5', image: Fridge },
    { name: 'Product 6', image: Fridge },
  ];

  // Render the preloader if isLoading is true
  if (isLoading) {
    return (
      <div className='fixed inset-0 flex items-center justify-center bg-white'>
        <img src={Logo} alt='Logo' className='w-40 h-40 animate-pulse' />
      </div>
    );
  }

return (
  <div className='w-full bg-blue-200'>
    <Slider slides={slides} />

    {/* Info Bar Section */}
    <div className="flex flex-col md:flex-row justify-between bg-blue-800 text-white p-4 gap-4 mt-4">
      <div className="flex items-center space-x-2 w-full md:w-1/3 bg-blue-700 p-4 justify-center">
        <FaTruck className="text-xl" />
        <span>Shipping all over India</span>
      </div>
      <div className="flex items-center space-x-2 w-full md:w-1/3 bg-blue-900 p-4 justify-center">
        <FaDollarSign className="text-xl" />
        <span>Warranty & Service</span>
      </div>
      <div className="flex items-center space-x-2 w-full md:w-1/3 bg-blue-700 p-4 justify-center">
        <FaLock className="text-xl" />
        <span>100% Secure Payment</span>
      </div>
    </div>

    {/* Cards Section (hidden on mobile) */}
    <div className='p-5'>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2'>
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} image={card.image} />
        ))}
      </div>
    </div>

    {/* Featured Products Section */}
    <div className='p-6'>
      <h2 className='text-2xl font-bold mb-4'>Featured Products</h2>
      <ProductSlider products={products} />
    </div>

    <div className='p-6'>
      <ProductSlider2 products={products} />
    </div>

    {/* Logo at the bottom right with a smaller black circle and larger logo */}
    <div
      className={`fixed bottom-4 right-4 p-2 rounded-full transition-opacity duration-300 ${
        isScrolled ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <img
        src={Logo}
        alt='Logo'
        className='w-40 h-40 object-contain shadow-lg'  // Increased logo size to w-40 h-40
      />
    </div>
  </div>
);

};

export default Home;

