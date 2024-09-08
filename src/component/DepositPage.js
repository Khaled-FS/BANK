import React, { useState } from "react";
import { deposit } from "../api/auth";
import {
  QueryClient,
  useMutation,
  useQueries,
  useQueryClient,
} from "@tanstack/react-query";

const DepositPage = () => {
  const [amount, setAmount] = useState("");
  const [isOn, setIsOn] = useState("deposit");

  const toggle = () => {
    if (isOn === "deposit") {
      setIsOn("withdraw");
    } else {
      setIsOn("deposit");
    }
  };
  const queryClient = useQueryClient();

  const { mutate: addMoney } = useMutation({
    mutationKey: ["deposet"],
    mutationFn: () => deposit(amount, isOn),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["me"] });
      setAmount("");
    },
  });

  return (
    <div>
      <button
        onClick={toggle}
        className={`relative inline-flex items-center h-6 w-11 border-2 border-gray-300 rounded-full ${
          isOn === "deposit" ? "bg-green-500" : "bg-gray-200"
        } transition-colors duration-200 ease-in-out`}
      >
        <span
          className={`absolute left-0 top-0 inline-block h-6 w-6 transform bg-white rounded-full shadow-md transition-transform duration-200 ease-in-out ${
            isOn === "deposit" ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
      <input
        onChange={(e) => {
          setAmount(e.target.value);
        }}
        value={amount}
        className="text-black"
      />
      <button onClick={addMoney}>submit</button>
    </div>
  );
};

export default DepositPage;
