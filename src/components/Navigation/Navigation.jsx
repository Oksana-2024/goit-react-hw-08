import clsx from "clsx";
import s from "./Navigation.module.css";
import { Link, NavLink } from "react-router-dom";

import { useAuth } from "../../redux/auth/slice";
import { GiTripleYin } from "react-icons/gi";

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.navlink, isActive && s.active);
  };
  return (
    <nav className={s.nav}>
      <Link to="/" className={s.link}>
        <GiTripleYin className={s.icon} size={18}/>
        PHONEBOOK
      </Link>
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
