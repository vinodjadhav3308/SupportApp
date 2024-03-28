import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 sidebar">
      <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <a
          href="/"
          class="d-flex align-items-center pt-5 mb-md-0 me-md-auto  text-decoration-none"
        >
          <span class="fs-5 d-none d-sm-inline"></span>
        </a>
        <ul
          class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start "
          id="menu"
        >
          <li class="nav-item mt-2">
            <a href="#" class="nav-link align-middle px-0">
              <i class="fa fa-home" aria-hidden="true"></i>

              <span class="ms-1 d-none d-sm-inline">Teacher Dashboard</span>
            </a>
          </li>

          <li>
            <a
              href="#submenu3"
              data-bs-toggle="collapse"
              class="nav-link px-0 align-middle"
            >
              <i class="fa fa-user" aria-hidden="true"></i>
              <span class="ms-1 d-none d-sm-inline">Manage Tutorials</span>
              <i class="fa fa-angle-down " aria-hidden="true"></i>
            </a>
            <ul
              class="collapse nav flex-column ms-1 pl-5"
              id="submenu3"
              data-bs-parent="#menu"
              // style={{ backgroundColor: "#57b960" }}
            >
              <li class="w-100 ml-2">
                <Link to="/instructor/newtutorial" class="nav-link px-3">
                  <span class="d-none d-sm-inline">Create Tutorial</span>
                </Link>
              </li>
              <li>
                <Link to="/actions" class="nav-link px-3">
                  <span class="d-none d-sm-inline">Actions</span>
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <a href="#" class="nav-link px-0 align-middle">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>

              <span class="ms-1 d-none d-sm-inline ">Revenue</span>
            </a>
          </li>
          <li>
            <a
              href="#submenu2"
              data-bs-toggle="collapse"
              class="nav-link px-0 align-middle "
            >
              <i class="fa fa-bell" aria-hidden="true"></i>
              <span class="ms-1 d-none d-sm-inline">Announcements</span>
            </a>
            <ul
              class="collapse nav flex-column ms-1"
              id="submenu2"
              data-bs-parent="#menu"
            ></ul>
          </li>
          <li>
            <a
              href="#submenu3"
              data-bs-toggle="collapse"
              class="nav-link px-0 align-middle"
            >
              <i class="fa fa-user" aria-hidden="true"></i>
              <span class="ms-1 d-none d-sm-inline">Manage Profile</span>{" "}
            </a>
            <ul
              class="collapse nav flex-column ms-1"
              id="submenu3"
              data-bs-parent="#menu"
            >
              <li class="w-100">
                <a href="#" class="nav-link px-0">
                  {" "}
                  <span class="d-none d-sm-inline">Product</span> 1
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-0">
                  {" "}
                  <span class="d-none d-sm-inline">Product</span> 2
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-0">
                  {" "}
                  <span class="d-none d-sm-inline">Product</span> 3
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-0">
                  {" "}
                  <span class="d-none d-sm-inline">Product</span> 4
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <hr />
        <div class="dropdown pb-4">
          <a
            href="#"
            class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt="hugenerd"
              width="30"
              height="30"
              class="rounded-circle"
            />
            <span class="d-none d-sm-inline mx-1">loser</span>
          </a>
          <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <a class="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
