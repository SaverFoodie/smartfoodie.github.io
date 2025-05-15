import Header from "./header";
import Footer from "./footer";
//import Footer1 from "./footer1";
//import Footer2 from "./footer2";
import ScrollButton from "./scrollButton"; 
import { Outlet, useLocation } from "react-router-dom";
import InstagramButton from "./insButton";

function Layout() {
  const location = useLocation();
  
  // 使用黑名单方式：列出不显示按钮的页面路径
  const excludedPaths = {
    // 这里添加不需要显示按钮的页面路径
    // 如果某个新页面不需要这些按钮，只需要在这里添加路径
    scrollButton: [],
    instagramButton: []
  };
  
  const showScrollButton = !excludedPaths.scrollButton.includes(location.pathname);
  const showInstagramButton = !excludedPaths.instagramButton.includes(location.pathname);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <div className="main-content" style={{ paddingTop: '64px' }}>
        <Outlet></Outlet>
      </div>
      {showScrollButton && <ScrollButton></ScrollButton>}
      {showInstagramButton && <InstagramButton></InstagramButton>}
      <Footer></Footer>
    </div>
  );
}

export default Layout;
//webpackage