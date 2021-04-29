import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  let styleActive = {
    backgroundColor: "#fff",
    borderRadius: "50%",
    color: "#000",
  };

  const { tenDangNhap } = useSelector((state) => state.NguoiDungReducer);
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark text-light">
      <NavLink className="navbar-brand" to="/">
        CYBERSOFT
      </NavLink>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink
              activeClassName="text-danger"
              activeStyle={styleActive}
              className="nav-link"
              to="/home"
            >
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeStyle={styleActive} className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            {tenDangNhap.trim() !== "" ? (
              <NavLink to="/" className="nav-link">
                {tenDangNhap}
              </NavLink>
            ) : (
              <NavLink
                activeStyle={styleActive}
                className="nav-link"
                to="/login"
              >
                Login
              </NavLink>
            )}
          </li>

          <li className="nav-item">
            <NavLink
              activeStyle={styleActive}
              className="nav-link"
              to="/register"
            >
              Register
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Hook
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item" to="/demousestate">
                Use State
              </NavLink>
              <NavLink className="dropdown-item" to="/demouseeffect">
                Use Effect
              </NavLink>
              <NavLink className="dropdown-item" to="/apiclass">
                Api Class
              </NavLink>
              <NavLink className="dropdown-item" to="/apifunction">
                Api Function
              </NavLink>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
          />
          <button className="btn btn-outline-light my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
