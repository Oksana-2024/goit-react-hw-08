import AppBar from "./AppBar/AppBar";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <AppBar />
      </header>
      <main>
        {children}
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
