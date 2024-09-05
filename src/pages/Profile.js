import { useQuery } from "@tanstack/react-query";
import React from "react";
import { me } from "../api/auth";

const Profile = () => {
  const { data: user } = useQuery({
    queryKey: ["me"],
    queryFn: me,
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img
          src={`https://react-bank-project.eapi.joincoded.com/${user?.image}`}
          alt="user"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <lu>
          <li className="text-2xl font-semibold text-center">
            Username:
            {user?.username}
          </li>
          <li className="text-2xl font-semibold text-center">
            {user?.balance}$
          </li>
        </lu>
      </div>
    </div>
  );
};

export default Profile;
