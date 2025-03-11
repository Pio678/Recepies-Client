import "./Home.css";
import Header from "../../Components/Header/Header";

import burger from "../../assets/Recepie/burger.jpg";
import RecepiePreview from "../../Components/RecepiePreview/RecepiePreview";
import { AuthContext } from "../../helpers/AuthContext";
import { useContext } from "react";

function Home() {
  const { authState, useAuthState } = useContext(AuthContext);

  return (
    <>
      <RecepiePreview imgSource={burger} recepieName="CHEEASE BURGER  " />
      <div>{authState.username}</div>
      <div> {authState.id}</div>
      <div> {authState.isUserLogged === true ? "Logged" : "not Logged"}</div>
    </>
  );
}

export default Home;
