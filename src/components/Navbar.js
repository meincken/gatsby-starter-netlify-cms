import React from "react";
import { Link } from "gatsby";
import Logo from "../img/logo.svg";
import styled from "styled-components";
import { color } from "./../shared/styles";

const Nav = styled.nav`
  background: ${color.black};
  position: fixed;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 30px;
  padding: 10px 0;
  top: 0;
  z-index: 99999;
`;

const NavBarBrand = styled.div`
  grid-column: 6 / span 2;
`;

const NavBarMenu = styled.div`
  display: flex;
  grid-column: 6 / span 2;
  justify-content: space-between;

  > a {
    text-decoration: none;
    text-transform: uppercase;
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
      <Nav
        className="is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <NavBarBrand>
          <Link to="/" className="navbar-item" title="Logo">
            <Logo fill={color.primary} />
          </Link>
        </NavBarBrand>

        <NavBarMenu id="navMenu">
          <Link className="navbar-item" to="/about">
            About
          </Link>
          <Link className="navbar-item" to="/blog">
            Blog
          </Link>
          <Link className="navbar-item" to="/gallery">
            Gallery
          </Link>
        </NavBarMenu>
      </Nav>
    );
  }
};

export default Navbar;
