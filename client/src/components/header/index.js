import { Link } from "react-router-dom";

function Header () {
  return (
    <nav className="indigo">
      <div className="nav-wrapper container">
        <span className="brand-logo">Logo</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/create">Create</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;