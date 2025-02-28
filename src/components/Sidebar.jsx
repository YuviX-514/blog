import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "../App.css";

const SideBar = ({ selectedTab, setSelectedTab }) => {
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <div
        className="h-screen w-64 d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
        style={{ width: "280px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi pe-none me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className=" mt-2 fs-4">Kunnect</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item" onClick={() => handleTabChange("Home")}>
            <a
              href="#"
              className={`nav-link text-white ${
                selectedTab === "Home" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              Home
            </a>
          </li>
          <li
            className="nav-item"
            onClick={() => handleTabChange("Create Post")}
          >
            <a
              href="#"
              className={`nav-link text-white ${
                selectedTab === "Create Post" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              Create Post
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://wallpapers.com/images/hd/cartoon-spiderman-pfp-ysuyf8ia96e2krvu.jpg"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>Yuv</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
