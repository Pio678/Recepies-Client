import formAlert from "../../../assets/icons/warning.png";
import "./FormError.css";

export default function FormError({ errorMessage }) {
  return (
    <div className={"form-error"}>
      <img className="form-alert " src={formAlert} />
      {errorMessage}
    </div>
  );
}
