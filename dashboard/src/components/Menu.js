import React from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();
  const path = location.pathname;

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  const isActive = (route) => path === route;

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="Logo" />
      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/">
              <p className={isActive("/") ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders">
              <p className={isActive("/orders") ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings">
              <p className={isActive("/holdings") ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions">
              <p className={isActive("/positions") ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds">
              <p className={isActive("/funds") ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/apps">
              <p className={isActive("/apps") ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile">
          <Link style={{ textDecoration: "none" }} to="/profile">
            <div className="avatar">ZU</div>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/profile">
            <p className="username">Profile</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
