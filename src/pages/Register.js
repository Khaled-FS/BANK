import React, { useState } from "react";
import bank from "../assets/pngtree-debit-card-payment-png-image_5705181.jpeg";
import { useMutation } from "@tanstack/react-query";
import { register } from "../api/auth";
const Registration = () => {
  const [userInfo, setUserInfo] = useState({});

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  const { mutate: handlesignUp } = useMutation({
    mutationKey: ["Register"],
    mutationFn: () => {
      register(userInfo);
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add register logic here
    handlesignUp();
  };

  return (
    <div className="bg-gray-400">
      <div className="border flex items-center justify-center h-96 space-x-40">
        <div>
          <img src={bank} alt="bank logo" />
        </div>
        <div>
          <h1>register</h1>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-white text-sm font-medium mb-2"
              >
                User name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
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
