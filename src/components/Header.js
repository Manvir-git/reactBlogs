
import '@fortawesome/fontawesome-free/css/all.min.css';

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Header.css';
import img from '../images/top.png';

function Header() {
  const location = useLocation();

  return (
    <>
    <div className="header-container">

    <div className='head'>
      <div className='Top-Container'>
        <div className='top-heading'>
          <h1 className='Manvir'>Manvir  B </h1>
          <img src={img} alt="Logo" />
          <h1 className='Manvir'> ogs </h1>

          <ul className="nav-links">
            <li>
              <Link
                to="/"
                className={location.pathname === '/' ? 'active' : ''}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Latest-Blogs"
                className={location.pathname === '/Latest-Blogs' ? 'active' : ''}
              >
                Latest Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/DSA"
                className={location.pathname === '/DSA' ? 'active' : ''}
              >
                DSA
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className={location.pathname === '/About' ? 'active' : ''}
              >
                About
              </Link>
            </li>
          </ul>

         
        </div>
        <div className="social-icons">
        <a href="https://www.linkedin.com/in/manvir291/"  rel="My profile">
          <i className="fab fa-linkedin"></i> {/* Correct LinkedIn Icon */}
        </a>
        <a href="https://www.instagram.com/smanvir_96/"  rel="My profile">
          <i className="fab fa-instagram"></i> {/* Correct Instagram Icon */}
        </a>
      </div>
      </div>
      </div>
      </div>
      
    </>
  );
}

export default Header;
