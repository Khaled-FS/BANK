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
      <lu>
        <li className="text-2xl font-semibold text-center">{user?.balance}$</li>
      </lu>
    </div>
  );
};

export default MyBalance;
