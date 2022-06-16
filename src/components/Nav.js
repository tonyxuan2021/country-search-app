import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <p className="nav__logo">Where in the world?</p>
      <ul className="nav__list">
        <li>
          <Link to="/" className="nav__dark">Dark mode</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
