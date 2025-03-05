import "./Home.css";
import Header from "../../Components/Header/Header";

import burger from "../../assets/Recepie/burger.jpg";
import RecepiePreview from "../../Components/RecepiePreview/RecepiePreview";
function Home() {
  return (
    <>
      <Header />
      <RecepiePreview imgSource={burger} recepieName="CHEEASE BURGER  " />
    </>
  );
}

export default Home;
