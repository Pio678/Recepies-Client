import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import AuthenticationPage from "./Pages/AuthenticationPage/AuthenticationPage";
import LoginForm from "./Components/LoginForm/LoginForm";
import SignUpForm from "./Components/SignUpForm/SignUpForm";
import Cookies from "js-cookie";

import { AuthContext } from "./helpers/AuthContext";
import axios from "axios";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    isUserLogged: false,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/user/authenticate", {
        withCredentials: true, // passes cookie to request
      })
      .then((responce) => {
        if (responce.data.error) {
          setAuthState({ ...authState, isUserLogged: false });
        } else {
          setAuthState({
            username: responce.data.username,
            id: responce.data.id,
            isUserLogged: true,
          });
        }
      });
  }, []);

  return (
    <div className="App">
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <BrowserRouter>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<AuthenticationPage />}>
                <Route path="log-in" element={<LoginForm />} />
                <Route path="sign-up" element={<SignUpForm />} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
