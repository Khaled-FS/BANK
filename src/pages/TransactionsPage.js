import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { myTransaction } from "../api/auth";
import UserItem from "./UserItem";
import User from "./Users";

export const TransactionsPage = () => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");

  const { data: Transactions, isPending } = useQuery({
    queryKey: ["myTransaction"],
    queryFn: myTransaction,
  });
  function toNormaldate(time) {
    const date = new Date(time);
    const formattedDate = date.toLocaleString(); // e.g., "9/5/2024, 6:39:38 PM" in US locale
    console.log(formattedDate);
    return formattedDate;
  }
  if (!isPending) {
    console.log(Transactions);
  }
  const transactionsList = Transactions?.filter((transaction) => {
    return transaction.amount && transaction.amount.toString().includes(query);
  })
    .filter((transaction) => {
      return transaction.type.includes(type);
    })
    .map((item) => {
      return (
        <li key={item._id} className="border-b p-4">
          <div>
            {/* <p className="uppercase font-bold">{item.type}</p> */}
            <p
              className={`uppercase font-bold ${
                item.type === "withdraw"
                  ? "text-red-500"
                  : item.type === "deposit"
                  ? "text-green-500"
                  : ""
              }`}
            >
              {item.type === "withdraw" ? "Withdraw" : "Deposit"}
            </p>

            <p>{toNormaldate(item.createdAt)}</p>
            <p>Amount: ${item.amount}</p>
            {/*{item.type} ,{item.amount},{item.updatedAt},

      ,today.toDateString(); */}
          </div>
        </li>
      );
    });

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };
  const handleType = (e) => {
    console.log(e.target.value);
    setType(e.target.value);
  };
  return (
    <div className="flex justify-center items-center h-1/2">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <input
          onChange={handleQuery}
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <select className="form-select" onChange={handleType}>
          <option value="" selected>
            All
          </option>
          <option value="transfer">transfer</option>
          <option value="withdraw">withdraw</option>
          <option value="deposit">deposit</option>
        </select>
        <button>search</button>
        <div className="flex  flex-col flex-wrap gap-3 ">
          {transactionsList}
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;
