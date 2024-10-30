import React from "react";
import ToggleButton from "../common/ToggleButton";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  // Get the current route path
  const location = useLocation();

  // Conditional dark mode styling for certain routes
  const requiredRedInDarkMode =
    location.pathname === "/home" || location.pathname === "/fav";

  const svg = (
    <svg
      width="50"
      height="40"
      viewBox="0 0 206 208"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M127.762 104C127.762 117.676 116.676 128.762 103 128.762C89.3244 128.762 78.2381 117.676 78.2381 104C78.2381 90.3244 89.3244 79.2381 103 79.2381C116.676 79.2381 127.762 90.3244 127.762 104Z"
        fill=""
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M103 208C155.393 208 198.738 169.257 205.947 118.857H145.035C138.917 136.169 122.407 148.571 103 148.571C83.5933 148.571 67.0835 136.169 60.9648 118.857H0.0532227C7.26235 169.257 50.6067 208 103 208ZM60.9648 89.1429H0.0532227C7.26235 38.7431 50.6067 0 103 0C155.393 0 198.738 38.7431 205.947 89.1429H145.035C138.917 71.8314 122.407 59.4286 103 59.4286C83.5933 59.4286 67.0835 71.8314 60.9648 89.1429ZM127.762 104C127.762 117.676 116.676 128.762 103 128.762C89.3244 128.762 78.2381 117.676 78.2381 104C78.2381 90.3244 89.3244 79.2381 103 79.2381C116.676 79.2381 127.762 90.3244 127.762 104Z"
        fill="#ffff"
      />
    </svg>
  );

  return (
    <header
      className={`flex flex-row items-center justify-center bg-primary ${
        !requiredRedInDarkMode ? "dark:bg-transparent" : ""
      } w-full p-6 z-10`}
    >
      <div className="w-full max-w-[1440px] flex flex-row items-center justify-between">
        {/* Logo Button with Navigation to Home */}
        <Link to="/home">
          <button>{svg}</button>
        </Link>

        {/* Center Header Text */}
        <h1 className="text-xl text-gray-200">Enjoy Your Journey!</h1>

        {/* Dark Mode Toggle Button */}
        <ToggleButton />
      </div>
    </header>
  );
};

export default Header;
