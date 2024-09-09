import React from "react";
import MyBalance from "../component/MyBalance";
import Buttons from "../component/Buttons";
import DepositPage from "../component/DepositPage.js";

const Home = () => {
  return (
    // <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center gap-20px">
    //   <div className="flex gap-20px">
    //     <h1 className="">
    //       <MyBalance />
    //     </h1>
    //   </div>
    //   <div className="flex">
    //     <h1>withdrow</h1>
    //     <div className="flex flex-col">
    //       <DepositPage />
    //     </div>
    //     <h2> deposet</h2>
    //   </div>
    // </div>

    // <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center gap-8">
    //   <div className="flex flex-col items-center gap-4">
    //     <h1 className="text-2xl font-bold">
    //       <MyBalance />
    //     </h1>
    //   </div>
    //   <div className="flex items-center gap-4">
    //     <h1 className="text-xl">Withdraw</h1>
    //     <DepositPage />
    //     <h2 className="text-xl">Deposit</h2>
    //   </div>
    // </div>

    // <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center gap-12">
    //   <div className="flex flex-col items-center gap-6">
    //     <h1 className="text-3xl font-bold">
    //       <MyBalance />
    //     </h1>
    //   </div>
    //   <div className="flex items-center gap-8">
    //     <h1 className="text-xl font-semibold">Withdraw</h1>
    //     <DepositPage />
    //     <h2 className="text-xl font-semibold">Deposit</h2>
    //   </div>
    // </div>

    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-8">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          <MyBalance />
        </h1>
        <p className="text-lg text-gray-400">Your account balance</p>
      </div>
      {/* <div className="flex flex-col md:flex-row items-center gap-8 p-4 bg-gray-800 rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-2">Withdraw</h2>
          <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition">
            Withdraw Funds
          </button> */}
      {/* </div> */}
      <div className="flex flex-col items-center">
        <DepositPage />
      </div>
      {/* <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-2">Deposit</h2>
          <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
            Deposit Funds
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
