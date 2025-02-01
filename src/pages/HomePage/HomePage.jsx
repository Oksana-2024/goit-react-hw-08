import { MdArrowForwardIos } from "react-icons/md";
import Container from "../../components/Container/Container";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.homePage}>
      <Container>
        <h1 className={s.title}> Welcome to Your Personal Phone Book!</h1>
       <div className={s.homePageBox}>
          <p className={s.text}>
            Looking for a simple way to keep track of all your contacts?
            <br />
            You&apos;re in the right place!
          </p>
          <ul className={s.list}>
            <li className={s.item}>
              <MdArrowForwardIos size={16} />
              Effortlessly add, edit, and manage contact information.
            </li>
            <li className={s.item}>
              <MdArrowForwardIos size={16} /> Find the people you need in seconds.
            </li>
            <li className={s.item}>
              <MdArrowForwardIos size={16} />
              Stay connected without the hassle.
            </li>
          </ul>
          <p className={s.text}>Start organizing your contacts today!</p>
       </div>
      </Container>
    </div>
  );
};

export default HomePage;
