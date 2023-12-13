import './navbar.css';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';
import search from '../assets/search.svg';
import Avatar from './Avatar';
const Navbar = () => {
  var User = null;
  return (
    <nav className="main-nav">
      <div className="navbar">
        <Link to="/" className="nav-item nav-logo">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/" className="nav-item nav-btn">
          Home
        </Link>
        <Link to="/" className="nav-item nav-btn">
          About
        </Link>
        <Link to="/" className="nav-item nav-btn">
          Products
        </Link>
        <form>
          <input type="text" placeholder="Srch" />
          <img className="search-icon" src={search} alt="Search" width="18" />
        </form>

        {User === null ? (
          <Link to="/Auth" className="nav-item nav-link">
            Login
          </Link>
        ) : (
          <>
            <Avatar
              backgroundColor="yellow"
              px="10px"
              py="7px"
              borderRedious="50%"
              color="red"
            >
              <Link
                to="/Profile"
                className="avatar"
                style={{ color: 'white', textDecoration: 'none' }}
              >
                S
              </Link>
            </Avatar>

            <button className="nav-item nav-link">Log out</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
