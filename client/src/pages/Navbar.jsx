import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 shadow-md text-white">
      {/* Left Side - App Name */}
      <h1 className="text-2xl font-bold text-purple-400">EchoNest</h1>

      {/* Right Side - Navigation Links */}
      <div className="flex space-x-6">
        <Link
          to="/"
          className="hover:text-purple-400 transition font-medium"
        >
          Home
        </Link>
        <Link
          to="/songs"
          className="hover:text-purple-400 transition font-medium"
        >
          Songs
        </Link>
        <button
          onClick={handleLogout}
          className="hover:text-red-400 transition font-medium"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
