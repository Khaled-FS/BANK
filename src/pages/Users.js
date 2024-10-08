import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllUsers } from "../api/auth";

import UserItem from "./UserItem";

const User = () => {
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  return (
    <div className=" bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-[90%]  w-full px-6 py-8  rounded-md  max-h-[80%]">
        <h2 className="text-3xl text-white font-semibold mb-6 ">Users</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {users?.map((user) => {
            return <UserItem user={user} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default User;
