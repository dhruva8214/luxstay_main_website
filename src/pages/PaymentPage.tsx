import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CreditCard, Lock, Shield } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';
import PageTransition from '../components/ui/PageTransition';
import { supabase } from '../lib/supabase';

const PaymentPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Payment - LuxStay';
  }, []);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
      if (!stripe) throw new Error('Stripe failed to load');

      // In a real application, you would:
      // 1. Create a payment intent on your server
      // 2. Use the client secret to confirm the payment
      // 3. Handle the payment result
      
      // For now, we'll just simulate a successful payment
      setTimeout(() => {
        navigate('/booking-confirmation');
      }, 2000);
    } catch (err) {
      setError('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container py-12">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-primary-600 px-6 py-8 text-white">
                <h1 className="text-2xl font-serif mb-2">Secure Payment</h1>
                <p className="text-primary-100">Complete your booking with our secure payment system</p>
              </div>

              <div className="p-6">
                {/* Order Summary */}
                <div className="mb-8">
                  <h2 className="text-xl font-serif mb-4">Order Summary</h2>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Premium Ocean Suite (3 nights)</span>
                        <span>$1,377.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Taxes & Fees (12%)</span>
                        <span>$165.24</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Breakfast Package</span>
                        <span>$210.00</span>
                      </div>
                      <div className="border-t pt-2 mt-2 font-medium flex justify-between">
                        <span>Total</span>
                        <span>$1,752.24</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Form */}
                <form onSubmit={handlePayment}>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-1">
                        Card Number
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="card-number"
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                        <CreditCard className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          id="expiry"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                          CVV
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

                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    {error && (
                      <div className="bg-red-50 text-red-700 p-4 rounded-md">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full btn btn-primary py-3 flex items-center justify-center"
                      disabled={loading}
                    >
                      {loading ? (
                        <span>Processing...</span>
                      ) : (
                        <>
                          <Lock className="w-5 h-5 mr-2" />
                          Pay ${(1752.24).toLocaleString()}
                        </>
                      )}
                    </button>
                  </div>
                </form>

                {/* Security Notice */}
                <div className="mt-8 flex items-start p-4 bg-gray-50 rounded-lg">
                  <Shield className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" />
                  <div className="text-sm text-gray-600">
                    <p className="font-medium text-gray-900 mb-1">Secure Payment</p>
                    <p>
                      Your payment information is encrypted and secure. We use industry-standard security measures to protect your data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default PaymentPage;