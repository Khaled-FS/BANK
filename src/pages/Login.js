import React, { useContext, useState } from "react";
import bank from "../assets/pngtree-debit-card-payment-png-image_5705181.jpeg";
import { login } from "../api/auth";
import { useMutation } from "@tanstack/react-query";
import UserContext from "../context/UserContext";
import { Navigate } from "react-router-dom";

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
    <div className="bg-gray-400 ">
      <div className="border flex items-center justify-center h-96 space-x-40 h-dvh">
        <div>
          <img className="" src={bank} alt="bank logo" />
        </div>
        <form onSubmit={handleFormSubmit}>
          <div>
            <h1>Login</h1>
            <div>
              <p>Username</p>
              <input
                type="text"
                id="username"
                name="username"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <p>Password</p>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                required
              />
            </div>
            <div className="m-10">
              <button type="submit" className="border ">
                login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
