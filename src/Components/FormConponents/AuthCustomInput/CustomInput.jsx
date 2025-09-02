import { useField } from "formik";
import FormError from "../FormError/FormError";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="auth-field-container">
      <label>{label}</label>
      <input
        className={`auth-input  ${
          meta.error && meta.touched ? "input-error" : ""
        }`}
        {...field} // fields contains value , onChange, onBlur
        {...props} // props passed into component (type , placeholder , name)
      />
      {meta.error && meta.touched ? (
        <FormError errorMessage={meta.error} />
      ) : (
        ""
      )}
    </div>
  );
};

export default CustomInput;
