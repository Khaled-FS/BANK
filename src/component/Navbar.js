// import React, { useState } from "react";
// import bank from "../assets/pngtree-debit-card-payment-png-image_5705181.jpeg";
// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <img src={bank} alt="logo" className="size-20" />
//             <button className="bg-white">register</button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../context/UserContext";
import { deleteToken } from "../api/storage";
const Navbar = () => {
  const handleLogOut = () => {
    deleteToken();
    return setUser(false);
  };
  const [user, setUser] = useContext(UserContext);
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <span className="font-semibold text-xl text-white">
                Our Notes
              </span>
            </Link>
          </div>
          <div className="block">
            <div className="ml-10 flex items-baseline space-x-4">
              {user ? (
                <>
                  <NavLink
                    to="/Home"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/users"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Users
                  </NavLink>

                  <NavLink
                    onClick={handleLogOut}
                    to="/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    log out
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink
                    to="/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Register
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
