import React from "react";
import { useQuery } from "@tanstack/react-query";
import { myTransaction } from "../api/auth";

export const TransactionsPage = () => {
  const { data: Transaction, isPending } = useQuery({
    queryKey: ["myTransaction"],
    queryFn: myTransaction,
  });
  if (!isPending) {
    console.log(Transaction);
  }
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
      </div>
    </div>
  );
};

export default TransactionsPage;
