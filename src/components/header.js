import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import ThemePicker from "./themePicker"

const StyledNav = styled.nav`
  width: 100%;
  max-width: 100vw;
  display: grid;
  grid-template-columns: 75% 25%;
  align-items: center;
  height: 3rem;
  position: absolute;
  z-index: 2;
  font-weight: bold;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

const Logo = styled.span`
  margin-left: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  display: inline-block;
  @media (max-width: 700px) {
    display: none;
  }
`

const Ul = styled.ul`
  display: inline-flex;
  justify-content: center;
  list-style: none;

  & li {
    padding: 0 2rem;
  }
`

function Header({ siteTitle }) {
  return (
    <StyledNav>
      <Logo>
        <Link to="/">Jack Fisher</Link>
      </Logo>
      <Ul>
        <li>
          <Link to="/"> Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
      </Ul>
      <ThemePicker />
    </StyledNav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
