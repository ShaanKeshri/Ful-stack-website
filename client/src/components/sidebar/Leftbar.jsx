import '../css/leftbar.css';
import { NavLink } from 'react-router-dom';
import Globe from '../../assets/Globe.svg';
function Leftbar() {
  return (
    <div className="left-sidebar">
      <nav className="side-nav">
        <NavLink to="/" className="side-nav-links" activeClass="active">
          <p>Home</p>
        </NavLink>
        <div className="side-nav-div">
          <div>
            <p>PUBLIC</p>
          </div>

          <NavLink to="/Ask" className="globe">
            <img src={Globe} alt="logo" />
            <p>Query</p>
          </NavLink>
          <NavLink
            to="/Tags"
            className="side-nav-div"
            activeClass="active"
            style={{ paddingLeft: '35px' }}
          >
            <p>Tags</p>
          </NavLink>
          <NavLink
            to="/Tags"
            className="side-nav-div"
            activeClass="active"
            style={{ paddingLeft: '35px' }}
          >
            <p>Users</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Leftbar;
