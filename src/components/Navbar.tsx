import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#1a1a1a] text-white flex items-center justify-between px-6 py-4 shadow-md">
      {/* Logo */}
      <Link to="/">
        <img
          src="/logo.png"
          alt="Lobster Grill Logo"
          className="h-10"
        />
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-6 items-center text-sm font-medium">
        <a href="#menu" className="hover:text-red-400">Menu</a>
        <a href="#location" className="hover:text-red-400">Location</a>
        <a href="#contact" className="hover:text-red-400">Contact</a>
      </div>

      {/* Order Now Button */}
      <a
        href="https://order.toasttab.com/online/lobster-grill-1750-newport-boulevard"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded">
          Order Now
        </button>
      </a>
    </nav>
  );
}
