import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import SectionTitle from '../components/ui/SectionTitle';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact Us - Luxe Haven';
  }, []);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative py-32 bg-primary-600">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
            alt="Hotel reception" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="container relative z-10 text-center">
          <h1 className="text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            We're here to assist you with any inquiries, feedback, or special requests. Your comfort and satisfaction are our priorities.
          </p>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <SectionTitle 
                title="Get in Touch" 
                subtitle="Contact Information"
              />
              
              <p className="text-gray-600 mb-8">
                Our dedicated team is available 24/7 to assist you with any inquiries or special requests. Feel free to reach out through any of the following channels.
              </p>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-primary-50 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-gray-600 mb-1">Reservations: +1 (123) 456-7890</p>
                    <p className="text-gray-600">General Inquiries: +1 (123) 456-7891</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="bg-primary-50 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-gray-600 mb-1">Reservations: reservations@luxehaven.com</p>
                    <p className="text-gray-600">Customer Service: info@luxehaven.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="bg-primary-50 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Address</h3>
                    <p className="text-gray-600">123 Luxury Avenue, Grand City, 10001</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="bg-primary-50 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Hours</h3>
                    <p className="text-gray-600 mb-1">Front Desk: 24/7</p>
                    <p className="text-gray-600">Reservations: 8:00 AM - 10:00 PM (Local Time)</p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-serif mb-6">Send us a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                      required
                    />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                      I agree to the <a href="#" className="text-primary-600 hover:underline">Privacy Policy</a> and <a href="#" className="text-primary-600 hover:underline">Terms of Service</a>.
                    </label>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="btn btn-primary w-full md:w-auto"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <SectionTitle 
            title="Find Us" 
            subtitle="Location" 
            centered
          />
          
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
              alt="Map of Luxe Haven location" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
                <h3 className="text-xl font-serif mb-3">Luxe Haven - Grand City</h3>
                <p className="text-gray-600 mb-4">123 Luxury Avenue, Grand City, 10001</p>
                <div className="flex space-x-4">
                  <a href="#" className="btn btn-secondary py-2 px-4">
                    Get Directions
                  </a>
                  <a href="#" className="btn btn-outline py-2 px-4">
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Quick Answers" 
            centered
          />
          
          <div className="max-w-3xl mx-auto">
            {[
              { 
                question: "What are the check-in and check-out times?",
                answer: "Standard check-in time is 3:00 PM, and check-out time is 12:00 PM. Early check-in and late check-out may be available upon request, subject to availability and additional charges."
              },
              { 
                question: "Is breakfast included in the room rate?",
                answer: "Breakfast inclusion varies by room type and rate plan. Please check your reservation details or contact our reservations team to confirm whether breakfast is included in your stay."
              },
              { 
                question: "Do you offer airport transfers?",
                answer: "Yes, we offer airport transfer services for an additional fee. Please contact our concierge at least 24 hours in advance to arrange transportation."
              },
              { 
                question: "Is there a fitness center or pool?",
                answer: "Yes, our hotel features a state-of-the-art fitness center, an indoor heated pool, and an outdoor infinity pool. These facilities are complimentary for all hotel guests."
              },
              { 
                question: "What is your cancellation policy?",
                answer: "Our standard cancellation policy allows free cancellation up to 48 hours before check-in. Cancellations made within 48 hours of check-in may be subject to a charge equivalent to one night's stay."
              },
            ].map((faq, i) => (
              <motion.div 
                key={i}
                className="mb-6 border-b border-gray-200 pb-6 last:border-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3 className="text-lg font-medium mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ContactPage;