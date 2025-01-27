import { Link } from "react-router-dom";
import "../styles/Header.css";
import PropTypes from "prop-types";

const Header = ({ user, setUser }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

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
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>

            {!user ? (
              <>
                <li>
                  <Link to="/log-in">Log In</Link>
                </li>
                <li>
                  <Link to="/sign-up">Sign Up</Link>
                </li>
              </>
            ) : (
              <>
                {user?.role === "AUTHOR" && (
                  <li>
                    <Link to="/admin">Admin</Link>
                  </li>
                )}

                <li>
                  <span>{user.username || "User"}</span>
                </li>
                <li>
                  <button onClick={handleLogout}>Log Out</button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
  }),
  setUser: PropTypes.func.isRequired,
};

export default Header;
