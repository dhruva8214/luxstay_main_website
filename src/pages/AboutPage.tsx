import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Clock, MapPin } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import SectionTitle from '../components/ui/SectionTitle';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Us - Luxe Haven';
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
      <section className="relative py-32 bg-primary-600">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
            alt="Hotel exterior" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="container relative z-10 text-center">
          <h1 className="text-white mb-6">About Luxe Haven</h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            A legacy of luxury hospitality since 1995, setting the standard for premium accommodation and exceptional service.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle
                title="Our Story"
                subtitle="Since 1995"
              />
              <p className="text-gray-600 mb-6">
                Luxe Haven was founded in 1995 by the visionary hotelier James Laurent, who dreamed of creating a sanctuary that combined timeless elegance with modern luxury. What began as a boutique hotel with just 25 rooms has grown into an internationally recognized brand with properties in 15 countries.
              </p>
              <p className="text-gray-600 mb-6">
                Throughout our journey, we have remained true to our founding principles: exceptional service, attention to detail, and creating memorable experiences for every guest. Each Luxe Haven property is unique in its design and character, reflecting the culture and heritage of its location while maintaining our signature standard of luxury.
              </p>
              <p className="text-gray-600">
                Today, under the leadership of CEO Maria Laurent, we continue to innovate and expand, bringing the Luxe Haven experience to new destinations while honoring our rich heritage and commitment to excellence.
              </p>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Luxe Haven History" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-2">
                  <Clock className="text-secondary-500 mr-2 h-5 w-5" />
                  <span className="font-medium">25+ Years of Excellence</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Proudly serving distinguished guests since 1995
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <SectionTitle 
            title="Our Core Values" 
            subtitle="What Drives Us" 
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Award className="h-12 w-12 text-secondary-500" />,
                title: "Excellence",
                description: "We strive for excellence in everything we do, from the quality of our accommodations to the standard of our service."
              },
              { 
                icon: <Users className="h-12 w-12 text-secondary-500" />,
                title: "Personalization",
                description: "We believe that true luxury lies in personalized experiences tailored to each guest's preferences and needs."
              },
              { 
                icon: <MapPin className="h-12 w-12 text-secondary-500" />,
                title: "Authenticity",
                description: "We honor the unique culture and heritage of each location, creating authentic experiences that connect our guests with their surroundings."
              },
              { 
                icon: <Clock className="h-12 w-12 text-secondary-500" />,
                title: "Innovation",
                description: "We continuously evolve and innovate to enhance the guest experience, while respecting our traditions and heritage."
              },
            ].map((value, i) => (
              <motion.div 
                key={i}
                className="bg-white p-8 rounded-lg shadow-md text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={i}
                variants={fadeInUpVariants}
              >
                <div className="flex justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionTitle 
            title="Meet Our Leadership Team" 
            subtitle="The People Behind Luxe Haven" 
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "Maria Laurent",
                position: "Chief Executive Officer",
                image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                bio: "With over 20 years of experience in luxury hospitality, Maria has led Luxe Haven to new heights while honoring her father's legacy."
              },
              { 
                name: "David Chen",
                position: "Chief Operations Officer",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                bio: "David ensures that every Luxe Haven property maintains our exceptional standards of service and operational excellence."
              },
              { 
                name: "Sophia Rodriguez",
                position: "Chief Experience Officer",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                bio: "Sophia leads our efforts to create unique, memorable experiences that delight our guests and exceed their expectations."
              },
            ].map((member, i) => (
              <motion.div 
                key={i}
                className="bg-white rounded-lg overflow-hidden shadow-md"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={i}
                variants={fadeInUpVariants}
              >
                <div className="h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-serif mb-1">{member.name}</h3>
                  <p className="text-secondary-500 font-medium mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { number: "25+", label: "Years of Excellence" },
              { number: "15", label: "Countries" },
              { number: "32", label: "Luxury Properties" },
              { number: "1500+", label: "Dedicated Team Members" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="text-5xl font-serif font-bold text-secondary-500 mb-2">
                  {stat.number}
                </div>
                <p className="text-xl">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionTitle 
            title="Awards & Recognition" 
            subtitle="Excellence Acknowledged" 
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { year: "2023", award: "World's Leading Luxury Hotel Brand", org: "International Travel Awards" },
              { year: "2022", award: "Best Hotel Chain in Europe", org: "European Hospitality Excellence Awards" },
              { year: "2021", award: "Luxury Hotel of the Year - Paris Location", org: "Condé Nast Traveler" },
              { year: "2020", award: "Outstanding Customer Experience", org: "Global Hospitality Summit" },
              { year: "2019", award: "Sustainability Leadership Award", org: "Green Hospitality Association" },
              { year: "2018", award: "Best New Luxury Property - Tokyo Location", org: "Asian Hotelier Awards" },
            ].map((award, i) => (
              <motion.div 
                key={i}
                className="flex gap-6 p-6 bg-gray-50 rounded-lg"
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-16 h-16 bg-primary-50 flex items-center justify-center rounded-full flex-shrink-0">
                  <span className="text-primary-600 font-serif font-bold">{award.year}</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">{award.award}</h3>
                  <p className="text-gray-600">{award.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default AboutPage;