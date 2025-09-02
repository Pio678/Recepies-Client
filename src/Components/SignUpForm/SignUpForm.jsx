import { useState } from "react";
import { resolvePath, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import signUpSchema from "../../ValidationSchemas/signUpSchema";
import FormError from "../FormConponents/FormError/FormError";
import CustomInput from "../FormConponents/AuthCustomInput/CustomInput";
import axios from "axios";

function SignUpForm() {
  const navigate = useNavigate();

  const [message, setMessage] = useState();

  const handleSignUp = async (values, actions) => {
    await axios
      .post("http://localhost:3001/user/register", {
        username: values.username,
        password: values.password,
      })
      .then((responce) => {
        setMessage(responce.data);
        console.log(responce.data);
      })
      .catch((err) => {
        setMessage(err.response.data.errors[0]);
      });
  };

  const initialValues = {
    username: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signUpSchema}
      onSubmit={handleSignUp}
    >
      {(props) => (
        <Form className="auth-form">
          <div className="auth-form-description">
            <h1>Sign Up</h1>
            <p>Sign Up and lets get cooking!</p>
          </div>

          <CustomInput
            label="username"
            name="username"
            type="text"
            placeholder="Enter your username"
          />

          <CustomInput
            label="password"
            name="password"
            type="password"
            placeholder="Enter your password"
          />

          <CustomInput
            label="confirm password"
            name="confirmPassword"
            type="password"
            placeholder="confirm password"
          />

          {message ? <FormError errorMessage={message} /> : ""}
          <button
            type="submit"
            disabled={props.isSubmitting}
            className="auth-button"
          >
            Sign Up
          </button>

          <p className="auth-bottom-text">
            {"You dont have an account "}
            <a
              className="auth-bottom-link"
              onClick={() => {
                navigate("/auth/log-in");
              }}
            >
              log in!
            </a>
          </p>
        </Form>
      )}
    </Formik>
  );
}

export default SignUpForm;
