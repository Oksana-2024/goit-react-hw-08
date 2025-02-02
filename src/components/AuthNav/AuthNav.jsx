import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
       <li>
          <NavLink className={s.link} to="/register">
            Register
          </NavLink>
       </li>
       <li>
          <NavLink className={s.link} to="/login">
            Log In
          </NavLink>
       </li>
      </ul>
    </nav>
  );
};
export default AuthNav;
