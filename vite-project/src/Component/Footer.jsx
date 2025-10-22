import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">GameZone</h3>
          <p className="text-gray-400">
            Your ultimate destination for action-packed, adventure-filled games.
            Explore, play, and conquer the gaming world with us.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a className="hover:text-red-500 transition">Home</a>
            </li>
            <li>
              <a className="hover:text-red-500 transition">Games</a>
            </li>
            <li>
              <a className="hover:text-red-500 transition">News</a>
            </li>
            <li>
              <a className="hover:text-red-500 transition">About Us</a>
            </li>
            <li>
              <a className="hover:text-red-500 transition">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Support</h4>
          <ul className="space-y-2">
            <li>
              <a href="/faq" className="hover:text-red-500 transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="/help" className="hover:text-red-500 transition">
                Help Center
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-red-500 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-red-500 transition">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-sky-400 transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-red-600 transition">
              <FaYoutube size={20} />
            </a>
            <a href="#" className="hover:text-purple-500 transition">
              <FaDiscord size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} GameZone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
