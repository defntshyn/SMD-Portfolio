import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import ScrollToTop from "../components/ScrollToTop";

const RootLayout = () => {
  return (
    <>
      <Navigation />
      <ScrollToTop />
      <div className="content-container">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
