import React from "react";
import { Link } from "gatsby";
import Social from "./Social";

import Logo from "../img/logo.svg";
import styled from "styled-components";
import { color } from "./../shared/styles";

const FooterWrap = styled.footer`
  background-color: ${color.black};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 30px;
  padding: 20px 0;

  svg {
    grid-column: 6 / span 2;
    margin-bottom: 20px;
  }
`;

const LinkBlock = styled.div`
  display: flex;
  grid-column: 3 / span 8;
  justify-content: center;

  a {
    padding: 0 10px 20px;
    text-decoration: none;
  }
`;

const Small = styled.small`
  grid-column: 6 / span 2;
  text-align: center;
`;

const Footer = class extends React.Component {
  getYear() {
    return new Date().getFullYear();
  }

  render() {
    return (
      <FooterWrap>
        <Logo fill={color.primary} />
        <LinkBlock>
          <Link to="/" className="navbar-item">
            Home
          </Link>

          <Link className="navbar-item" to="/about">
            About
          </Link>

          <Link className="navbar-item" to="/contact/examples">
            Form Examples
          </Link>

          <a
            className="navbar-item"
            href="/admin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Admin
          </a>
        </LinkBlock>
        <LinkBlock>
          <Link className="navbar-item" to="/blog">
            Latest Stories
          </Link>

          <Link className="navbar-item" to="/contact">
            Contact
          </Link>
        </LinkBlock>
        <Social />
        <Small>&copy; Copyright {this.getYear()} Nick Meincken</Small>
      </FooterWrap>
    );
  }
};

export default Footer;
