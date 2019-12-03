import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Logo from "../img/logo.svg";
import Instagram from "../img/social/instagram.svg";
import Twitter from "../img/social/twitter.svg";

const FooterBlock = styled.footer`
  background: #000;

  svg {
    display: block;
    fill: #a9cc17;
    margin: 0 auto;
    width: 150px;
  }
`;

const Social = styled.div`
  display: flex;
  justify-content: center;

  a {
    display: inline-block;
    margin: 0 10px;

    svg {
      max-width: 20px;
    }
  }
`;

const Footer = class extends React.Component {
  render() {
    return (
      <FooterBlock>
        <Logo />
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
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
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
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
                </section>
              </div>
              <Social>
                <a title="twitter" href="https://twitter.com">
                  <Twitter />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <Instagram />
                </a>
              </Social>
            </div>
          </div>
        </div>
      </FooterBlock>
    );
  }
};

export default Footer;
