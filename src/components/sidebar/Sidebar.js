import React, { useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import items from "../../data/sidebar.json";

const Sidebar = ({ children }) => {
  const [show, setShow] = useState(false);

  const [active, setActive] = useState(false);

  return (
    <main className={show ? "space-toggle" : null}>
      <header className="header">
        <div className="app-name">MyApp</div>
        <div className="header-toggle">
          <i className="fa-solid fa-bars" onClick={() => setShow(!show)}></i>
        </div>
        <div className="search-box">
          <input
            type="text"
            className="search-txt"
            placeholder="Type to serach"
          />
          <a href="#" className="search-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
        </div>
        <div className="header-icon">
          <i className="fa-solid fa-bell notifications"></i>
          <i className="fa-solid fa-user user"></i>
        </div>
      </header>

      <aside className={`sidebar ${show ? "show " : null}`}>
        <nav className="nav">
          <div>
            <Link to="/" className="sidebar-admin-dashbord">
              <i className="fas fa-regular fa-gauge-high"></i>
              <span className="nav-logo-name">Dashboard</span>
            </Link>

            <hr className="solid" />

            <div className="nav-list">
              {items.map((item, index) => (
                <SidebarItem key={index} item={item} />
              ))}
            </div>
          </div>
        </nav>
      </aside>

      {/* <main-conatiner className=""></main-conatiner> */}
      <div className="main-conatiner">
        <div className="child-container">
        {children}
        </div>
      </div>
    </main>
  );
};

export default Sidebar;
