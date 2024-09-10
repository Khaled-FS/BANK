import { useQuery } from "@tanstack/react-query";
import React from "react";
import { me } from "../api/auth";

const Profile = () => {
  const { data: user } = useQuery({
    queryKey: ["me"],
    queryFn: me,
  });

  return (
    // <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-8">
    //   <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
    //     <img
    //       src={`https://react-bank-project.eapi.joincoded.com/${user?.image}`}
    //       alt="user"
    //       className="w-32 h-32 rounded-full mx-auto mb-4"
    //     />
    //     <lu>
    //       <li className="text-2xl font-semibold text-center">
    //         Username:
    //         {user?.username}
    //       </li>
    //       <li className="text-2xl font-semibold text-center">
    //         {user?.balance}$
    //       </li>
    //     </lu>
    //   </div>
    // </div>

    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-8">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        {" "}
        {/* Increased padding and max-width */}
        <img
          src={`https://react-bank-project.eapi.joincoded.com/${user?.image}`}
          alt="user"
          className="w-40 h-40 rounded-full mx-auto mb-6"
        />
        <ul className="space-y-4">
          {" "}
          {/* Increased spacing between list items */}
          <li className="text-3xl font-semibold text-center">
            {" "}
            {/* Increased font size */}
            Username: {user?.username}
          </li>
          <li className="text-3xl font-semibold text-center">
            {" "}
            {/* Increased font size */}
            {user?.balance}$
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
