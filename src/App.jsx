import React from 'react';
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import { FaFileAlt, FaVideo, FaMicrophone, FaShareAlt } from 'react-icons/fa';
import './index.css';

const App = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden ">
      <Navbar />
      <div className="container px-4 lg:px-6 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row max-auto gap-8 lg:gap-1 mt-0 w-full">
          <div className="w-full lg:w-1/2 lg:ml-34 lg:mr-20 mt-10 mb-12 lg:mb-24 flex flex-col gap-6 px-4 lg:px-0">
            <div className="relative lg:ml-10">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-25"></div>
              <h1 className="relative text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-100 via-purple-200 to-pink-100 bg-clip-text text-transparent text-center lg:text-left">
                Capture Everything in One Place
              </h1>
            </div>
            <p className="text-purple-200 font-medium text-xl lg:text-2xl text-center lg:text-left lg:ml-10">
              Save text, videos, audio recordings, and social media posts all in one powerful notes app. Stay organized and never lose an important thought again.
            </p>
            <div className="flex justify-center lg:justify-start">
              <a href="/signup"><button className="relative group lg:ml-10">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-300 to-rose-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                <div className="relative px-8 py-4 bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 rounded-lg leading-none flex items-center text-white font-semibold shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-200 hover:-translate-y-0.5">
                  Get Started Free
                </div>
              </button>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-full relative px-4 lg:px-0">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl blur-2xl"></div>
            <img 
              className="relative w-full lg:w-130 h-auto lg:h-135 rounded-lg transition-transform duration-500 mx-auto" 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/creative-SW6QDQbcVuwPgb6a2CYtYmRbsJa4k1.png" 
              alt="Capture Everything in One Place" 
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <motion.div 
        className="container mx-auto px-4 lg:px-6 py-16 lg:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-5xl font-bold text-center mb-15 bg-gradient-to-r from-gray-100 via-purple-200 to-pink-100 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 2, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Text Notes Card */}
          <motion.div 
            className="relative group"
            variants={cardVariants}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
            <div className="relative p-8 bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-red-500/50 transition-all duration-300 h-full transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-red-500/20">
              <motion.div 
                className="text-red-500 text-4xl mb-4"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaFileAlt />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-4">Text Notes</h3>
              <p className="text-gray-300">
                Capture your thoughts, ideas, and important information in beautifully formatted text notes.
              </p>
            </div>
          </motion.div>

          {/* Video Notes Card */}
          <motion.div 
            className="relative group"
            variants={cardVariants}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
            <div className="relative p-8 bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-red-500/50 transition-all duration-300 h-full transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-red-500/20">
              <motion.div 
                className="text-red-500 text-4xl mb-4"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaVideo />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-4">Video Notes</h3>
              <p className="text-gray-300">
                Save and organize video content with timestamps and annotations for easy reference.
              </p>
            </div>
          </motion.div>

          {/* Audio Notes Card */}
          <motion.div 
            className="relative group"
            variants={cardVariants}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
            <div className="relative p-8 bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-red-500/50 transition-all duration-300 h-full transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-red-500/20">
              <motion.div 
                className="text-red-500 text-4xl mb-4"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaMicrophone />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-4">Audio Notes</h3>
              <p className="text-gray-300">
                Record voice memos and audio notes with automatic transcription support.
              </p>
            </div>
          </motion.div>

          {/* Social Media Card */}
          <motion.div 
            className="relative group"
            variants={cardVariants}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
            <div className="relative p-8 bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-red-500/50 transition-all duration-300 h-full transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-red-500/20">
              <motion.div 
                className="text-red-500 text-4xl mb-4"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaShareAlt />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-4">Social Media</h3>
              <p className="text-gray-300">
                Save and organize posts from various social media platforms in one place.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Why SecondBrain Section */}
      <motion.div 
        className="container mx-auto px-4 lg:px-6 py-16 lg:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-100 via-purple-200 to-pink-100 bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          Why Choose SecondBrain?
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          {/* Productivity Card */}
          <motion.div 
            className="relative overflow-hidden"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-xl rounded-3xl"></div>
            <div className="relative p-10 backdrop-blur-sm rounded-3xl border border-white/10 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Boost Productivity</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Streamline your workflow and boost productivity by having all your notes, ideas, and resources in one centralized location. No more switching between apps or losing important information.
              </p>
            </div>
          </motion.div>

          {/* Organization Card */}
          <motion.div 
            className="relative overflow-hidden"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-xl rounded-3xl"></div>
            <div className="relative p-10 backdrop-blur-sm rounded-3xl border border-white/10 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Stay Organized</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Keep your digital life organized with our intuitive categorization and tagging system. Find what you need instantly with powerful search capabilities.
              </p>
            </div>
          </motion.div>

          {/* Collaboration Card */}
          <motion.div 
            className="relative overflow-hidden"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/30 to-blue-600/30 backdrop-blur-xl rounded-3xl"></div>
            <div className="relative p-10 backdrop-blur-sm rounded-3xl border border-white/10 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Seamless Collaboration</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Share notes and collaborate with team members in real-time. Perfect for team projects, research, and knowledge sharing across your organization.You can also share your notes with your friends and family.
              </p>
            </div>
          </motion.div>

          {/* Security Card */}
          <motion.div 
            className="relative overflow-hidden"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rose-600/30 to-orange-600/30 backdrop-blur-xl rounded-3xl"></div>
            <div className="relative p-10 backdrop-blur-sm rounded-3xl border border-white/10 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Secure & Private</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Your data is protected with enterprise-grade encryption. We prioritize your privacy and security, ensuring your information stays confidential.Also, we have a 24/7 customer support team to help you with any issues.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer Section */}
      <footer className="bg-gray-900/80 backdrop-blur-lg border-t border-gray-800">
        <div className="container mx-auto px-4 lg:px-6 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-100 via-purple-200 to-pink-100 bg-clip-text text-transparent">
                SecondBrain
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Your digital notebook for capturing and organizing everything that matters.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">Home</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">Features</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">Pricing</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">Blog</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-gray-400">
                  <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span>123 Innovation Street, Tech City, 12345</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400">
                  <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span>contact@secondbrain.com</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-400">
                  <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span>+1 (555) 123-4567</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Newsletter</h4>
              <p className="text-gray-400">Subscribe to our newsletter for updates and tips.</p>
              <form className="space-y-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-rose-500 text-gray-300"
                />
                <button 
                  type="submit" 
                  className="w-full px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg hover:from-rose-600 hover:to-pink-600 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © 2024 SecondBrain. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-rose-500 text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-rose-500 text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-rose-500 text-sm transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
