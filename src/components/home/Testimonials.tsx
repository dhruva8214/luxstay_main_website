import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Business Traveler',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      rating: 5,
      text: "Luxe Haven exceeded all my expectations. The attention to detail in every aspect of my stay was remarkable, from the personalized check-in to the immaculate room service. The staff anticipated my needs before I even had to ask. It's rare to find a hotel that combines such elegant surroundings with genuinely warm service."
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      position: 'Family Vacation',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      rating: 5,
      text: "Our family stay at Luxe Haven was nothing short of magical. The staff went above and beyond to ensure our children felt special, while still maintaining the sophistication that we adults appreciated. The family suite was spacious and thoughtfully designed, and the amenities were top-notch. We've already booked our return visit!"
    },
    {
      id: 3,
      name: 'Emma Chen',
      position: 'Honeymoon Stay',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      rating: 5,
      text: "Choosing Luxe Haven for our honeymoon was the best decision. The romantic ambiance, coupled with discreet and attentive service, created the perfect atmosphere for us. The premium suite with ocean views was breathtaking, and the special touches for honeymooners made us feel truly valued. An unforgettable experience!"
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonialVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    }),
  };

  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    nextTestimonial();
  };

  const handlePrev = () => {
    setDirection(-1);
    prevTestimonial();
  };

  return (
    <section className="py-16 bg-primary-50">
      <div className="container">
        <SectionTitle 
          title="What Our Guests Say" 
          subtitle="Testimonials" 
          centered
        />
        
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence custom={direction} initial={false} mode="wait">
            <motion.div
              key={currentTestimonial}
              custom={direction}
              variants={testimonialVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="bg-white rounded-lg shadow-lg p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name} 
                    className="w-20 h-20 rounded-full object-cover border-4 border-secondary-100"
                  />
                </div>
                
                <div>
                  <div className="flex mb-2">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-lg italic text-gray-700 mb-6">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  
                  <div>
                    <h4 className="font-medium text-lg">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-gray-600">{testimonials[currentTestimonial].position}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full bg-white shadow-md hover:bg-primary-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-6 h-6 text-primary-600" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentTestimonial ? 1 : -1);
                    setCurrentTestimonial(idx);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    idx === currentTestimonial ? 'bg-secondary-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={handleNext}
              className="p-2 rounded-full bg-white shadow-md hover:bg-primary-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-6 h-6 text-primary-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;