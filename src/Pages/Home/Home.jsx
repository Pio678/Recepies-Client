import "./Home.css";
import Header from "../../Components/Header/Header";

import burger from "../../assets/Recepie/burger.jpg";
import RecepiePreview from "../../Components/RecepiePreview/RecepiePreview";
import { AuthContext } from "../../helpers/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const { authState, useAuthState } = useContext(AuthContext);

  return (
    <>
      {authState.isUserLogged ? (
        <button
          onClick={() => {
            navigate("/recepie/create");
          }}
        >
          add recepie{" "}
        </button>
      ) : (
        ""
      )}

      <RecepiePreview imgSource={burger} recepieName="CHEESE BURGER" />
      <div>{authState.username}</div>
      <div> {authState.id}</div>
      <div> {authState.isUserLogged === true ? "Logged" : "not Logged"}</div>
    </>
  );
}

export default Home;
