import React from "react";
import { useQuery } from "@tanstack/react-query";
import { myTransaction } from "../api/auth";
import UserItem from "./UserItem";
import User from "./Users";

export const TransactionsPage = () => {
  const { data: Transaction, isPending } = useQuery({
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
    console.log(Transaction);
  }
  const transactionsList = Transaction?.map((item) => (
    <li key={Transaction._id} className="border-b p-4">
      <div>
        <p className="uppercase font-bold">{item.type}</p>
        <p>{toNormaldate(item.createdAt)}</p>
        <p>Amount: ${item.amount}</p>
        {/*{item.type} ,{item.amount},{item.updatedAt},

      ,today.toDateString(); */}
      </div>
    </li>
  ));
  return (
    <div className="flex justify-center items-center h-1/2">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <input
          type="search"
          className="border form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <button>search</button>
        <div className="flex  flex-col flex-wrap gap-3 ">
          {transactionsList}
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;

{
  /* Note list */
}
