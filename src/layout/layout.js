import Header from "./header";
//import Footer from "./footer";
//import Footer1 from "./footer1";
import Footer2 from "./footer2";
import ScrollButton from "./scrollButton"; 
import { Outlet, useLocation } from "react-router-dom";
import InstagramButton from "./insButton";

function  Layout() {
  const location = useLocation();
  const showScrollButton = location.pathname === "/home" || location.pathname === "/products&solutions" || location.pathname === "/" || location.pathname === "/our-food" || location.pathname === "/blogs";
  const showInstagramButton = location.pathname === "/home" || location.pathname === "/products&solutions"  || location.pathname === "/contact" || location.pathname === "/" || location.pathname === "/our-food" || location.pathname === "/blogs"; 
  return (
    <div>
        <Header></Header>
        <div className="main-content" style={{ paddingTop: '64px' }}>
          <Outlet></Outlet>
        </div>
        {showScrollButton && <ScrollButton></ScrollButton>}
        {showInstagramButton && <InstagramButton></InstagramButton>} 
        {/*<Footer></Footer>*/}
        <Footer2></Footer2>
    </div>
  );
}

export default Layout;
//webpackage