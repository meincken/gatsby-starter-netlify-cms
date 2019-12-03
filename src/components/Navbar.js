import React from "react";
import { Link } from "gatsby";
import Logo from "../img/logo.svg";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px 0;
  text-align: center;

  a {
    display: inline-block;
    padding: 10px;
    text-decoration: none;
  }

  svg {
    fill: #a9cc17;
    width: 150px;
  }
`;

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <Container>
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <Logo />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
            </div>
          </div>
        </Container>
      </nav>
    );
  }
};

export default Navbar;
