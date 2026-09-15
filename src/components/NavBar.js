import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import logo from "./Photo/logo.png";

const NavBar = ({ id }) => {
  const [userName, setUserName] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

  // Function to retrieve the user's name from localStorage
  const fetchUserName = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user && user.fullName) {
      setUserName(user.fullName);
    } else {
      setUserName(null);
    }
  };

  // Fetch the user name when the component mounts
  useEffect(() => {
    fetchUserName();

    // Listen for the custom 'storage' event
    const handleStorageChange = () => fetchUserName();
    window.addEventListener("storage", handleStorageChange);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Log out function
  const handleLogout = () => {
    localStorage.removeItem("currentUser"); // Clear user data from localStorage
    setUserName(null); // Reset username state
    navigate("/"); // Redirect to login page
  };

  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="Pet Heaven Logo" className="logo" />
      </Link>
      <div className="menuitem">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="dropdown">
            <Link>Services &#9660;</Link>
            <div className="dropdown-content">
              <Link to="/adopt_us">Adopt a Pet</Link>
              <Link to="/fundog">Pet Release</Link>
              <Link to="/services">PetCare Guides</Link>
              <Link to="/volunter">Volunteer</Link>
              <Link to="/donation">Donations</Link>
            </div>
          </li>
          <li>
            <Link to="/funcat">Adoption Stories</Link>
          </li>
          <li>
            <Link to="/contact_us">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="login-link">
        {userName ? (
          <div className="user-dropdown-container">
            <span className="user-name" onClick={toggleDropdown}>
              Welcome, {userName} &#9660;
            </span>
            <div className={`user-dropdown ${isDropdownOpen ? 'show' : ''}`}>
              <div className="dashboard-option">
                <Link to="/dashboard" className="dropdown-link">
                  Dashboard
                </Link>
              </div>
              <div className="logout-option" onClick={handleLogout}>
                Log out
              </div>
            </div>
          </div>
        ) : (
          <Link to="/login">Login | Member</Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
