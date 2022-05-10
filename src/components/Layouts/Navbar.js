import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <div className="container-fluid">
          <div className="" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link font-weight-bold" exact to="/">
                  Home
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link " exact to="/about">
                  About
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink
                  className="nav-link font-weight-bold ml-3"
                  exact
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/student/add" className="btn btn-outline-light ">
            Add Student
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
