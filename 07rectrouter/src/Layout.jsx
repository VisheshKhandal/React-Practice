import react from 'react';
import { Outlet } from 'react-router-dom';
import Header from "./components/header/Header.jsx"
import Footer from "./components/footer/Footer.jsx"
function Layout(){
    return(
        <>
           <Header/>
           {/* Outlet is a placeholder where nested child routes render dynamically. */}
           <Outlet/>
           <Footer/>
        </>
    )
}
export default Layout;
