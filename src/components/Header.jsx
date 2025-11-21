import React from 'react'

const Header = () => {
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
          <li style={{ color: '#fff', cursor: 'pointer' }}>Home</li>
          <li style={{ color: '#fff', cursor: 'pointer' }}>About</li>
          <li style={{ color: '#fff', cursor: 'pointer' }}>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header