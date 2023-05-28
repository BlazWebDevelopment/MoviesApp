import { NavLink } from "react-router-dom";
import "./NavBar.css";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { authUser, userSignOut } = useAuth();

  return (
    <header>
      <h1>Blaz KINO</h1>
      {!authUser && (
        <div className="logReg-btn">
          <NavLink to="/login" className="login-btn">
            Login
          </NavLink>
          <NavLink to="/register" className="register-btn">
            Register
          </NavLink>
        </div>
      )}

      {authUser && (
        <div>
          <NavLink to="/" className="logout-btn">
            <button onClick={userSignOut} className="logout">
              Logout
            </button>
          </NavLink>
          <div>
            <p>Logged in as {authUser.email}</p>
          </div>
        </div>
      )}

      <nav>
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }: any) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/trending"
              className={({ isActive, isPending }: any) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Trending
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
