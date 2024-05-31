import "./Navbar.css";

function Navbar() {
  return (
    <>
      <ul className="navbar">
        <li>
          <a className="active" href="#home">
            Home
          </a>
        </li>
        <li>
          <a href="/map">Map</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
