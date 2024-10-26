import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-[#3b250c] h-[691px] flex items-center justify-center">
      <footer className="bg-[#3b250c] text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 bg-[#3b250c]">
          
          {/* Brand Section */}
          <div className="flex flex-col items-start bg-[#3b250c]">
            <div className="bg-orange-500 rounded-full w-12 h-12 flex items-center justify-center text-white text-2xl font-bold mb-4">
              D
            </div>
            <p className="mb-6 text-gray-300">
              Viverra gravida morbi egestas facilisis tortor netus non duis tempor.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="text-xl text-gray-300 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" className="text-xl text-gray-300 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://facebook.com" className="text-xl text-gray-300 hover:text-white">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>

          {/* Page Links */}
          <div className="bg-[#3b250c]">
            <h3 className="text-orange-500 font-bold mb-4">Page</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Order Online
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Catering
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Reservation
                </a>
              </li>
            </ul>
          </div>

          {/* Information Links */}
          <div className="bg-[#3b250c]">
            <h3 className="text-orange-500 font-bold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Testimonial
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Event
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="bg-[#3b250c]">
            <h3 className="text-orange-500 font-bold mb-4">Get in touch</h3>
            <ul className="space-y-2 text-gray-300">
              <li>3247 Johnson Ave, Bronx, NY</li>
              <li>10463, Amerika Serikat</li>
              <li>delizioso@gmail.com</li>
              <li>+123 4567 8901</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="container mx-auto text-center pt-8 text-gray-400 bg-[#3b250c]">
          <p>Copyright © 2022 Delizioso</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
