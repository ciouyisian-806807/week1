import React, { Fragment } from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

interface ILayout {
  children?: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
};
export default Layout;
