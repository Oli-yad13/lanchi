"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    location: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      role: '',
      location: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-12 md:gap-24">

        {/* Left Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            We look forward to hearing from you. Fill out the form, and our team
            will get back to you promptly.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">FULL NAME</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">EMAIL ADDRESS</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">YOUR ROLE</label>
              <select
                id="role"
                name="role"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="">Select your role</option>
                {/* Add more role options here */}
                <option value="individual">Individual</option>
                <option value="organization">Organization</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">LOCATION</label>
              <input
                id="location"
                name="location"
                type="text"
                autoComplete="street-address"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                value={formData.location}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">MESSAGE</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </motion.div>

        {/* Right Column: Logo and Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Lanchi Logo"
              width={150}
              height={45}
              className="mb-4"
            />
          </Link>
          <div className="text-xl font-light text-gray-800 mb-8">
            Health Insurance Designed <br /> for Ethiopian Women
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-500">EMAIL</h4>
              <p className="text-gray-800">info@lanchi.africa</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">LOCATION</h4>
              <p className="text-gray-800">Hayahulet Mazoriya, Noah</p>
              <p className="text-gray-800">Real Estate building,</p>
              <p className="text-gray-800">6th floor, Addis Ababa,</p>
              <p className="text-gray-800">Ethiopia</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
