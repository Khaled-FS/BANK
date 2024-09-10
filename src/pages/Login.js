import React, { useContext, useState } from "react";
import bank from "../assets/pngtree-debit-card-payment-png-image_5705181.jpeg";
import { login } from "../api/auth";
import { useMutation } from "@tanstack/react-query";
import UserContext from "../context/UserContext";
import { Navigate } from "react-router-dom";
import C2C from "../assets/C2C.png";
const Login = () => {
  const [userInfo, setUserInfo] = useState({});

  const [user, setUser] = useContext(UserContext);

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { mutate: handleLogin } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      setUser(true);
    },
  });

  if (user) {
    return <Navigate to={"/Home"} />;
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-8">
      <div className="flex items-center justify-center h-96 space-x-48">
        {" "}
        {/* Increased space-x for more gap */}
        <div className="flex-shrink-0">
          <img
            className="h-32 w-auto" // Increased height for a larger image
            src={C2C}
            alt="bank logo"
          />
        </div>
        <form onSubmit={handleFormSubmit} className="w-full max-w-sm">
          {" "}
          {/* Constrain form width */}
          <div className="space-y-6">
            {" "}
            {/* Increased space between form elements */}
            <h1 className="text-2xl font-bold text-center px-4 py-2">
              {" "}
              {/* Adjusted text size */}
              Login
            </h1>
            <div>
              <p className="mb-2">Username</p> {/* Increased margin-bottom */}
              <input
                className="text-black w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="username"
                name="username"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <p className="mb-2">Password</p> {/* Increased margin-bottom */}
              <input
                className=" w-full text-black px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
