import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <p className="nav__logo">Where in the world?</p>
      <ul className="nav__list">
        <li>
          <a href="/" className="nav__dark">Home</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
