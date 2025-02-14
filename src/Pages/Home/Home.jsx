import "./Home.css";
import Header from "../../Components/Header/Header";

// //below can be deleted just for testing
import { useContext } from "react";
import { AuthContext } from "../../helpers/AuthContext";
// //above can be deleted just for testing

function Home() {
  // //below can be deleted just for testing
  const { authState } = useContext(AuthContext);

  return (
    <>
      <Header />
      <div> username : {authState.username}</div>
      <div> id : {authState.id}</div>
    </>
  );
}

export default Home;
