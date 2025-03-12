import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
        <li>
          <Link to="/ourwork">Our Work</Link>
        </li>
        {/* <li>
          <Link to="/contactus">3. Contact Us</Link>
        </li> */}
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background-color: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    list-style: none;
    display: flex;
  }
  #logo {
    font-family: "Lobster", cursive;
    font-weight: lighter;
    font-size: 1.5rem;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`;
export default Nav;
