import React from "react";
import { Link } from "gatsby";
import Logo from "../img/logo.svg";
import styled from "styled-components";

const Nav = styled.nav`
  background: #000;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 10px;

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

const NavBarBrand = styled.div`
  grid-column: 3 / span 8;
  text-align: center;
`;

const NavBarMenu = styled.div`
  grid-column: 3 / span 8;
  text-align: center;
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
      <Nav
        className="sis-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <NavBarBrand>
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
        </NavBarBrand>

        <NavBarMenu id="navMenu" className={this.state.navBarActiveClass}>
          <Link className="navbar-item" to="/about">
            About
          </Link>
          <Link className="navbar-item" to="/blog">
            Blog
          </Link>
        </NavBarMenu>
      </Nav>
    );
  }
};

export default Navbar;
