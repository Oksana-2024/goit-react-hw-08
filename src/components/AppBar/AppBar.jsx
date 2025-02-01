import s from "./AppBar.module.css";

import Navigation from "../Navigation/Navigation";
import { useAuth } from "../../redux/auth/slice";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import Container from "../Container/Container";

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={s.header}>
     <Container>
   <div className={s.headBox}>
       <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
   </div>
     </Container>
    </header>
  );
};

export default AppBar;
