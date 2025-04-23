import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top px-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Brand and Toggler in one row */}
        <div className="d-flex align-items-center">
          {/* Burger icon */}
          <button
            className="navbar-toggler me-2 p-1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ fontSize: '1rem', border: '1px solid #ccc' }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Brand Name */}
          <Link className="navbar-brand mb-0 h6" to="/">
            Black-List Users
          </Link>
        </div>

        {/* Menu */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Search User</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-person">Add User To Blacklist</Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-sm btn-danger ms-lg-2 mt-2 mt-lg-0" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
