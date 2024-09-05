import React from "react";
import MyBalance from "../component/MyBalance";

const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="max-w-3xl text-center">
        <h1 className="text-6xl font-bold mb-8">
          <MyBalance />
        </h1>
      </div>
    </div>
  );
};

export default Home;
