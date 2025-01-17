import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-bold">MyAccommodation</h2>
          <p className="text-sm">Find your perfect stay, anywhere in the world.</p>
        </div>

        {/* Quick Links */}
        <div className="flex space-x-6 my-4 md:my-0">
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-400">Facebook</a>
          <a href="#" className="hover:text-blue-400">Twitter</a>
          <a href="#" className="hover:text-blue-400">Instagram</a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm">
        © {new Date().getFullYear()} MyAccommodation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
