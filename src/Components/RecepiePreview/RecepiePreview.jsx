import "./RecepiePreview.css";

import clockIcon from "../../assets/icons/clockIcon.png";
import chefIcon from "../../assets/icons/chefIcon.png";

const RecepiePreview = ({ imgSource, recepieName }) => {
  return (
    <div className="recepie-preview">
      <div className="recepie-img-wrapper">
        <img className="recepie-img" src={imgSource}></img>
      </div>
      <div className="recepie-info-section">
        <div className="recepie-info time-info">
          <img className="recepie-info-icon" src={clockIcon} />
          <p className="recepie-info">1h 30 min</p>
        </div>
        <div className="recepie-info dificulity-info">
          <img className="recepie-info-icon" src={chefIcon} />
          <p className="recepie-info">Hard</p>
        </div>
      </div>

      <p className="recepie-name">{recepieName}</p>
    </div>
  );
};

export default RecepiePreview;
