import React from "react";
import bank from "../assets/pngtree-debit-card-payment-png-image_5705181.jpeg";

const Registration = () => {
  return (
    <div className="bg-gray-400">
      <div className="border flex items-center justify-center h-96 space-x-40">
        <div>
          <img src={bank} alt="bank logo" />
        </div>
        <div>
          <h1>Register</h1>
          <div>
            <p>Username</p>
            <input type="text" id="username" name="username" required />
          </div>
          <div>
            <p>Password</p>
            <input type="password" id="password" name="password" required />
          </div>
          <div>
            <lable>Profile image</lable>
            <input type="file" id="image" name="image" required />
          </div>
          <div className="m-10">
            <button className="border ">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
