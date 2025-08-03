import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Maximize, ArrowLeft, ArrowRight } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';

// This would typically come from an API
const getRoomById = (id: string) => {
  const rooms = [
    {
      id: '1',
      name: 'Deluxe King Room',
      description: 'Our Deluxe King Room offers the perfect blend of comfort and elegance. Featuring a plush king-sized bed with premium linens, a spacious work area, and a modern bathroom with a rain shower, this room provides everything you need for a relaxing stay. The floor-to-ceiling windows offer stunning city views, while the thoughtfully designed layout maximizes space and comfort.',
      fullDescription: `
        <p>Our Deluxe King Room offers the perfect blend of comfort and elegance. Featuring a plush king-sized bed with premium linens, a spacious work area, and a modern bathroom with a rain shower, this room provides everything you need for a relaxing stay.</p>
        <p>The floor-to-ceiling windows offer stunning city views, while the thoughtfully designed layout maximizes space and comfort. Every detail, from the carefully selected artwork to the ambient lighting, has been curated to create a serene and sophisticated atmosphere.</p>
        <p>Guests in our Deluxe King Rooms also enjoy complimentary high-speed Wi-Fi, a 55-inch smart TV with streaming capabilities, a Nespresso coffee machine, and a fully stocked minibar with premium selections.</p>
      `,
      price: 24999,
      capacity: 2,
      size: 32,
      bedType: 'King',
      view: 'City View',
      images: [
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/98153/pexels-photo-98153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      ],
      amenities: [
        'King-sized bed with premium linens',
        'Flat-screen TV with cable channels',
        'High-speed Wi-Fi',
        'Work desk with ergonomic chair',
        'In-room safe',
        'Mini refrigerator',
        'Coffee and tea making facilities',
        'Air conditioning with individual control',
        'Bathrobes and slippers',
        'Luxury toiletries',
        'Hairdryer',
        'Iron and ironing board',
        'Daily housekeeping',
        '24-hour room service',
      ],
      policies: [
        'Check-in: 3:00 PM',
        'Check-out: 12:00 PM',
        'Early check-in and late check-out available (fees may apply)',
        'No smoking',
        'Pets not allowed',
        'Cancellation: Free up to 48 hours before check-in',
      ],
    },
    // Additional rooms would be defined here
  ];
  
  return rooms.find(room => room.id === id) || rooms[0]; // Default to first room if not found
};

const RoomDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImage, setActiveImage] = useState(0);
  const room = getRoomById(id || '1');

  useEffect(() => {
    document.title = `${room.name} - Luxe Haven`;
    window.scrollTo(0, 0);
  }, [room.name]);

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  return (
    <PageTransition>
      <div className="pt-20">
        {/* Gallery */}
        <section className="relative">
          <div className="relative h-[60vh] overflow-hidden">
            <motion.img 
              key={activeImage}
              src={room.images[activeImage]} 
              alt={room.name} 
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
            
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              onClick={nextImage}
              aria-label="Next image"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
            
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {room.images.map((_, idx) => (
                <button
                  key={idx}
                  className={`h-2 w-16 rounded-full transition-colors ${
                    idx === activeImage ? 'bg-white' : 'bg-white/50'
                  }`}
                  onClick={() => setActiveImage(idx)}
                  aria-label={`View image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="absolute bottom-4 left-4 flex gap-2">
            {room.images.slice(0, 4).map((image, idx) => (
              <button
                key={idx}
                className={`w-16 h-16 rounded overflow-hidden border-2 transition-colors ${
                  idx === activeImage ? 'border-secondary-500' : 'border-transparent'
                }`}
                onClick={() => setActiveImage(idx)}
                aria-label={`View image ${idx + 1}`}
              >
                <img 
                  src={image} 
                  alt={`Room view ${idx + 1}`} 
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </section>

        {/* Room Details */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="flex items-center mb-4">
                  <Link to="/rooms" className="text-gray-500 hover:text-primary-600 flex items-center">
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    <span>Back to Rooms</span>
                  </Link>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-serif mb-4">{room.name}</h1>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-1 text-secondary-500" />
                    <span>{room.capacity} Guests</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Maximize className="h-5 w-5 mr-1 text-secondary-500" />
                    <span>{room.size} m²</span>
                  </div>
                  <div className="text-gray-600">
                    {room.bedType}
                  </div>
                  <div className="text-gray-600">
                    {room.view}
                  </div>
                </div>
                
                <div className="prose max-w-none mb-8" dangerouslySetInnerHTML={{ __html: room.fullDescription }} />
                
                <div className="mb-8">
                  <h3 className="text-xl font-serif mb-4">Room Amenities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {room.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-secondary-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-serif mb-4">Policies</h3>
                  <ul className="space-y-2">
                    {room.policies.map((policy, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-secondary-500 mr-2 mt-2" />
                        <span>{policy}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Sidebar */}
              <div>
                <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                  <h3 className="text-xl font-serif mb-4">Book This Room</h3>
                  
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <span className="text-2xl font-medium">₹{room.price.toLocaleString()}</span>
                      <span className="text-gray-500">/night</span>
                    </div>
                    <div className="flex items-center text-yellow-500">
                      <span className="text-sm text-gray-600 ml-1">Exclusive of taxes</span>
                    </div>
                  </div>
                  
                  <form className="space-y-4 mb-6">
                    <div>
                      <label htmlFor="check-in" className="block text-sm font-medium text-gray-700 mb-1">
                        Check-in
                      </label>
                      <input
                        type="date"
                        id="check-in"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="check-out" className="block text-sm font-medium text-gray-700 mb-1">
                        Check-out
                      </label>
                      <input
                        type="date"
                        id="check-out"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                        Guests
                      </label>
                      <select
                        id="guests"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      >
                        <option>1 Guest</option>
                        <option>2 Guests</option>
                      </select>
                    </div>
                  </form>
                  
                  <div className="space-y-4">
                    <button className="w-full btn btn-primary">
                      Book Now
                    </button>
                    <button className="w-full btn btn-outline">
                      Request Information
                    </button>
                  </div>
                  
                  <hr className="my-6" />
                  
                  <div className="text-center text-sm text-gray-500">
                    <p>Need assistance with your booking?</p>
                    <p className="font-medium text-primary-600 mt-1">Call us at +1 (123) 456-7890</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Rooms */}
        <section className="py-12 bg-gray-50">
          <div className="container">
            <h2 className="text-2xl font-serif mb-8">You May Also Like</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  id: 2,
                  name: 'Premium Ocean Suite',
                  price: 37999,
                  image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                },
                {
                  id: 3,
                  name: 'Executive Suite',
                  price: 32999,
                  image: 'https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                },
                {
                  id: 6,
                  name: 'Deluxe Twin Room',
                  price: 22999,
                  image: 'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                },
              ].map((relatedRoom) => (
                <div key={relatedRoom.id} className="card group overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={relatedRoom.image} 
                      alt={relatedRoom.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <span className="text-white font-medium">₹{relatedRoom.price.toLocaleString()}</span>
                      <span className="text-gray-300 text-sm">/night</span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-serif mb-4">{relatedRoom.name}</h3>
                    <Link 
                      to={`/rooms/${relatedRoom.id}`} 
                      className="inline-flex items-center text-secondary-500 font-medium hover:text-secondary-600"
                    >
                      <span>View Details</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default RoomDetailPage;