import cameraIcon from "../../../../assets/icons/camera.png";
import "./RecepieImgInput.css";

import { useField } from "formik";

const RecepieImgInput = ({ name, label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className=" recepie-input-container recepie-img-input-container">
      <label for="recepie-img-input" className="recepie-input-button">
        <figure>
          <figcaption>{label}</figcaption>
          <img
            className="camera-icon"
            alt="icon of a camera"
            src={cameraIcon}
          />
        </figure>
      </label>
      <input
        className="recepie-img-input"
        id="recepie-img-input"
        {...field}
        {...props}
        type="file"
      />
    </div>
  );
};

export default RecepieImgInput;
