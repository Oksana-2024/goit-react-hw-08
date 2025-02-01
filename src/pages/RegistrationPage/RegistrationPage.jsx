//import s from './RegistrationPage.module.css'

import Container from "../../components/Container/Container";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import s from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <div className={s.box}>
      <Container>
        <RegistrationForm />
      </Container>
    </div>
  );
};

export default RegistrationPage;
