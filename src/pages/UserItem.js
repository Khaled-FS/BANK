import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { transfers } from "../api/auth";
// import { QueryClient } from "@tanstack/react-query";

const UserItem = ({ user }) => {
  // usestate
  const [amount, setAmount] = useState(0);
  // handleChange

  // useMuation
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["transfers"],
    mutationFn: () => transfers(amount, user.username),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  //   bigboss

  return (
    <div
      key={user.id}
      className="bg-gray-700 p-6 rounded-md flex flex-col items-center justify-center"
    >
      <img
        src={`https://react-bank-project.eapi.joincoded.com/${user.image}`}
        alt="User"
        className="w-24 h-24 rounded-full mb-4"
      />
      <div className="text-center">
        <h3 className="text-lg text-white font-semibold mb-2">
          {user.username}
        </h3>
      </div>
      <div className="text-center">
        <h3 className="text-lg text-white font-semibold mb-2">
          {user.balance}
        </h3>
        <div>
          <input
            type="number"
            id="amount"
            name="username"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />

          <button
            onClick={mutate}
            type="submit"
            className="border-2 rounded-lg p-2 mt-5"
          >
            Transfer
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
