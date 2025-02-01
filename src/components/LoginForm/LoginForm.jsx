import { Field, Formik, Form, ErrorMessage } from "formik";
import s from "./LoginForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";

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

  return (
    <>
      <Formik initialValues={loginValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <h2>Log in</h2>
          <label className={s.label}>
            Email
            <Field className={s.field} type="email" name="email" />
            <ErrorMessage
              className={s.textError}
              name="email"
              component="span"
            />
          </label>
          <label className={s.label}>
            Password
            <Field className={s.field} type="password" name="password" />
            <ErrorMessage
              className={s.textError}
              name="password"
              component="span"
            />
          </label>
          <button type="submit">Log in</button>
          <h4>
            Don&apos;t have an account?<Link to="/register">Sign up here!</Link>
          </h4>
        </Form>
      </Formik>
    </>
  );
};
export default LoginForm;
