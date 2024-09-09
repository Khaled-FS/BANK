import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { myTransaction } from "../api/auth";
import UserItem from "./UserItem";
import User from "./Users";

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
                  ? "text-black"
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

            <p>{toNormaldate(item.createdAt)}</p>
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
        <input type="date" onChange={handleFrom} />
        <input type="date" onChange={handleTo} />
        <button>search</button>
        <div className="flex  flex-col flex-wrap gap-3 ">
          {transactionsList}
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;
