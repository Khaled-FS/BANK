import React from "react";
import { useQuery } from "@tanstack/react-query";
import { me } from "../api/auth";
const MyBalance = () => {
  const { data: user } = useQuery({
    queryKey: ["me"],
    queryFn: me,
  });
  return (
    <div>
      <h1 className="text-2xl font-semibold text-center">{`My balance ${user?.balance}$`}</h1>
    </div>
  );
};

export default MyBalance;
