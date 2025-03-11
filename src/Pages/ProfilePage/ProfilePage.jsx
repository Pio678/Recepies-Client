import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import "./ProfilePage.css";
// import { AuthContext } from "../../helpers/AuthContext";
// import { useContext } from "react";

const ProfilePage = () => {
  const navigate = useNavigate();

  // const { authState, useAuthState } = useContext(AuthContext);

  return (
    <div id="profile-page">
      <h1>ProfilePage</h1>
      <button
        onClick={() => {
          navigate("../add-recepie");
        }}
      >
        add recepie
      </button>

      {/* <div>{authState.username}</div>
      <div> {authState.id}</div>
      <div> {authState.isUserLogged ? "true" : "false"}</div> */}
    </div>
  );
};

export default ProfilePage;
