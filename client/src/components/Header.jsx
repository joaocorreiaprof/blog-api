import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-left">
        <img
          src="../images/milesmind.png"
          alt="Logo image"
          className="header-logo"
        />
        <p className="header-blog-title">Miles in Mind</p>
      </div>
      <div className="header-right">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/log-in">Log In</Link>
            </li>
            <li>
              <Link to="/sign-up">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
