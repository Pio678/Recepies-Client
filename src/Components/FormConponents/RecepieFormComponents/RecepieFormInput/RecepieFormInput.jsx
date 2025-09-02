import { useField } from "formik";

import "./RecepieFormInput.css";

const RecepieFormInput = ({ label, className, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="recepie-input-container">
      <label className="recepie-input-label">{label}</label>
      <input
        {...field}
        {...props}
        className={` recepie-input ${
          meta.error && meta.touched ? "input-error" : ""
        }`}
      />
    </div>
  );
};

export default RecepieFormInput;
