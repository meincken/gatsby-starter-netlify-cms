import React from "react";
import { Link } from "gatsby";
import Social from "./Social";

import Logo from "../img/logo.svg";

const Footer = class extends React.Component {
  getYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <footer>
        <Logo />
        <ul>
          <li>
            <Link to="/" className="navbar-item">
              Home
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/contact/examples">
              Form Examples
            </Link>
          </li>
          <li>
            <a
              className="navbar-item"
              href="/admin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Admin
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <Link className="navbar-item" to="/blog">
              Latest Stories
            </Link>
          </li>
          <li>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <Social />
        <small>&copy; Copyright {this.getYear()} Nick Meincken</small>
      </footer>
    );
  }
};

export default Footer;
