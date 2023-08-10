import React from 'react'
import './styles.css' // Import the shared styles

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-content">
        <div className="nav-logo">
          <img src="/logo.png" alt="Flowbite Logo" width="105" height="50" />
        </div>
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <a href="#" className="nav-menu-link">
              Home
            </a>
          </li>
          <li className="nav-menu-item">
            <a href="#" className="nav-menu-link">
              About 
            </a>
          </li>
          <li className="nav-menu-item">
            <a href="#" className="nav-menu-link">
              barbers
            </a>
          </li>
          <li className="nav-menu-item">
            <a href="#" className="nav-menu-link">
              points<br/>shop
            </a>
          </li>
          <li className="nav-menu-item">
            <a href="#" className="nav-menu-link">
              Contact
            </a>
          </li>
          <li className="nav-menu-item">
            <div className="container">
              <a href="#" id="imageLink">
                <img src="/user.png" alt="Clickable Image" width="50" />
              </a>
              <div className="dropdown" id="dropdown">
                <ul>
                  <li>Profile</li>
                  <li>Points</li>
                  <li>Logout</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
