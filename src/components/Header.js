import React from 'react'
import Link from 'gatsby-link'

const Header = props => (
  <header id="header">
    <Link to="/" className="logo">
      <strong>DATA 1201</strong>
    </Link>
    <nav>
      <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">
        Menu
      </a>
    </nav>
  </header>
)

Header.propTypes = {
  onToggleMenu: React.PropTypes.func,
}

export default Header
