import { ReactNode } from "react";
import StickyFooter from "./footer";
import Navbar from "./navigation";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <StickyFooter />
    </>
  );
};

export default Layout;
