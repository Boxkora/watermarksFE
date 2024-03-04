import { Outlet } from "react-router-dom";
import NavbarMain from "./navbar.jsx";
import '@radix-ui/themes/styles.css';


const Layout = () => {
    return(
        <>
            <NavbarMain/>       
            <Outlet/>
        </>
    );
};
export default Layout;
