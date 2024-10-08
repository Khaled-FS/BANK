import React, { useContext, useState } from "react";
import bank from "../assets/pngtree-debit-card-payment-png-image_5705181.jpeg";
import { useMutation } from "@tanstack/react-query";
import { register } from "../api/auth";
import UserContext from "../context/UserContext";
import { Navigate } from "react-router-dom";

import C2C from "../assets/C2C.png";

const Registration = () => {
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useContext(UserContext);
  const handleChange = (e) => {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  const { mutate: handlesignUp } = useMutation({
    mutationKey: ["Register"],
    mutationFn: () => register(userInfo),
    // onSuccess: setUser(true),
  });
  // if (user) {
  //   return <Navigate to={"/login"} />;
  // }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    handlesignUp();
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-8">
      <div className=" flex items-center justify-center h-96 space-x-40">
        <div className="flex-shrink-0">
          <img className="h-32 w-auto" src={C2C} alt="bank logo" />
        </div>
        <div>
          <h1>register</h1>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-white text-sm font-medium mb-2"
              >
                username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={handleChange}
                className="text-black w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-white text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                className=" text-black w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="image"
                className="block text-white text-sm font-medium mb-2"
              >
                Profile Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleChange}
                className="text-black w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
