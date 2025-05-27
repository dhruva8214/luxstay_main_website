import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const RoomShowcase = () => {
  const [activeRoom, setActiveRoom] = useState(0);

  const rooms = [
    {
      id: 1,
      name: 'Deluxe King Room',
      description: 'Spacious room with a king-sized bed and modern amenities for a comfortable stay.',
      price: 24999,
      features: ['King Bed', 'City View', '32 m²', 'Free WiFi'],
      image: 'https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg',
    },
    {
      id: 2,
      name: 'Premium Ocean Suite',
      description: 'Luxurious suite with stunning ocean views, separate living area, and premium amenities.',
      price: 37999,
      features: ['King Bed', 'Ocean View', '48 m²', 'Living Area'],
      image: 'https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg',
    },
    {
      id: 3,
      name: 'Executive Suite',
      description: 'Elegant suite designed for business travelers with a work area and premium amenities.',
      price: 32999,
      features: ['King Bed', 'Work Desk', '42 m²', 'Lounge Access'],
      image: 'https://images.pexels.com/photos/6186815/pexels-photo-6186815.jpeg',
    },
  ];

  const nextRoom = () => {
    setActiveRoom((prev) => (prev + 1) % rooms.length);
  };

  const prevRoom = () => {
    setActiveRoom((prev) => (prev - 1 + rooms.length) % rooms.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.99],
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.99],
      },
    }),
  };

  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    nextRoom();
  };

  const handlePrev = () => {
    setDirection(-1);
    prevRoom();
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <SectionTitle 
          title="Explore Our Accommodations" 
          subtitle="Luxury Rooms & Suites" 
          centered
        />
        
        <div className="relative mt-12">
          <div className="relative overflow-hidden rounded-lg">
            <AnimatePresence custom={direction} initial={false} mode="wait">
              <motion.div
                key={activeRoom}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-1 lg:grid-cols-2 gap-0"
              >
                {/* Image */}
                <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                  <img 
                    src={rooms[activeRoom].image} 
                    alt={rooms[activeRoom].name} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                {/* Content */}
                <div className="bg-gray-50 p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-serif mb-4">{rooms[activeRoom].name}</h3>
                  
                  <p className="text-gray-600 mb-6">{rooms[activeRoom].description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {rooms[activeRoom].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-end justify-between mb-8">
                    <div>
                      <span className="text-2xl font-medium">{formatPrice(rooms[activeRoom].price)}</span>
                      <span className="text-gray-500">/night</span>
                    </div>
                    <div className="flex space-x-4">
                      <Link 
                        to={`/rooms/${rooms[activeRoom].id}`} 
                        className="inline-flex items-center text-secondary-500 font-medium hover:text-secondary-600"
                      >
                        <span>View Details</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <div className="flex items-center gap-1">
                      {rooms.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setDirection(idx > activeRoom ? 1 : -1);
                            setActiveRoom(idx);
                          }}
                          className={`w-3 h-3 rounded-full ${
                            idx === activeRoom ? 'bg-secondary-500' : 'bg-gray-300'
                          }`}
                          aria-label={`View ${rooms[idx].name}`}
                        />
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <button 
                        onClick={handlePrev}
                        className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                        aria-label="Previous room"
                      >
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={handleNext}
                        className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                        aria-label="Next room"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/rooms" className="btn btn-primary">
            View All Rooms
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RoomShowcase;