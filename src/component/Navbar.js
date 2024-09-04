import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import bank from "../assets/pngtree-debit-card-payment-png-image_5705181.jpeg";
const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src={bank} alt="logo" className="size-20" />
            <button className="bg-white">register</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
