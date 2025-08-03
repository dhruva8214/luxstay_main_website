import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Users, CreditCard, Gift, BadgeCheck, HelpCircle } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';

const BookingPage = () => {
  useEffect(() => {
    document.title = 'Book Your Stay - Luxe Haven';
  }, []);

  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { number: 1, title: 'Dates & Guests' },
    { number: 2, title: 'Select Room' },
    { number: 3, title: 'Extras' },
    { number: 4, title: 'Guest Details' },
    { number: 5, title: 'Payment' },
  ];

  const handleNextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <PageTransition>
      <div className="pt-20">
        {/* Booking Header */}
        <section className="py-12 bg-primary-600 text-white">
          <div className="container">
            <h1 className="text-center mb-8">Book Your Stay</h1>
            
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap justify-between">
                {steps.map((step) => (
                  <div 
                    key={step.number} 
                    className={`flex items-center ${
                      step.number < steps.length ? 'flex-1' : ''
                    } ${
                      step.number > 1 ? 'md:pl-10' : ''
                    }`}
                  >
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
                        currentStep >= step.number 
                          ? 'bg-secondary-500 text-white' 
                          : 'bg-white/20 text-white'
                      }`}
                    >
                      {step.number}
                    </div>
                    <div className="ml-3">
                      <span className={`text-sm ${
                        currentStep >= step.number ? 'text-secondary-200' : 'text-white/60'
                      }`}>
                        Step {step.number}
                      </span>
                      <p className={`font-medium ${
                        currentStep >= step.number ? 'text-white' : 'text-white/70'
                      }`}>
                        {step.title}
                      </p>
                    </div>
                    {step.number < steps.length && (
                      <div className="hidden md:block flex-1 h-px bg-white/30 ml-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Booking Content */}
        <section className="py-12 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  {/* Step 1: Dates & Guests */}
                  {currentStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-2xl font-serif mb-6">Select Dates & Guests</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div>
                          <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-1">
                            Check-in Date *
                          </label>
                          <div className="relative">
                            <input
                              type="date"
                              id="checkIn"
                              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                              required
                            />
                            <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-1">
                            Check-out Date *
                          </label>
                          <div className="relative">
                            <input
                              type="date"
                              id="checkOut"
                              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                              required
                            />
                            <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div>
                          <label htmlFor="adults" className="block text-sm font-medium text-gray-700 mb-1">
                            Adults *
                          </label>
                          <div className="relative">
                            <select
                              id="adults"
                              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                              required
                            >
                              <option value="1">1 Adult</option>
                              <option value="2">2 Adults</option>
                              <option value="3">3 Adults</option>
                              <option value="4">4 Adults</option>
                            </select>
                            <Users className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="children" className="block text-sm font-medium text-gray-700 mb-1">
                            Children
                          </label>
                          <div className="relative">
                            <select
                              id="children"
                              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                            >
                              <option value="0">0 Children</option>
                              <option value="1">1 Child</option>
                              <option value="2">2 Children</option>
                              <option value="3">3 Children</option>
                            </select>
                            <Users className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-8">
                        <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
                          Special Requests (Optional)
                        </label>
                        <textarea
                          id="specialRequests"
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="Let us know if you have any special requests or preferences"
                        ></textarea>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Select Room */}
                  {currentStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-2xl font-serif mb-6">Select Your Room</h2>
                      
                      <div className="space-y-6">
                        {[
                          { 
                            name: "Deluxe King Room", 
                            price: 24999,
                            description: "Spacious room with a king-sized bed and city views",
                            features: ["King Bed", "City View", "32 m²", "Free WiFi"],
                            image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                          },
                          { 
                            name: "Premium Ocean Suite", 
                            price: 37999,
                            description: "Luxurious suite with stunning ocean views and separate living area",
                            features: ["King Bed", "Ocean View", "48 m²", "Living Area"],
                            image: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                            recommended: true
                          },
                          { 
                            name: "Executive Suite", 
                            price: 32999,
                            description: "Elegant suite designed for business travelers with work area",
                            features: ["King Bed", "Work Desk", "42 m²", "Lounge Access"],
                            image: "https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                          },
                        ].map((room, idx) => (
                          <div 
                            key={idx}
                            className={`border rounded-lg overflow-hidden ${
                              idx === 1 ? 'border-secondary-500 ring-2 ring-secondary-200' : 'border-gray-200'
                            }`}
                          >
                            {room.recommended && (
                              <div className="bg-secondary-500 text-white text-center py-1 text-sm font-medium">
                                Recommended
                              </div>
                            )}
                            <div className="grid grid-cols-1 md:grid-cols-3">
                              <div className="h-48 md:h-auto">
                                <img 
                                  src={room.image} 
                                  alt={room.name} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              
                              <div className="p-6 md:col-span-2">
                                <div className="flex justify-between items-start mb-4">
                                  <div>
                                    <h3 className="text-xl font-serif">{room.name}</h3>
                                    <p className="text-gray-600">{room.description}</p>
                                  </div>
                                  <div className="text-right">
                                    <div className="text-xl font-medium">₹{room.price.toLocaleString()}</div>
                                    <div className="text-sm text-gray-500">per night</div>
                                  </div>
                                </div>
                                
                                <div className="mb-6">
                                  <div className="flex flex-wrap gap-3">
                                    {room.features.map((feature, i) => (
                                      <span 
                                        key={i} 
                                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                                      >
                                        {feature}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                                
                                <div className="flex justify-between items-center">
                                  <Link 
                                    to={`/rooms/${idx + 1}`} 
                                    className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                                    target="_blank"
                                  >
                                    View Details
                                  </Link>
                                  <div>
                                    <label className="inline-flex items-center cursor-pointer">
                                      <input
                                        type="radio"
                                        name="roomSelection"
                                        className="form-radio h-5 w-5 text-secondary-500 border-gray-300 focus:ring-secondary-500"
                                        defaultChecked={idx === 1}
                                      />
                                      <span className="ml-2 text-gray-700">Select</span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Extras */}
                  {currentStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-2xl font-serif mb-6">Enhance Your Stay</h2>
                      
                      <div className="space-y-6">
                        {[
                          { 
                            name: "Airport Transfer", 
                            price: 6500,
                            description: "Comfortable private transfer between the airport and hotel",
                            image: "https://images.pexels.com/photos/1178448/pexels-photo-1178448.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                          },
                          { 
                            name: "Breakfast Package", 
                            price: 2999,
                            description: "Daily gourmet breakfast buffet for each guest",
                            image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                          },
                          { 
                            name: "Spa Treatment", 
                            price: 9999,
                            description: "60-minute relaxation massage or facial treatment",
                            image: "https://images.pexels.com/photos/3188/luxury-holiday-vacation-hotel.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                          },
                        ].map((extra, idx) => (
                          <div 
                            key={idx}
                            className="border border-gray-200 rounded-lg overflow-hidden"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-5">
                              <div className="md:col-span-1 h-40 md:h-auto">
                                <img 
                                  src={extra.image} 
                                  alt={extra.name} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              
                              <div className="p-6 md:col-span-4 flex justify-between">
                                <div>
                                  <h3 className="text-lg font-medium mb-2">{extra.name}</h3>
                                  <p className="text-gray-600 mb-4">{extra.description}</p>
                                  <div className="text-lg font-medium">₹{extra.price.toLocaleString()}</div>
                                </div>
                                
                                <div className="flex items-start">
                                  <label className="inline-flex items-center cursor-pointer">
                                    <input
                                      type="checkbox"
                                      className="form-checkbox h-5 w-5 text-secondary-500 border-gray-300 rounded focus:ring-secondary-500"
                                    />
                                    <span className="ml-2 text-gray-700">Add</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Guest Details */}
                  {currentStep === 4 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-2xl font-serif mb-6">Guest Details</h2>
                      
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
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                              required
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                            Address *
                          </label>
                          <input
                            type="text"
                            id="address"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                            required
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                              City *
                            </label>
                            <input
                              type="text"
                              id="city"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                              required
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                              Zip/Postal Code *
                            </label>
                            <input
                              type="text"
                              id="zipCode"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                              required
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                              Country *
                            </label>
                            <select
                              id="country"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                              required
                            >
                              <option value="">Select Country</option>
                              <option value="US">United States</option>
                              <option value="CA">Canada</option>
                              <option value="UK">United Kingdom</option>
                              <option value="AU">Australia</option>
                              <option value="FR">France</option>
                              <option value="DE">Germany</option>
                              <option value="JP">Japan</option>
                              <option value="CH">China</option>
                            </select>
                          </div>
                        </div>
                        
                        <div>
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-secondary-500 border-gray-300 rounded focus:ring-secondary-500"
                            />
                            <span className="ml-2 text-gray-700">
                              Create an account for faster bookings in the future
                            </span>
                          </label>
                        </div>
                      </form>
                    </motion.div>
                  )}

                  {/* Step 5: Payment */}
                  {currentStep === 5 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-2xl font-serif mb-6">Payment Information</h2>
                      
                      <div className="mb-8">
                        <div className="bg-primary-50 border border-primary-100 rounded-lg p-4 mb-6">
                          <div className="flex items-start">
                            <BadgeCheck className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                            <div>
                              <h3 className="font-medium text-primary-700 mb-1">Secure Payment</h3>
                              <p className="text-primary-600 text-sm">
                                Your payment information is encrypted and secure. We never store your full credit card details.
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <h3 className="text-lg font-medium mb-4">Payment Method</h3>
                          
                          <div className="space-y-4">
                            <label className="flex p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-primary-500 transition-colors">
                              <input
                                type="radio"
                                name="paymentMethod"
                                className="form-radio h-5 w-5 text-secondary-500 border-gray-300 focus:ring-secondary-500 mt-0.5"
                                defaultChecked
                              />
                              <div className="ml-3">
                                <div className="font-medium">Credit Card</div>
                                <div className="text-sm text-gray-500">Pay securely with your credit card</div>
                              </div>
                              <div className="ml-auto flex items-center gap-2">
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Visa</span>
                                <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">Mastercard</span>
                                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Amex</span>
                              </div>
                            </label>
                            
                            <label className="flex p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-primary-500 transition-colors">
                              <input
                                type="radio"
                                name="paymentMethod"
                                className="form-radio h-5 w-5 text-secondary-500 border-gray-300 focus:ring-secondary-500 mt-0.5"
                              />
                              <div className="ml-3">
                                <div className="font-medium">PayPal</div>
                                <div className="text-sm text-gray-500">Fast and secure payment with PayPal</div>
                              </div>
                            </label>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <h3 className="text-lg font-medium mb-4">Card Details</h3>
                          
                          <div className="space-y-4">
                            <div>
                              <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                                Cardholder Name *
                              </label>
                              <input
                                type="text"
                                id="cardName"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                placeholder="As it appears on your card"
                                required
                              />
                            </div>
                            
                            <div>
                              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                Card Number *
                              </label>
                              <div className="relative">
                                <input
                                  type="text"
                                  id="cardNumber"
                                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                  placeholder="XXXX XXXX XXXX XXXX"
                                  required
                                />
                                <CreditCard className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                                  Expiry Date *
                                </label>
                                <input
                                  type="text"
                                  id="expiryDate"
                                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                  placeholder="MM/YY"
                                  required
                                />
                              </div>
                              
                              <div>
                                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                                  CVV *
                                </label>
                                <input
                                  type="text"
                                  id="cvv"
                                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                  placeholder="123"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="promoCode" className="block text-sm font-medium text-gray-700 mb-1">
                            Promo Code
                          </label>
                          <div className="flex">
                            <div className="relative flex-grow mr-2">
                              <input
                                type="text"
                                id="promoCode"
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                placeholder="Enter promo code if you have one"
                              />
                              <Gift className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            </div>
                            <button className="btn btn-outline py-2">
                              Apply
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-t pt-6">
                        <div className="mb-4 flex items-center">
                          <input
                            type="checkbox"
                            id="termsConditions"
                            className="form-checkbox h-5 w-5 text-secondary-500 border-gray-300 rounded focus:ring-secondary-500"
                            required
                          />
                          <label htmlFor="termsConditions" className="ml-2 text-gray-700">
                            I agree to the <a href="#" className="text-primary-600 hover:underline">Terms & Conditions</a> and <a href="#" className="text-primary-600 hover:underline">Privacy Policy</a>.
                          </label>
                        </div>
                        
                        <p className="text-sm text-gray-500 mb-6">
                          By proceeding with this booking, you agree to the hotel's standard reservation policies, including the cancellation policy (free cancellation up to 48 hours before check-in).
                        </p>
                        
                        <button className="btn btn-primary w-full py-3 text-lg">
                          Complete Booking
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between">
                    <button
                      className={`btn btn-outline ${currentStep === 1 ? 'invisible' : ''}`}
                      onClick={handlePrevStep}
                    >
                      Previous Step
                    </button>
                    
                    {currentStep < steps.length && (
                      <button
                        className="btn btn-primary"
                        onClick={handleNextStep}
                      >
                        Next Step
                      </button>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div>
                <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                  <h3 className="text-xl font-serif mb-4">Booking Summary</h3>
                  
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-gray-600">Check-in:</div>
                      <div className="font-medium">Jun 15, 2025</div>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-gray-600">Check-out:</div>
                      <div className="font-medium">Jun 18, 2025</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-gray-600">Duration:</div>
                      <div className="font-medium">3 nights</div>
                    </div>
                  </div>
                  
                  <div className="mb-6 border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-gray-600">Room Type:</div>
                      <div className="font-medium">Premium Ocean Suite</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-gray-600">Guests:</div>
                      <div className="font-medium">2 Adults</div>
                    </div>
                  </div>
                  
                  <div className="mb-6 border-t border-gray-200 pt-4">
                    <h4 className="font-medium mb-4">Price Details</h4>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center">
                        <div className="text-gray-600">Room (3 nights)</div>
                        <div>₹1,13,997</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-gray-600">Taxes & Fees (12%)</div>
                        <div>₹13,680</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-gray-600">Breakfast Package</div>
                        <div>₹17,994</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-gray-200 text-lg font-medium">
                      <div>Total</div>
                      <div>₹1,45,671</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <div className="flex items-start">
                      <HelpCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-gray-600">
                        Need assistance with your booking? Contact our reservations team at +1 (123) 456-7890.
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center text-xs text-gray-500">
                    Best rate guarantee. No hidden fees.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default BookingPage;