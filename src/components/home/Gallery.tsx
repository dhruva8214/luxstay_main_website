import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg',
      category: 'Rooms',
      title: 'Luxury Suite'
    },
    {
      image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg',
      category: 'Swimming Pool',
      title: 'Infinity Pool'
    },
    {
      image: 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg',
      category: 'Dining',
      title: 'Gourmet Restaurant'
    },
    {
      image: 'https://images.pexels.com/photos/3188/luxury-holiday-vacation-hotel.jpeg',
      category: 'Spa',
      title: 'Wellness Center'
    },
    {
      image: 'https://images.pexels.com/photos/2725675/pexels-photo-2725675.jpeg',
      category: 'Exterior',
      title: 'Hotel Facade'
    },
    {
      image: 'https://images.pexels.com/photos/2417842/pexels-photo-2417842.jpeg',
      category: 'Lounge',
      title: 'Relaxation Area'
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <SectionTitle 
          title="Experience Our Hotel" 
          subtitle="Gallery" 
          centered
        />
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {galleryItems.map((item, index) => (
            <motion.div 
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              variants={itemVariants}
              onClick={() => setSelectedImage(item.image)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-72">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="block text-sm font-medium text-yellow-300 mb-1">{item.category}</span>
                  <h3 className="text-xl font-serif">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl max-h-[80vh]"
          >
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-[80vh] object-contain"
            />
            <button 
              className="absolute top-4 right-4 text-white bg-black/50 w-10 h-10 rounded-full flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Gallery;