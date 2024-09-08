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
  if (!isPending) {
    console.log(Transaction);
  }
  const transactionsList = Transaction?.map((item) => (
    <div>
      {item.type},{item.amount},{item.updatedAt},{/* today.toDateString(); */}
    </div>
  ));
  return (
    <div className="flex justify-center items-center h-screen">
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
        ;
      </div>
    </div>
  );
};

export default TransactionsPage;

{
  /* Note list */
}
