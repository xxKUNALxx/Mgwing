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
  import valves from '../assets/16.png';

  
  // import img1 from '../assets/featured/1.png';
  // import img2 from '../assets/featured/2.png';
  // import img3 from '../assets/featured/3.png';
  import img4 from '../assets/featured/4.png';
  import img5 from '../assets/featured/5.png';
  import img6 from '../assets/featured/6.png';
  import img7 from '../assets/featured/7.png';
  import img8 from '../assets/featured/8.png';
  import img9 from '../assets/featured/9.png';

  import img10 from '../assets/featured/10.png';
  import img11 from '../assets/featured/11.png';
  import img12 from '../assets/featured/12.png';
  import img13 from '../assets/featured/13.png';
  import img14 from '../assets/featured/14.png';
  import img15 from '../assets/featured/15.png';
  import img16 from '../assets/featured/16.png';
  import img17 from '../assets/featured/17.png';
  import img18 from '../assets/featured/18.png';
  import img19 from '../assets/featured/19.png';

  import img20 from '../assets/featured/20.png';
  import img21 from '../assets/featured/21.png';
  import img22 from '../assets/featured/22.png';
  import img23 from '../assets/featured/23.png';
  import img24 from '../assets/featured/24.png';
  import img25 from '../assets/featured/25.png';
  import img26 from '../assets/featured/26.png';
  import img27 from '../assets/featured/27.png';
  import img28 from '../assets/featured/28.png';
  import img29 from '../assets/featured/29.png';

  import img30 from '../assets/featured/30.png';
  import img31 from '../assets/featured/31.png';
  import img32 from '../assets/featured/32.png';
  import img33 from '../assets/featured/33.png';
  import img34 from '../assets/featured/34.png';
  import img35 from '../assets/featured/35.png';
  import img36 from '../assets/featured/36.png';
  import img37 from '../assets/featured/37.png';
  import img38 from '../assets/featured/38.png';
  import img39 from '../assets/featured/39.png';
  import img40 from '../assets/featured/40.png';
  import img41 from '../assets/featured/41.png';
  import img42 from '../assets/featured/42.png';
  import img43 from '../assets/featured/43.png';
  import img44 from '../assets/featured/44.png';
  import img45 from '../assets/featured/45.png';
  import img46 from '../assets/featured/46.png';
  import img47 from '../assets/featured/47.png';
  import img48 from '../assets/featured/48.png';



  
  import { FaTruck, FaDollarSign, FaLock } from 'react-icons/fa'; // Import icons
import ProductSlider3 from '../components/UI/ProductSlider3';



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
    { title: 'Measuring Instruments', image: Meter },
    { title: 'Enclosures & Junction Boxes', image: Junctionbox },
    { title: 'Transformers', image: Transfromer , desc:'Power & Distribution' },
    { title: 'Wires & Cables', image: Cables },
    { title: 'LED Lights', image: Lights , desc:'street & flood'},
    { title: 'Public Address System', image: Speakers },
    { title: 'Switch Gears', image: Mccb ,desc:'MCB & MCCB'},
    { title: 'Home Appliance', image: Fridge },
    { title: 'Industrial Safety Products', image: Safety },
    { title: 'Industrial Tools', image: Tools },
    { title: 'Bearings', image: Bearings },
    { title: 'Computer Servers & Printers ', image: Computer },
    { title: 'AC & Cooling Units', image: Ac },
    { title: 'Television', image: TV },
    { title: 'Insulators', image: Insulators },
    { title: 'Industrial Valves', image: valves },
  ];

  const products = [
      // { name: 'Product 1', image: img1 },
      // { name: 'Product 2', image: img2 },
      // { name: 'Product 3', image: img3 },
    { name: 'Lightning Arresters', image: img4 },
    // { name: 'Product 5', image: img5 },
    // { name: 'Product 6', image: img6 },
    // { name: 'Product 6', image: img7 },
    // { name: 'Product 6', image: img8 },
    { name: 'Rescue & Discharge rods', image: img9 },
    { name: 'Neutral Grounding Resistors', image: img10 },
    { name: 'Float Cum Boost Charger', image: img11 },
    { name: 'Isolators', image: img12 },
    { name: 'Neutral Isolation Panel', image: img13 },
    { name: 'Online UPS & Power Solutions', image: img14 },
    // { name: 'Product 6', image: img15 },
    // { name: 'Product 6', image: img16 },
  ];

  const products1 = [
    // { name: 'Product 6', image: img17 },
    { name: 'Connector Lugs', image: img18 },
    { name: 'Electromagnetic Flow Meter', image: img19 },
    { name: 'Sprinkler & Rain Guns', image: img20 },
    { name: 'Electrical Gloves', image: img21 },
    { name: 'Electro-Mechanical Tapes', image: img22 },
    // { name: 'Product 6', image: img23 },
    { name: 'Traffic & Road Safety Products', image: img24 },
    { name: 'Loto Kits', image: img25 },
    { name: 'Fire & Safety Products', image: img26 },
    { name: 'Insulating Mats', image: img27 },
    { name: 'Sling Webs', image: img28 },
    { name: 'Alcohol Breath Analyzer', image: img29 },
    { name: 'LED Search Light', image: img30 },
    { name: 'Wireless Communication System', image: img31 },
    { name: 'Optical Network System', image: img32 },


  ];

  const products2 = [
    { name: 'Video Conferencing Endpoints', image: img33 },
    { name: 'Security Control System', image: img34 },
    { name: 'Body Cameras with facial recognition', image: img35 },
    { name: 'Networking & Optical Fiber Cables', image: img36 },
    { name: 'Netgear LAN Solutions', image: img37 },
    { name: 'FOSC, Media Converters & SFP Modules', image: img38 },
    { name: 'Neutral Isolation Panel', image: img39 },
    { name: 'Welding Machine', image: img40 },
    // { name: 'Product 6', image: img41 },
    { name: 'Interactive Panels & Teaching Solution', image: img42 },
    // { name: 'Product 6', image: img43 },
    // { name: 'Product 6', image: img44 },
    // { name: 'Product 6', image: img45 },
    // { name: 'Product 6', image: img46 },
    { name: 'FPO Storage Bins', image: img47 },
    { name: 'Bio-Hazard Bags', image: img48 },
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
          <Card key={index} title={card.title} image={card.image} desc={card.desc}/>
        ))}
      </div>
    </div>

    {/* Featured Products Section */}
    <div className='p-6'>
      <h2 className='text-2xl font-bold mb-4'>Featured Products</h2>
      <ProductSlider products={products} />
    </div>

    <div className='p-6'>
      <ProductSlider2 products={products1} />
    </div>

    <div className='p-6'>
      <ProductSlider3 products={products2} />
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

