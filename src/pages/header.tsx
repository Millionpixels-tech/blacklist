import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.setItem('accessToken', '');
    navigate('/login');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Detect screen width for mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992); // Bootstrap breakpoint for lg
    };
    handleResize(); // Set initially
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top px-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Brand and Toggler */}
        <div className="d-flex align-items-center">
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

          <Link className="navbar-brand mb-0 h6" to="/">
            Black-List Users
          </Link>
        </div>

        {/* Menu */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">Search User</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-person">Add User To Blacklist</Link>
            </li>

            {isMobile ? (
              // On Mobile: Show Change Password and Logout directly
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/change-password">Change Password</Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-link nav-link text-danger" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              // On Desktop: My Account dropdown
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle d-flex align-items-center"
                  style={{ cursor: 'pointer' }}
                  onClick={toggleDropdown}
                  id="accountDropdown"
                  aria-expanded={isDropdownOpen}
                >
                  My Account <span className="ms-1">&#9662;</span>
                </div>
                <ul
                  className={`dropdown-menu dropdown-menu-end ${isDropdownOpen ? 'show' : ''}`}
                  aria-labelledby="accountDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/change-password">Change Password</Link>
                  </li>
                  <li>
                    <button className="dropdown-item text-danger" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
