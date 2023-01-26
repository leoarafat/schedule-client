import React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";

const DashboardLayout = () => {
  return (
    <div>
      {/* <Outlet/> */}
      <Dashboard />
      {/* <Outlet/> */}
    </div>
  );
};

export default DashboardLayout;
