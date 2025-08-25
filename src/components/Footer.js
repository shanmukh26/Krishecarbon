import Image from "next/image";
import { FaInstagram, FaDribbble, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#E4ECE5] text-gray-700 py-12 px-6 md:px-20 font-merriweather">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-10">

        {/* Left Section - Logo & Copyright */}
        <div className="flex flex-col items-start gap-6 h-full">
          <p className="text-sm">Copyright © 2024 kriSHE Carbon.<br />All rights reserved</p>

          <div className="flex gap-4 mt-2 text-gray-600 text-lg">
            <FaInstagram />
            <FaDribbble />
            <FaTwitter />
            <FaYoutube />
          </div>

          <div className="mt-auto">
            <Image src="/Krishecarbon_logo.svg" alt="Logo" width={40} height={40} />
          </div>
        </div>

        {/* Middle Section - Links */}
        <div className="flex gap-16">
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#">Home</a></li>
              <li><a href="#">How It Works</a></li>
              <li><a href="#">Technology</a></li>
              <li><a href="#">Impact</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Buy Credits</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#">Help center</a></li>
              <li><a href="#">Terms of service</a></li>
              <li><a href="#">Legal</a></li>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Status</a></li>
            </ul>
          </div>
        </div>

        {/* Right Section - Newsletter */}
        <div className="w-full md:w-auto">
          <h4 className="font-semibold text-lg mb-4">Stay up to date</h4>
          <div className="flex bg-white border rounded-md items-center px-4 py-2 w-full md:w-80">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow bg-transparent outline-none text-sm"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="text-gray-600"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
