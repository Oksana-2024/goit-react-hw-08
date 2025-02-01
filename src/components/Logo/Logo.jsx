import { GiTripleYin } from "react-icons/gi";
import { Link } from "react-router-dom";
import s from "./Logo.module.css";
const Logo = () => {
  return (
    <>
      <Link to="/" className={s.link}>
        <GiTripleYin style={{ fill: "var(--light)" }} size={52} />
        <p className={s.logo}>PHONEBOOK</p>
      </Link>
    </>
  );
};
export default Logo;
