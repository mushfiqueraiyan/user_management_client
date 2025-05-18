import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <div>
        <Link to={"/add-user"}>
          <button className="btn btn-primary">Add Users</button>
        </Link>
      </div>

      {/* Table of users */}
      <div>
        <div className="overflow-x-auto mt-10">
          <table className="table table-zebra w-full min-w-[800px]">
            {/* Table Head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              <tr>
                <th>1</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="User avatar"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  hart@example.com
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>+1 (555) 123-4567</td>
                <td>New York, NY</td>
                <td>
                  <div className="flex gap-2">
                    <Link to={"/update-user"}>
                      <button className="btn btn-xs btn-primary">Edit</button>
                    </Link>
                    <button className="btn btn-xs btn-error">Delete</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
