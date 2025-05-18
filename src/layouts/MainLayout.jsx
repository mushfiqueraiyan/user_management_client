import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="max-w-screen-2xl mx-auto py-5 px-3">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
