import clsx from "clsx";
import s from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import { useAuth } from "../../redux/auth/slice";

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.navlink, isActive && s.active);
  };
  return (
    <nav className={s.nav}>
      <Logo />
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildLinkClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
