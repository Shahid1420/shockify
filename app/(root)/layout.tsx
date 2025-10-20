import { ReactNode } from "react";
import Header from "./Hearder";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="flex-1 flex">{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
