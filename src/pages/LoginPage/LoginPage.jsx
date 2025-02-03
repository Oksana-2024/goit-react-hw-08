import Container from "../../components/Container/Container";
import LoginForm from "../../components/LoginForm/LoginForm";
import s from "./LoginPage.module.css"

const LoginPage = () => {
  return (
   <div className={s.loginPage}>
      <Container>
        <LoginForm />
      </Container>
   </div>
  );
};

export default LoginPage;
