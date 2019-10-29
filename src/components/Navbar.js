import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
      <nav className="Navbar-nav">
          <h1>The Simpson</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Quotes">Quotes</Link></li>
          </ul>
      </nav>
    )
  }

  export default Navbar