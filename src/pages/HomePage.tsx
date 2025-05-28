import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, Calendar, MapPin } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import SectionTitle from '../components/ui/SectionTitle';
import Testimonials from '../components/home/Testimonials';
import RoomShowcase from '../components/home/RoomShowcase';
import Gallery from '../components/home/Gallery';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Luxe Haven - Luxury Hotel & Resort';
  }, []);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.99],
      },
    }),
  };

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
            alt="Luxury hotel room" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/70 to-primary-600/40"></div>
        </div>
        
        <div className="container relative z-10 mt-16">
          <div className="max-w-2xl">
            <motion.h1 
              className="text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Experience Luxury <br />
              <span className="text-secondary-500">Like Never Before</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Where elegance meets exceptional service. Discover the perfect blend of comfort and sophistication at Luxe Haven.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/booking" className="btn btn-secondary">
                Book Your Stay
              </Link>
              <Link to="/rooms" className="btn btn-outline border-white text-white hover:bg-white/20">
                Explore Rooms
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <SectionTitle 
            title="Experience the Difference" 
            subtitle="Our Services" 
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Luxury Accommodations", 
                description: "Immerse yourself in elegant rooms and suites designed for ultimate comfort and relaxation.",
                image: "https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              },
              { 
                title: "Gourmet Dining", 
                description: "Savor exquisite cuisine prepared by award-winning chefs using the finest ingredients.",
                image: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              },
              { 
                title: "Spa & Wellness", 
                description: "Rejuvenate your body and mind with our range of spa treatments and wellness programs.",
                image: https://www.pexels.com/photo/woman-in-wrapped-in-white-towel-lying-on-bed-with-eyes-closed-3757942/
              },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                className="card group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={i}
                variants={fadeInUpVariants}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <Link 
                    to="#" 
                    className="inline-flex items-center text-secondary-500 font-medium hover:text-secondary-600"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Showcase */}
      <RoomShowcase />

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle
                title="A Legacy of Luxury Since 1995"
                subtitle="About Us"
              />
              <p className="text-gray-600 mb-6">
                Luxe Haven stands as a beacon of exceptional hospitality, where traditional elegance meets contemporary luxury. For over two decades, we have been redefining the standards of premium accommodation, ensuring that every guest experiences the perfect blend of comfort, service, and sophistication.
              </p>
              <p className="text-gray-600 mb-8">
                Our dedicated team of hospitality professionals works tirelessly to create memorable experiences for our guests, whether they're visiting for business or leisure. From our meticulously designed rooms to our world-class amenities, every aspect of Luxe Haven is crafted to exceed expectations.
              </p>
              <Link to="/about" className="btn btn-primary">
                Discover Our Story
              </Link>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Luxe Haven Hotel" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg max-w-xs">
                <div className="flex items-center mb-3">
                  <MapPin className="text-secondary-500 mr-2 h-5 w-5" />
                  <span className="font-medium">Prime Location</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Located in the heart of the city, just minutes away from major attractions and business districts.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Gallery */}
      <Gallery />

      {/* CTA */}
      <section className="py-20 bg-primary-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
            alt="Background pattern" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-4xl font-serif font-medium text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Ready for an Unforgettable Stay?
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-100 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Book your luxury experience today and enjoy exclusive offers for direct bookings.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to="/booking" className="btn btn-secondary">
                Book Your Stay Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default HomePage;