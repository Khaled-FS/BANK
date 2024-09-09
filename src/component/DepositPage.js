// import React, { useState } from "react";
// import { deposit } from "../api/auth";
// import {
//   QueryClient,
//   useMutation,
//   useQueries,
//   useQueryClient,
// } from "@tanstack/react-query";

// const DepositPage = () => {
//   const [amount, setAmount] = useState("");
//   const [withdraw, setWithdraw] = useState(false);
//   const [deposit, setDeposit] = useState(false);
//   const handledeposit = () => {
//     if (deposit) {
//       setDeposit(true);
//     }
//   };
//   const handleWithdraw = () => {
//     if (withdraw) {
//       setWithdraw(true);
//     }
//   };
//   const queryClient = useQueryClient();

//   const { mutate: addMoney } = useMutation({
//     mutationKey: ["deposit"],
//     mutationFn: () => deposit(amount),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["me"] });
//       setAmount("");
//     },
//   });

//   return (
//     <div className="flex flex-col md:flex-row items-center gap-8 p-4 bg-gray-800 rounded-lg shadow-lg">
//       <div className="flex flex-col items-center">
//         <h2 className="text-2xl font-semibold mb-2">Withdraw</h2>
//         <button
//           onClick={handleWithdraw}
//           className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
//         >
//           Withdraw Funds
//         </button>
//       </div>
//       {/* <div className="flex flex-col items-center">
//         <DepositPage />
//       </div> */}
//       <input
//         onChange={(e) => {
//           setAmount(e.target.value);
//         }}
//         type="number"
//         value={amount}
//         className="text-black"
//       />
//       <div className="flex flex-col items-center">
//         <h2 className="text-2xl font-semibold mb-2">Deposit</h2>
//         <button
//           onClick={handledeposit}
//           className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
//         >
//           Deposit Funds
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DepositPage;

import React, { useState } from "react";
import { deposit, withdraw } from "../api/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const DepositPage = () => {
  const [amount, setAmount] = useState("");

  const queryClient = useQueryClient();

  // Mutation for depositing funds
  const { mutate: handleDeposit } = useMutation({
    mutationKey: ["deposit"],
    mutationFn: (amount) => deposit(amount),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["me"] });
      setAmount("");
    },
  });

  // Mutation for withdrawing funds (if needed, similar setup)
  const { mutate: handleWithdraw } = useMutation({
    mutationKey: ["withdraw"],
    mutationFn: (amount) => withdraw(amount),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["me"] });
      setAmount("");
    },
  });

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-4 bg-gray-800 rounded-lg shadow-lg">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-2">Withdraw</h2>
        <button
          onClick={() => handleWithdraw(amount)}
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
        >
          Withdraw Funds
        </button>
      </div>

      <input
        onChange={(e) => setAmount(e.target.value)}
        type="number"
        value={amount}
        placeholder="Enter amount"
        className="text-black p-2 rounded"
      />

      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-2">Deposit</h2>
        <button
          onClick={() => handleDeposit(amount)}
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
        >
          Deposit Funds
        </button>
      </div>
    </div>
  );
};

export default DepositPage;
