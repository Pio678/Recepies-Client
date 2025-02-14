import * as Yup from "yup";

const signUpSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, "Username must be at least 5 characters")
    .max(20, "Username may not be longer than 20 characters")
    .required("Username is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(20)
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[A-Z]/, "Password must contain at least one uppercase character")
    .matches(/[a-z]/, "Password must contain at least one lowercase character")
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export default signUpSchema;
