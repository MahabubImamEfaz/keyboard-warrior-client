import React from "react";
import { Link, Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const DashboardLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="drawer drawer-mobile bg-slate-400">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Orders</Link>
            </li>

            <li>
              <Link to="mybookings">My Orders 2</Link>
            </li>
            <li>
              <Link to={`allsellers/Seller`}>All Sellers</Link>
            </li>
            <li>
              <Link to={`allbuyers/Buyer`}>All Buyers</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
