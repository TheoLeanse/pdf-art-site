import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <header className="header">
    <Link to="/">{siteTitle}</Link>
  </header>
)

export default Header
