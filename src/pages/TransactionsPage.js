import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { myTransaction } from "../api/auth";

export const TransactionsPage = () => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const { data: Transactions, isPending } = useQuery({
    queryKey: ["myTransaction"],
    queryFn: myTransaction,
  });
  function toNormaldate(time) {
    const date = new Date(time);
    const formattedDate = date.toLocaleString("en-US");
    // e.g., "9/5/2024, 6:39:38 PM" in US locale
    console.log(
      "formatted",
      formattedDate.slice(0, formattedDate.indexOf(","))
    );
    return formattedDate.slice(0, formattedDate.indexOf(","));
  }
  if (!isPending) {
    console.log(Transactions);
  }
  const transactionsList = Transactions?.filter((transaction) => {
    if (to != "" && from != "") {
      if (
        toNormaldate(from) <= toNormaldate(transaction.createdAt) &&
        toNormaldate(transaction.createdAt) <= toNormaldate(to)
      ) {
        return true;
      }
    } else {
      return true;
    }
  })
    .filter((transaction) => {
      return (
        transaction.amount && transaction.amount.toString().includes(query)
      );
    })
    .filter((transaction) => {
      return transaction.type.includes(type);
    })
    .map((item) => {
      return (
        <li key={item._id} className="border-b p-4">
          <div>
            <p
              className={`uppercase font-bold ${
                item.type === "withdraw"
                  ? "text-red-500"
                  : item.type === "deposit"
                  ? "text-green-500"
                  : item.type === "transfer"
                  ? "text-blue-500"
                  : ""
              }`}
            >
              {item.type === "withdraw"
                ? "Withdraw"
                : item.type === "deposit"
                ? "Deposit"
                : item.type === "transfer"
                ? "Transfer"
                : ""}
            </p>
            <p>{item.type === "withdraw" ? "Withdraw" : "Deposit"}</p>

            <p>Date:{toNormaldate(item.createdAt)}</p>
            <p>Amount: ${item.amount}</p>
          </div>
        </li>
      );
    });
  const handleFrom = (e) => {
    setFrom(e.target.value);
  };
  const handleTo = (e) => {
    setTo(e.target.value);
  };
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };
  const handleType = (e) => {
    setType(e.target.value);
  };

  return (
    //     <div className="bg-gray-900  text-white min-h-screen flex flex-col items-center justify-center p-8">
    //       <div className="bg-gray-800  p-6 rounded-lg shadow-lg">
    //         <input
    //           onChange={handleQuery}
    //           type="number"
    //           className="form-control rounded text-black"
    //           placeholder="Search"
    //           aria-label="Search"
    //           aria-describedby="search-addon"
    //         />
    //         <select className="form-select text-black " onChange={handleType}>
    //           <option className="form-select text-black" value="" selected>
    //             All
    //           </option>
    //           <option
    //             className="form-select rounded-lg shadow-lg text-black"
    //             value="transfer"
    //           >
    //             transfer
    //           </option>
    //           <option value="withdraw">withdraw</option>
    //           <option value="deposit">deposit</option>
    //         </select>
    //         <input
    //           className=" rounded-lg shadow-lg
    // text-black"
    //           type="date"
    //           onChange={handleFrom}
    //         />
    //         <input
    //           className=" rounded-lg shadow-lg
    // text-black"
    //           type="date"
    //           onChange={handleTo}
    //         />
    //         <button>search</button>
    //         <div className="flex  flex-col flex-wrap gap-3 ">
    //           {transactionsList}
    //         </div>
    //       </div>
    //     </div>

    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-8">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
        {" "}
        {/* Adjusted padding and max-width */}
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Search Transactions
        </h1>
        <div className="space-y-4">
          {" "}
          {/* Space between form elements */}
          <input
            onChange={handleQuery}
            type="number"
            className="w-full px-4 py-2 border border-gray-600 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <select
            className="w-full px-4 py-2 border border-gray-600 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleType}
          >
            <option value="" selected>
              All
            </option>
            <option value="transfer">Transfer</option>
            <option value="withdraw">Withdraw</option>
            <option value="deposit">Deposit</option>
          </select>
          <div className="flex space-x-4">
            {" "}
            {/* Flex container for date inputs */}
            <input
              className="w-full px-4 py-2 border border-gray-600 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="date"
              onChange={handleFrom}
            />
            <input
              className="w-full px-4 py-2 border border-gray-600 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="date"
              onChange={handleTo}
            />
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-4">{transactionsList}</div>
      </div>
    </div>
  );
};

export default TransactionsPage;
