import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    cursor: 'pointer'
  }

  const activeLinkStyle = {
    ...linkStyle,
    textDecoration: 'underline',
    fontWeight: 'bold'
  }

  return (
    <header style={{
      backgroundColor: '#1a2b4a',
      padding: '1rem 2rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <nav>
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          gap: '2rem',
          margin: 0,
          padding: 0
        }}>
          <li>
            <NavLink 
              to="/" 
              style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/privacy" 
              style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
            >
              Privacy policy
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header