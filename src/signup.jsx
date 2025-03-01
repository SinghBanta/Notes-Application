import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Signup = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Signup Container */}
        <div className="relative">
          {/* Background Blur Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-25"></div>
          
          {/* Main Content */}
          <div className="relative bg-gray-900/90 backdrop-blur-xl p-6 rounded-lg border border-gray-800">
            {/* Header */}
            <div className="text-center mb-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-100 via-purple-200 to-pink-100 bg-clip-text text-transparent">
                Create Account
              </h2>
              <p className="text-gray-400 mt-1 text-sm">
                Join SecondBrain today
              </p>
            </div>

            {/* Signup Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Inputs */}
              <div className="grid grid-cols-2 gap-3">
                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
                    First Name
                  </label>
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-10 transition duration-200"></div>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="First name"
                      className="relative w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-rose-500 text-gray-300 placeholder-gray-500 text-sm"
                      required
                    />
                  </div>
                </div>

                {/* Last Name */}
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
                    Last Name
                  </label>
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-10 transition duration-200"></div>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Last name"
                      className="relative w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-rose-500 text-gray-300 placeholder-gray-500 text-sm"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-10 transition duration-200"></div>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="relative w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-rose-500 text-gray-300 placeholder-gray-500 text-sm"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-10 transition duration-200"></div>
                  <input
                    type="password"
                    id="password"
                    placeholder="Create a password"
                    className="relative w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-rose-500 text-gray-300 placeholder-gray-500 text-sm"
                    required
                  />
                </div>
              </div>

              {/* Confirm Password Input */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
                  Confirm Password
                </label>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-10 transition duration-200"></div>
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    className="relative w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-rose-500 text-gray-300 placeholder-gray-500 text-sm"
                    required
                  />
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-center">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-rose-500 focus:ring-rose-500"
                  required
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-400">
                  I agree to the{' '}
                  <a href="#" className="text-rose-500 hover:text-rose-400 transition-colors">
                    Terms and Conditions
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="relative w-full group"
              >
                
                <div className="relative w-full p-3 bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 rounded-lg text-white font-semibold shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-200 text-sm">
                  Create Account
                </div>
              </motion.button>

              <p className="mt-4 text-center text-xs text-gray-400">
                Already have an account?{' '}
                <Link to="/login" className="text-rose-500 hover:text-rose-400 font-semibold transition-colors">
                  Sign in 
                </Link>
              </p>

              
              
            </form>

            
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
