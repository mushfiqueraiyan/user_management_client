import React from "react";

const UpdateUser = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl mb-5">Update Users</h1>

      <div>
        <form>
          <label className="label">Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            className="input w-full"
          />
          <label className="label">Profile URL</label>
          <input
            type="text"
            placeholder="Profile URL"
            className="input w-full"
            name="profileURL"
          />
          <div className="flex items-center gap-2 mt-2">
            <div className="w-full">
              <label className="label">Email</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input w-full"
              />
            </div>
            <div className="w-full">
              <label className="label">Phone Number</label>
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                className="input w-full"
              />
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-full">
              <label className="label">Address</label>
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="input w-full"
              />
            </div>
            <div className="w-full">
              <label className="label">Country</label>
              <input
                type="text"
                name="country"
                placeholder="Country"
                className="input w-full"
              />
            </div>
          </div>
          <button className="btn mt-2 w-full btn-primary">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
