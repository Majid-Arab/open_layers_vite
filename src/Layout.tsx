import { Outlet, Link } from "react-router-dom";
import "./App.css"; // Include your styles

const Layout = () => {
  return (
    <div>
      <div className="sidebar">
        <Link className="active" to="/">
          Home
        </Link>
        <Link to="/map">Map</Link>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
      <div className="navbar">
        <Link className="active" to="/">
          Home
        </Link>
        <Link to="/map">Map</Link>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
      <div id="content">
        <Outlet /> {/* This is where the nested routes will render */}
      </div>
    </div>
  );
};

export default Layout;
