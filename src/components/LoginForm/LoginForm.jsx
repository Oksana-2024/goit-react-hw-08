import { Field, Formik, Form, ErrorMessage } from "formik";
import s from "./LoginForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import * as yup from "yup";

const LoginForm = () => {
  const loginValues = { email: "", password: "" };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values, actions) => {
    dispatch(loginThunk(values))
      .unwrap()
      .then(() => actions.resetForm())
      .then(() => navigate("/"));
  };

  const schema = yup.object().shape({
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  return (
    <>
      <Formik
        initialValues={loginValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form className={s.form}>
          <h2>Log in</h2>
          <label className={s.label}>
            Email
            <Field className={s.field} type="email" name="email" autoFocus />
            <div className={s.textError}>
              <ErrorMessage name="email" component="span" />
            </div>
          </label>
          <label className={s.label}>
            Password
            <Field className={s.field} type="password" name="password" />
            <div className={s.textError}>
              <ErrorMessage name="password" component="span" />
            </div>
          </label>
          <button className={s.button} type="submit">
            Log in
          </button>
          <div className={s.text}>
            Don&apos;t have an account?{" "} 
            <Link className={s.text} to="/register">
              Sign up here!
            </Link>
          </div>
        </Form>
      </Formik>
    </>
  );
};
export default LoginForm;
