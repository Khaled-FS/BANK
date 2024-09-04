import React from "react";
import Navbar from "../component/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-400 ">
        <div className="border flex items-center justify-center h-96 space-x-40 h-dvh">
          <div>
            <h1>Login</h1>
            <div>
              <p>Username</p>
              <input></input>
            </div>
            <div>
              <p>Password</p>
              <input></input>
            </div>
            <div className="m-10">
              <button className="border ">login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
