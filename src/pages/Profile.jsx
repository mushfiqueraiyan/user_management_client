import { Edit } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Profile = () => {
  return (
    <div>
      <div className="w-full justify-items-center mt-50">
        <div className="relative">
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt=""
            className="w-50 rounded-full"
          />
          <div className="bg-primary text-white p-3 absolute rounded-full left-40 top-35">
            <Link to={"/update-profile"}>
              <Edit />
            </Link>
          </div>
        </div>
        <h1 className="mt-5 font-bold text-4xl">Demo Name 001</h1>
        <p className="mt-3 text-gray-500">Email: email@gmail.com</p>
      </div>
    </div>
  );
};

export default Profile;
