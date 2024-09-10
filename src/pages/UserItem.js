import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { transfers } from "../api/auth";
// import { QueryClient } from "@tanstack/react-query";

const UserItem = ({ user }) => {
  // usestate
  const [amount, setAmount] = useState("");
  // handleChange

  // useMuation
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["transfers"],
    mutationFn: () => transfers(amount, user.username),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setAmount("");
    },
  });

  //   bigboss

  return (
    <div
      key={user.id}
      className=" bg-gray-800 p-6 rounded-md flex flex-col items-center justify-center"
    >
      <img
        src={`https://react-bank-project.eapi.joincoded.com/${user.image}`}
        alt="User image"
        className="w-24 h-24 rounded-full mb-4"
      />
      <div className="text-center">
        <h3 className="text-lg  font-semibold mb-2">{user.username}</h3>
      </div>
      <div className="text-center">
        <h3 className="text-lg  font-semibold mb-2">{user.balance}</h3>
        {/* <div >
          <input
            type="number"
            id="amount"
            name="username"
            placeholder="Amount"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            className="border-2 text-black"
          />

          <button
            onClick={mutate}
            type="submit"
            className="border-2 rounded-lg p-2 mt-5"
          >
            Transfer
          </button> */}

        {/* </div> */}

        <div className="flex flex-col items-center space-y-4">
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border-2 border-gray-300 text-black px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={mutate}
            type="button"
            className="border-2 border-blue-500 text-blue-500 rounded-lg p-2 mt-2 bg-blue-100 hover:bg-blue-200 transition-colors"
          >
            Transfer
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
