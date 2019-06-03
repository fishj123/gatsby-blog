import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <nav>
    <span className="nav-logo">Jack Fisher</span>
    <ul className="nav-items">
      <li><Link to="/"> Home</Link></li>
      <li><Link to="/blogs">Blogs</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
