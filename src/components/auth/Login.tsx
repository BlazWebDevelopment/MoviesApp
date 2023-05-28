import { useState } from "react";
import "./styles/auth.css";
import { NavLink } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const logIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form className="loginForm" onSubmit={logIn}>
      <div className="formWrapper">
        <h2 className="loginTitle">Login</h2>
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
        <button className="loginbtn">Login</button>
        <div>
          <p>Don't have an account?</p>
          <NavLink to={"/register"}>Register</NavLink>
        </div>
      </div>
    </form>
  );
}

export default Login;
