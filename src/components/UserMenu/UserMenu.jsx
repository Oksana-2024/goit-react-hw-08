import { useDispatch } from "react-redux";
import { useAuth } from "../../redux/auth/slice";
import { logOutThunk } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={s.wrapper}>
      <p className={s.username}>Welcome, {user.name}</p>
      <button className={s.button} type="button" onClick={() => dispatch(logOutThunk())}>
        Log out
      </button>
    </div>
  );
};
export default UserMenu;
