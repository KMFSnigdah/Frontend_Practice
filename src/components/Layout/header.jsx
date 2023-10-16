import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const token = localStorage.getItem("token");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-10 bg-slate-400 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <nav className="bg-slate-400 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/home" className="flex items-center">
            <img
              src="https://thumbs.dreamstime.com/z/hospital-logo-icon-hospital-logo-icon-135146804.jpg"
              className="mr-3 h-6 sm:h-9"
              alt="Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Health Counseling
            </span>
          </Link>
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${isMenuOpen ? "block" : "hidden"
              } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to="/home" // Updated path for Home
                  className="block py-2 pr-4 pl-3 rounded-lg text-gray-700 border-b border-gray-100 hover:bg-gray-200 lg:hover-bg-transparent lg:border-0 lg:hover-text-primary-700 lg:p-0 dark:text-gray-400 lg-dark-hover-text-white dark-hover-bg-gray-700 dark-hover-text-white lg-dark-hover-bg-transparent dark-border-gray-700"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              {token && (
                <>
                  <li>
                    <Link
                      to="/health" // Updated path for My Health
                      className="block py-2 pr-4 pl-3 rounded-lg text-gray-700 border-b border-gray-100 hover-bg-gray-200 lg:hover-bg-transparent lg:border-0 lg:hover-text-primary-700 lg:p-0 dark:text-gray-400 lg-dark-hover-text-white dark-hover-bg-gray-700 dark-hover-text-white lg-dark-hover-bg-transparent dark-border-gray-700"
                    >
                      My Health
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/create/profile"
                      className="block py-2 pr-4 pl-3 rounded-lg text-gray-700 border-b border-gray-100 hover-bg-gray-200 lg:hover-bg-transparent lg:border-0 lg:hover-text-primary-700 lg:p-0 dark:text-gray-400 lg-dark-hover-text-white dark-hover-bg-gray-700 dark-hover-text-white lg-dark-hover-bg-transparent dark-border-gray-700"
                    >
                      Create Profile
                    </Link>
                  </li>
                  {/* Include similar Link components for other routes */}
                </>
              )}
              <li>
                <Link
                  to="/contact" // Updated path for Contact
                  className="block py-2 pr-4 pl-3 rounded-lg text-gray-700 border-b border-gray-100 hover-bg-gray-200 lg:hover-bg-transparent lg:border-0 lg:hover-text-primary-700 lg:p-0 dark:text-gray-400 lg-dark-hover-text-white dark-hover-bg-gray-700 dark-hover-text-white lg-dark-hover-bg-transparent dark-border-gray-700"
                >
                  Contact
                </Link>
              </li>
              {token && (
                <li>
                  <button
                    onClick={handleLogout}
                    className="block font-bold py-2 pr-4 pl-3 rounded-lg text-gray-700 border-b border-gray-100 hover-bg-gray-200 lg:hover-bg-transparent lg:border-0 lg:hover-text-primary-700 lg:p-0 dark:text-gray-400 lg-dark-hover-text-white dark-hover-bg-gray-700 dark-hover-text-white lg-dark-hover-bg-transparent dark-border-gray-700"
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
