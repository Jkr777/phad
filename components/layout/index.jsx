import Header from "@/components/header";
import Footer from "@/components/footer";

import classes from "./layout.module.css";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={classes.main}>{children}</main>
      {/* <Footer/> */}
    </>
  );
}

export default Layout;