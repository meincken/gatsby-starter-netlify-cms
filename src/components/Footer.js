import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Social from "./Social";

import Logo from "../img/logo.svg";

const FooterBlock = styled.footer`
  background: #000;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 10px;
  padding: 40px 0;

  svg {
    display: block;
    fill: #a9cc17;
    grid-column: 2 / span 10;

    @media (min-width: 768px) {
      grid-column: 6 / span 2;
    }
  }

  ul {
    grid-column: 2 / span 10;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (min-width: 768px) {
      grid-column: 3 / span 8;
    }

    li {
      display: inline-block;

      a {
        display: block;
        margin: 0 10px 10px 0;
        text-decoration: none;
      }
    }
  }

  small {
    grid-column: 2 / span 10;

    @media (min-width: 768px) {
      grid-column: 3 / span 8;
    }
  }
`;

const Footer = class extends React.Component {
  getYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <FooterBlock>
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
            <Link className="navbar-item" to="/products">
              Products
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
      </FooterBlock>
    );
  }
};

export default Footer;
