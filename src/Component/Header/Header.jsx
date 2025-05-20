import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import veredaLogo from "../../assets/vereda.png";
import { useNavigate } from "react-router-dom";
import { useEmailContext } from "../../StateManagement/EmailContext";

export default function Header() {
  const { email, isAuthenticated, logout } = useEmailContext(); // ⬅️ use logout from context
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/email-login');
  };

  const handleLogout = () => {
    logout(); // ⬅️ call logout from context
    navigate('/');
  };

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="hidden md:flex items-center justify-between bg-white border-b">
        <a
          href="tel:+919570994444"
          className="flex items-center gap-2 px-4 py-2 border-r hover:bg-gray-50"
        >
          <FaPhoneAlt className="text-gray-600" />
          <span className="text-xs lg:text-sm font-medium">
            +91‑9 570 994 444
          </span>
        </a>

        <a
          href="https://www.google.com/maps/search/?api=1&query=Sinha+Library+Road+Venture+Park+Patna"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 border-r hover:bg-gray-50"
        >
          <FaMapMarkerAlt className="text-gray-600" />
          <span className="text-xs lg:text-sm">
            Sinha Library road, Venture park Patna
          </span>
        </a>

        <div className="flex items-center gap-2 px-4 py-2">
          <span className="text-xs lg:text-sm mr-1">Find us on :</span>
          <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-purple-700"><FaFacebookF /></a>
          <a href="https://linkedin.com/company/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-purple-700"><FaLinkedinIn /></a>
          <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-purple-700"><FaInstagram /></a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex items-center justify-between px-4 lg:px-6 py-3 bg-white shadow-md">
        <img
          src={veredaLogo}
          alt="Vereda logo"
          className="h-14 w-auto object-contain"
        />

        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a href="#home" className="hover:text-purple-700">Home</a>
          <a href="#courses" className="hover:text-purple-700">Courses</a>
          <a href="#" className="hover:text-purple-700">Contact</a>
        </nav>

        {/* Auth buttons */}
        <div className="hidden md:flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <span className="text-sm text-gray-700">{email}</span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 text-purple-700 font-semibold hover:underline"
              >
                <FaUser />
                LOGOUT
              </button>
            </>
          ) : (
            <button
              onClick={handleLogin}
              className="flex items-center gap-1 text-purple-700 font-semibold hover:underline"
            >
              <FaUser />
              LOGIN
            </button>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-xl text-gray-700"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-4 py-4 space-y-4 text-gray-700 font-medium">
          <a href="#home" className="block hover:text-purple-700">Home</a>
          <a href="#courses" className="block hover:text-purple-700">Courses</a>
          <a href="#" className="block hover:text-purple-700">Contact</a>
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="flex items-center gap-1 text-purple-700 font-semibold hover:underline"
            >
              <FaUser />
              LOGOUT
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="flex items-center gap-1 text-purple-700 font-semibold hover:underline"
            >
              <FaUser />
              LOGIN
            </button>
          )}
        </div>
      )}
    </header>
  );
}
