import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Maximize, Coffee, Wifi, ArrowRight } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import SectionTitle from '../components/ui/SectionTitle';

const RoomsPage = () => {
  useEffect(() => {
    document.title = 'Rooms & Suites - Luxe Haven';
  }, []);

  const rooms = [
    {
      id: 1,
      name: 'Deluxe King Room',
      description: 'Spacious room with a king-sized bed and modern amenities for a comfortable stay.',
      price: 299,
      capacity: 2,
      size: 32,
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      amenities: ['King Bed', 'City View', 'Free WiFi', 'Minibar', 'Room Service']
    },
    {
      id: 2,
      name: 'Premium Ocean Suite',
      description: 'Luxurious suite with stunning ocean views, separate living area, and premium amenities.',
      price: 459,
      capacity: 2,
      size: 48,
      image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      amenities: ['King Bed', 'Ocean View', 'Free WiFi', 'Minibar', 'Living Area', 'Premium Toiletries']
    },
    {
      id: 3,
      name: 'Executive Suite',
      description: 'Elegant suite designed for business travelers with a work area and premium amenities.',
      price: 399,
      capacity: 2,
      size: 42,
      image: 'https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      amenities: ['King Bed', 'Work Desk', 'Free WiFi', 'Espresso Machine', 'Lounge Access']
    },
    {
      id: 4,
      name: 'Family Suite',
      description: 'Spacious suite with separate bedrooms, perfect for families or small groups.',
      price: 529,
      capacity: 4,
      size: 68,
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      amenities: ['2 Bedrooms', 'City View', 'Free WiFi', 'Kitchenette', 'Family Entertainment']
    },
    {
      id: 5,
      name: 'Penthouse Suite',
      description: 'Our most luxurious suite with panoramic views, private terrace, and premium services.',
      price: 899,
      capacity: 2,
      size: 96,
      image: 'https://images.pexels.com/photos/3201763/pexels-photo-3201763.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      amenities: ['King Bed', 'Panoramic View', 'Private Terrace', 'Butler Service', 'Jacuzzi']
    },
    {
      id: 6,
      name: 'Deluxe Twin Room',
      description: 'Comfortable room with two twin beds, ideal for friends or colleagues traveling together.',
      price: 279,
      capacity: 2,
      size: 32,
      image: 'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      amenities: ['Twin Beds', 'Garden View', 'Free WiFi', 'Desk', 'Room Service']
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative py-32 bg-primary-600">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
            alt="Luxury hotel room" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="container relative z-10 text-center">
          <h1 className="text-white mb-6">Rooms & Suites</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Discover our collection of meticulously designed accommodations, each offering a unique blend of comfort and luxury.
          </p>
        </div>
      </section>

      {/* Rooms Filter */}
      <section className="py-8 bg-white shadow-md">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-4">
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option>All Room Types</option>
                <option>Deluxe Rooms</option>
                <option>Premium Suites</option>
                <option>Family Suites</option>
                <option>Executive Suites</option>
              </select>
              
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option>Any Price</option>
                <option>$0 - $299</option>
                <option>$300 - $499</option>
                <option>$500 - $699</option>
                <option>$700+</option>
              </select>
              
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option>Any Capacity</option>
                <option>1-2 Guests</option>
                <option>3-4 Guests</option>
                <option>5+ Guests</option>
              </select>
            </div>
            
            <div className="ml-auto">
              <button className="btn btn-primary">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <SectionTitle 
            title="Find Your Perfect Accommodation" 
            subtitle="Luxury Choices"
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {rooms.map((room) => (
              <motion.div 
                key={room.id}
                className="card group overflow-hidden"
                variants={itemVariants}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-white font-medium">${room.price}</span>
                        <span className="text-gray-300 text-sm">/night</span>
                      </div>
                      <div className="flex items-center text-white text-sm">
                        <Users className="h-4 w-4 mr-1" />
                        <span>Max: {room.capacity}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-2">{room.name}</h3>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  
                  <div className="flex items-center mb-6 text-sm text-gray-500">
                    <div className="flex items-center mr-4">
                      <Users className="h-4 w-4 mr-1 text-secondary-500" />
                      <span>{room.capacity} Guests</span>
                    </div>
                    <div className="flex items-center">
                      <Maximize className="h-4 w-4 mr-1 text-secondary-500" />
                      <span>{room.size} m²</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.amenities.slice(0, 3).map((amenity, index) => (
                      <span 
                        key={index} 
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-50 text-primary-700"
                      >
                        {amenity === 'Free WiFi' && <Wifi className="h-3 w-3 mr-1" />}
                        {amenity === 'Espresso Machine' && <Coffee className="h-3 w-3 mr-1" />}
                        {amenity}
                      </span>
                    ))}
                    {room.amenities.length > 3 && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                        +{room.amenities.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Link 
                      to={`/rooms/${room.id}`} 
                      className="inline-flex items-center text-secondary-500 font-medium hover:text-secondary-600"
                    >
                      <span>View Details</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link 
                      to="/booking" 
                      className="btn btn-primary py-2 px-4"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-white mb-6">Can't Decide? Contact Our Reservation Team</h2>
              <p className="text-gray-100 mb-8">
                Our dedicated team is available 24/7 to help you find the perfect accommodation for your needs and preferences.
              </p>
              <Link to="/contact" className="btn btn-secondary">
                Get in Touch
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-serif mb-6">Special Offers</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-secondary-500 text-white text-sm mr-3 mt-0.5">1</span>
                  <div>
                    <h4 className="font-medium mb-1">Early Bird Discount</h4>
                    <p className="text-sm text-gray-600">Book 30 days in advance and save up to 20%</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-secondary-500 text-white text-sm mr-3 mt-0.5">2</span>
                  <div>
                    <h4 className="font-medium mb-1">Extended Stay</h4>
                    <p className="text-sm text-gray-600">Stay 5+ nights and receive a complimentary spa treatment</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-secondary-500 text-white text-sm mr-3 mt-0.5">3</span>
                  <div>
                    <h4 className="font-medium mb-1">Honeymoon Package</h4>
                    <p className="text-sm text-gray-600">Special amenities and experiences for newlyweds</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default RoomsPage;