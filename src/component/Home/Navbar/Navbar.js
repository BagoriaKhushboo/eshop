import "./Navbar.css";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
function Navbar(props) {
  return (
    <>
      <div className="header">
        <div className="container-fluid">
          <nav className="nav-bar">
            <div className="logo">
              <a className="" href="/">
                {props.title}
              </a>
            </div>
            <div className="menu">
              <ul className="">
                <li className="">
                  <a className="" href="/signin">
                    {props.sign}
                  </a>
                </li>
                <li className="">
                  <a className="" href="/register">
                    {props.register}
                  </a>
                </li>
                <li className="">
                  <a className="cart" href="/cart">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-bag-check"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                      />{" "}
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg> */}
                    Cart &nbsp;
                    {props.count > 0 && (
                      <span className="badge text-bg-warning">
                        {props.count}
                      </span>
                    )}
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="hero">
        <div className="card text-bg-dark">
          <img
            src="https://static-blog.omniconvert.com/blog/wp-content/uploads/2020/09/21135804/How-to-do-Growth-of-eCommerce-Website-scaled.jpg"
            className="card-img"
            alt="..."
          />
          <div className="card-img-overlay">
            <h5 className=" display-3 fw-bold">new season arrival</h5>
            <p className="card-text display-3 fs-2">checkout all the trends</p>
          </div>
        </div>
      </div>
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
  register: PropTypes.string,
  sign: PropTypes.string,
};
Navbar.defaultProps = {
  title: "E-SHOP",
  sign: "Sign In",
  register: "Register",
};
export default Navbar;
