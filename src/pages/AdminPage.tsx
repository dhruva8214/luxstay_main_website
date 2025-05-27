import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Home, Calendar, ChevronDown, Plus, Search, MoreHorizontal, Edit, Trash2, Eye, Filter } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';

const AdminPage = () => {
  useEffect(() => {
    document.title = 'Admin Dashboard - Luxe Haven';
    // In a real application, we would check for authentication here
  }, []);
  
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <PageTransition>
      <div className="pt-20 min-h-screen bg-gray-100">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 bg-primary-700 min-h-[calc(100vh-5rem)] text-white p-6 hidden lg:block">
            <h2 className="text-xl font-serif mb-8">Admin Panel</h2>
            
            <nav className="space-y-1">
              {[
                { id: 'dashboard', name: 'Dashboard', icon: <Home className="h-5 w-5" /> },
                { id: 'bookings', name: 'Bookings', icon: <Calendar className="h-5 w-5" /> },
                { id: 'rooms', name: 'Rooms', icon: <Home className="h-5 w-5" /> },
                { id: 'guests', name: 'Guests', icon: <Users className="h-5 w-5" /> },
              ].map((item) => (
                <button
                  key={item.id}
                  className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors ${
                    activeTab === item.id 
                      ? 'bg-primary-800 text-white' 
                      : 'text-gray-300 hover:bg-primary-600 hover:text-white'
                  }`}
                  onClick={() => setActiveTab(item.id)}
                >
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                </button>
              ))}
            </nav>
          </div>
          
          {/* Mobile nav */}
          <div className="bg-primary-700 w-full p-4 lg:hidden">
            <div className="relative">
              <button
                className="flex items-center justify-between w-full px-4 py-2 text-white bg-primary-800 rounded-lg"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className="flex items-center">
                  {activeTab === 'dashboard' && <Home className="h-5 w-5 mr-2" />}
                  {activeTab === 'bookings' && <Calendar className="h-5 w-5 mr-2" />}
                  {activeTab === 'rooms' && <Home className="h-5 w-5 mr-2" />}
                  {activeTab === 'guests' && <Users className="h-5 w-5 mr-2" />}
                  
                  {activeTab === 'dashboard' && 'Dashboard'}
                  {activeTab === 'bookings' && 'Bookings'}
                  {activeTab === 'rooms' && 'Rooms'}
                  {activeTab === 'guests' && 'Guests'}
                </span>
                <ChevronDown className="h-5 w-5" />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-primary-800 rounded-lg py-2 shadow-lg z-10">
                  {[
                    { id: 'dashboard', name: 'Dashboard', icon: <Home className="h-5 w-5" /> },
                    { id: 'bookings', name: 'Bookings', icon: <Calendar className="h-5 w-5" /> },
                    { id: 'rooms', name: 'Rooms', icon: <Home className="h-5 w-5" /> },
                    { id: 'guests', name: 'Guests', icon: <Users className="h-5 w-5" /> },
                  ].map((item) => (
                    <button
                      key={item.id}
                      className={`flex items-center w-full px-4 py-3 text-white hover:bg-primary-600 ${
                        activeTab === item.id ? 'bg-primary-900' : ''
                      }`}
                      onClick={() => {
                        setActiveTab(item.id);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {item.icon}
                      <span className="ml-3">{item.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            {/* Dashboard */}
            {activeTab === 'dashboard' && (
              <div className="p-6">
                <h1 className="text-2xl font-serif mb-6">Dashboard</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {[
                    { title: 'Total Bookings', value: '1,248', change: '+12%', color: 'bg-blue-500' },
                    { title: 'Revenue', value: '$286,432', change: '+18%', color: 'bg-green-500' },
                    { title: 'Occupancy Rate', value: '78%', change: '+5%', color: 'bg-yellow-500' },
                    { title: 'Active Guests', value: '142', change: '-3%', color: 'bg-purple-500' },
                  ].map((stat, idx) => (
                    <motion.div 
                      key={idx}
                      className="bg-white rounded-lg shadow-md p-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                    >
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center text-white`}>
                          {idx === 0 && <Calendar className="h-6 w-6" />}
                          {idx === 1 && <span className="text-lg font-bold">$</span>}
                          {idx === 2 && <span className="text-lg font-bold">%</span>}
                          {idx === 3 && <Users className="h-6 w-6" />}
                        </div>
                        <div className="ml-4">
                          <h3 className="text-gray-500 text-sm">{stat.title}</h3>
                          <div className="text-2xl font-medium">{stat.value}</div>
                        </div>
                      </div>
                      <div className="text-sm">
                        <span className={`font-medium ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                          {stat.change}
                        </span>
                        <span className="text-gray-500 ml-1">from last month</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                  <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-lg font-medium">Recent Bookings</h2>
                      <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                        View All
                      </button>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Guest
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Room
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Check-in
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Check-out
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Status
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {[
                            { 
                              guest: 'Michael Johnson', 
                              room: 'Premium Ocean Suite', 
                              checkIn: 'Jun 15, 2025', 
                              checkOut: 'Jun 18, 2025',
                              status: 'Confirmed'
                            },
                            { 
                              guest: 'Sarah Williams', 
                              room: 'Deluxe King Room', 
                              checkIn: 'Jun 16, 2025', 
                              checkOut: 'Jun 19, 2025',
                              status: 'Pending'
                            },
                            { 
                              guest: 'Robert Chen', 
                              room: 'Executive Suite', 
                              checkIn: 'Jun 17, 2025', 
                              checkOut: 'Jun 20, 2025',
                              status: 'Confirmed'
                            },
                            { 
                              guest: 'Emma Davis', 
                              room: 'Deluxe Twin Room', 
                              checkIn: 'Jun 18, 2025', 
                              checkOut: 'Jun 22, 2025',
                              status: 'Cancelled'
                            },
                          ].map((booking, idx) => (
                            <tr key={idx} className="hover:bg-gray-50">
                              <td className="px-4 py-4 whitespace-nowrap">
                                <div className="font-medium text-gray-900">{booking.guest}</div>
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-gray-600">
                                {booking.room}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-gray-600">
                                {booking.checkIn}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap text-gray-600">
                                {booking.checkOut}
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap">
                                <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                                  booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                                  booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                  'bg-red-100 text-red-800'
                                }`}>
                                  {booking.status}
                                </span>
                              </td>
                              <td className="px-4 py-4 whitespace-nowrap">
                                <button className="text-primary-600 hover:text-primary-700">
                                  <Eye className="h-5 w-5" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-medium mb-6">Upcoming Check-ins</h2>
                    
                    <div className="space-y-4">
                      {[
                        { 
                          guest: 'Michael Johnson', 
                          room: 'Premium Ocean Suite', 
                          checkIn: 'Jun 15, 2025',
                          image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                        },
                        { 
                          guest: 'Sarah Williams', 
                          room: 'Deluxe King Room', 
                          checkIn: 'Jun 16, 2025',
                          image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                        },
                        { 
                          guest: 'Robert Chen', 
                          room: 'Executive Suite', 
                          checkIn: 'Jun 17, 2025',
                          image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                        },
                        { 
                          guest: 'Emma Davis', 
                          room: 'Deluxe Twin Room', 
                          checkIn: 'Jun 18, 2025',
                          image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                        },
                      ].map((checkIn, idx) => (
                        <div key={idx} className="flex items-center p-3 hover:bg-gray-50 rounded-lg">
                          <img 
                            src={checkIn.image} 
                            alt={checkIn.guest} 
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div className="ml-3">
                            <div className="font-medium">{checkIn.guest}</div>
                            <div className="text-sm text-gray-500">
                              {checkIn.room} - {checkIn.checkIn}
                            </div>
                          </div>
                          <button className="ml-auto text-gray-400 hover:text-gray-500">
                            <MoreHorizontal className="h-5 w-5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-medium mb-6">Room Occupancy</h2>
                    
                    <div className="space-y-4">
                      {[
                        { type: 'Deluxe King Room', total: 20, occupied: 16, occupancy: 80 },
                        { type: 'Premium Ocean Suite', total: 12, occupied: 10, occupancy: 83 },
                        { type: 'Executive Suite', total: 8, occupied: 5, occupancy: 63 },
                        { type: 'Family Suite', total: 6, occupied: 3, occupancy: 50 },
                        { type: 'Penthouse Suite', total: 2, occupied: 2, occupancy: 100 },
                      ].map((room, idx) => (
                        <div key={idx} className="mb-2">
                          <div className="flex justify-between mb-1">
                            <div>{room.type}</div>
                            <div className="text-sm text-gray-500">
                              {room.occupied}/{room.total} ({room.occupancy}%)
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                room.occupancy >= 90 ? 'bg-red-500' :
                                room.occupancy >= 70 ? 'bg-green-500' :
                                'bg-yellow-500'
                              }`}
                              style={{ width: `${room.occupancy}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-medium mb-6">Recent Activities</h2>
                    
                    <div className="space-y-4">
                      {[
                        { 
                          action: 'New Booking', 
                          details: 'Michael Johnson booked Premium Ocean Suite', 
                          time: '2 hours ago',
                          icon: <Calendar className="h-5 w-5 text-blue-500" />
                        },
                        { 
                          action: 'Check-in', 
                          details: 'Sarah Williams checked in to Deluxe King Room', 
                          time: '4 hours ago',
                          icon: <Users className="h-5 w-5 text-green-500" />
                        },
                        { 
                          action: 'Check-out', 
                          details: 'Robert Chen checked out from Executive Suite', 
                          time: '6 hours ago',
                          icon: <Users className="h-5 w-5 text-red-500" />
                        },
                        { 
                          action: 'Cancellation', 
                          details: 'Emma Davis cancelled reservation #12345', 
                          time: '8 hours ago',
                          icon: <Calendar className="h-5 w-5 text-red-500" />
                        },
                        { 
                          action: 'Room Service', 
                          details: 'Room service requested for Penthouse Suite', 
                          time: '10 hours ago',
                          icon: <Home className="h-5 w-5 text-purple-500" />
                        },
                      ].map((activity, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="bg-gray-100 p-2 rounded-full mr-3">
                            {activity.icon}
                          </div>
                          <div>
                            <div className="font-medium">{activity.action}</div>
                            <div className="text-gray-600 text-sm">{activity.details}</div>
                            <div className="text-gray-400 text-xs">{activity.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Bookings */}
            {activeTab === 'bookings' && (
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h1 className="text-2xl font-serif mb-4 md:mb-0">Bookings</h1>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search bookings..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 w-full"
                      />
                      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                    
                    <button className="btn btn-outline flex items-center">
                      <Filter className="h-4 w-4 mr-2" />
                      <span>Filter</span>
                    </button>
                    
                    <button className="btn btn-primary flex items-center">
                      <Plus className="h-4 w-4 mr-2" />
                      <span>New Booking</span>
                    </button>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            ID
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Guest
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Room
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Check-in
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Check-out
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Amount
                          </th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { 
                            id: 'B-12345',
                            guest: 'Michael Johnson', 
                            room: 'Premium Ocean Suite', 
                            checkIn: 'Jun 15, 2025', 
                            checkOut: 'Jun 18, 2025',
                            status: 'Confirmed',
                            amount: '$1,752.24'
                          },
                          { 
                            id: 'B-12346',
                            guest: 'Sarah Williams', 
                            room: 'Deluxe King Room', 
                            checkIn: 'Jun 16, 2025', 
                            checkOut: 'Jun 19, 2025',
                            status: 'Pending',
                            amount: '$897.00'
                          },
                          { 
                            id: 'B-12347',
                            guest: 'Robert Chen', 
                            room: 'Executive Suite', 
                            checkIn: 'Jun 17, 2025', 
                            checkOut: 'Jun 20, 2025',
                            status: 'Confirmed',
                            amount: '$1,197.00'
                          },
                          { 
                            id: 'B-12348',
                            guest: 'Emma Davis', 
                            room: 'Deluxe Twin Room', 
                            checkIn: 'Jun 18, 2025', 
                            checkOut: 'Jun 22, 2025',
                            status: 'Cancelled',
                            amount: '$1,116.00'
                          },
                          { 
                            id: 'B-12349',
                            guest: 'Thomas Wilson', 
                            room: 'Family Suite', 
                            checkIn: 'Jun 20, 2025', 
                            checkOut: 'Jun 25, 2025',
                            status: 'Confirmed',
                            amount: '$2,645.00'
                          },
                          { 
                            id: 'B-12350',
                            guest: 'Jessica Martinez', 
                            room: 'Penthouse Suite', 
                            checkIn: 'Jun 22, 2025', 
                            checkOut: 'Jun 24, 2025',
                            status: 'Confirmed',
                            amount: '$1,798.00'
                          },
                          { 
                            id: 'B-12351',
                            guest: 'Daniel Thompson', 
                            room: 'Executive Suite', 
                            checkIn: 'Jun 25, 2025', 
                            checkOut: 'Jun 28, 2025',
                            status: 'Pending',
                            amount: '$1,197.00'
                          },
                        ].map((booking, idx) => (
                          <tr key={idx} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{booking.id}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="font-medium text-gray-900">{booking.guest}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {booking.room}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {booking.checkIn}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {booking.checkOut}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                                booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                                booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                              }`}>
                                {booking.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {booking.amount}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <div className="flex justify-end space-x-2">
                                <button className="text-primary-600 hover:text-primary-700" title="View">
                                  <Eye className="h-5 w-5" />
                                </button>
                                <button className="text-yellow-600 hover:text-yellow-700" title="Edit">
                                  <Edit className="h-5 w-5" />
                                </button>
                                <button className="text-red-600 hover:text-red-700" title="Delete">
                                  <Trash2 className="h-5 w-5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                    <div className="flex-1 flex justify-between sm:hidden">
                      <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        Previous
                      </button>
                      <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        Next
                      </button>
                    </div>
                    <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm text-gray-700">
                          Showing <span className="font-medium">1</span> to <span className="font-medium">7</span> of <span className="font-medium">12</span> results
                        </p>
                      </div>
                      <div>
                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                          <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                            <span className="sr-only">Previous</span>
                            <ChevronDown className="h-5 w-5 rotate-90" />
                          </button>
                          {[1, 2].map((page) => (
                            <button
                              key={page}
                              className={`relative inline-flex items-center px-4 py-2 border ${
                                page === 1 
                                  ? 'bg-primary-50 border-primary-500 text-primary-600 z-10' 
                                  : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50'
                              } text-sm font-medium`}
                            >
                              {page}
                            </button>
                          ))}
                          <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                            <span className="sr-only">Next</span>
                            <ChevronDown className="h-5 w-5 -rotate-90" />
                          </button>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default AdminPage;