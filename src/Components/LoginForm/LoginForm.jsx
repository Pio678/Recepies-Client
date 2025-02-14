import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormError from "../FormConponents/FormError/FormError";

import axios from "axios";

import { AuthContext } from "../../helpers/AuthContext";

export default function LoginForm() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const { setAuthState } = useContext(AuthContext);

  async function handleLogin(e) {
    e.preventDefault();

    const loginData = { username: username, password: password };

    await axios
      .post("http://localhost:3001/user/login", loginData, {
        withCredentials: true,
      })
      .then((response) => {
        setLoginError("");

        setAuthState({
          username: response.username,
          id: response.user_id,
          isUserLogged: true,
        });
      })
      .catch((err) => {
        setLoginError("Incorect login or password");
      });
  }

  return (
    <form className="auth-form">
      <div className="auth-form-description">
        <h1>Log In</h1>
        <p>Log in and lets get cooking!</p>
      </div>
      <div className="auth-field-container ">
        <label>username</label>
        <input
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className="auth-input"
        />
      </div>
      <div className="auth-field-container">
        <label>password</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="auth-input"
        />
      </div>

      {loginError ? <FormError errorMessage={loginError} /> : ""}
      {/*error is displayed conditionally*/}

      <button onClick={handleLogin} className="auth-button">
        Log In
      </button>

      <p className="auth-bottom-text">
        {"You dont have an account "}
        <a
          className="auth-bottom-link"
          onClick={() => {
            navigate("/auth/sign-up");
          }}
        >
          sign up!
        </a>
      </p>
    </form>
  );
}
