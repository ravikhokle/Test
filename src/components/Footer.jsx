import React from 'react'

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#2c3e50',
      color: '#ecf0f1',
      padding: '2rem',
      textAlign: 'center',
      marginTop: 'auto',
      borderTop: '3px solid #3498db'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <p style={{ margin: '0.5rem 0', fontSize: '1rem' }}>
          © 2025 Your Company. All rights reserved.
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          marginTop: '1rem'
        }}>
          <a href="#" style={{ color: '#3498db', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#" style={{ color: '#3498db', textDecoration: 'none' }}>Terms of Service</a>
          <a href="#" style={{ color: '#3498db', textDecoration: 'none' }}>Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer