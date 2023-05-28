import { useState } from "react";
import "./styles/auth.css";
import { NavLink } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form className="loginForm" onSubmit={register}>
      <div className="formWrapper">
        <h2 className="loginTitle">Register</h2>
        <div className="inputWrapper">
          <div className="email">
            <input
              type="mail"
              placeholder="Email"
              className="email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password">
            <input
              type="password"
              placeholder="Password"
              className="password-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="loginbtn">
          Register
        </button>
        <div>
          <p>Already have an account?</p>
          <NavLink to={"/login"}>Login</NavLink>
        </div>
      </div>
    </form>
  );
}

export default Register;
