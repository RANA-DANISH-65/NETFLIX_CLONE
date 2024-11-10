import "./login.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { login, signUp } from "../../firebase";
import spinner from "../../assets/netflix_spinner.gif";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const userAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signUp(name, email, password);
    }
    setLoading(false);
  };

  const [signState, setSignState] = useState("Sign In");
  return loading ? (
    <div className="loginSpinner">
      <img src={spinner} alt="" />
    </div>
  ) : (
    <div className="login">
      <img src={logo} className="loginLogo" alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : null}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={userAuth} type="Submit">
            {signState}
          </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help</p>
          </div>
        </form>
        <div className="formSwitch">
          {signState === "Sign In" ? (
            <p onClick={() => setSignState("Sign Up")}>
              New to Netflix? <span>Sign Up Now</span>
            </p>
          ) : (
            <p onClick={() => setSignState("Sign In")}>
              Already have account? <span>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
