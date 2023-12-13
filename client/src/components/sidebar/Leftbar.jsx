import '../css/leftbar.css';
import { NavLink } from 'react-router-dom';
import Globe from '../../assets/Globe.svg';
function Leftbar() {
  return (
    <div className="Left-sidebar">
      <nav className="side-nav">
        <NavLink to="/" className="side-nav-links" activeClass="active">
          <p>Home</p>
        </NavLink>
        <div className="side-nav-div">
          <div>
            <p>Public</p>
          </div>
          <NavLink to="/Ask">
            <img src={Globe} alt="logo" />
            <p style={{ paddingLeft: '10px' }}>Query</p>
          </NavLink>
          <NavLink
            to="/Tags"
            className="side-nav-div"
            activeClass="active"
            style={{ paddingLeft: '40px' }}
          >
            <p>Tags</p>
          </NavLink>
          <NavLink
            to="/Tags"
            className="side-nav-div"
            activeClass="active"
            style={{ paddingLeft: '40px' }}
          >
            <p>Users</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Leftbar;
