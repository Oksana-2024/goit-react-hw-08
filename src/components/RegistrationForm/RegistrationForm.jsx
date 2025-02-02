import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const registerValues = { name: "", email: "", password: "" };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values, actions) => {
    dispatch(registerThunk(values))
      .unwrap()
      .then(() => actions.resetForm())
      .then(() => navigate("/"));
  };

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Min. length is 3 symbols")
      .max(15, "Max. length is 15 symbols")
      .required("Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .max(30, "Max. length is 30 symbols")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(32, "Password cannot exceed 32 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[0-9]/, "Password must contain at least one digit")
      .required("Password is required"),
  });

  return (
    <>
      <Formik
        initialValues={registerValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form className={s.form}>
          <h2>Sign Up</h2>
          <label className={s.label}>
            Name
            <Field className={s.field} type="text" name="name" autoFocus />
            <div className={s.textError}>
              <ErrorMessage name="name" component="div" />
            </div>
          </label>
          <label className={s.label}>
            Email
            <Field className={s.field} type="email" name="email" />
            <div className={s.textError}>
              <ErrorMessage name="email" component="span" />
            </div>
          </label>
          <label className={s.label}>
            Password
            <Field className={s.field} type="password" name="password" />
            <div className={s.textError}>
              <ErrorMessage name="password" component="div" />
            </div>
          </label>
          <button className={s.button} type="submit">
            Sign up
          </button>
          <div className={s.text}>
            Already have an account?
            <Link className={s.text} to="/login">
              Log in.
            </Link>
          </div>
        </Form>
      </Formik>
    </>
  );
};
export default RegistrationForm;
