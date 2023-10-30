import Header from "@/components/header";
import Footer from "@/components/footer";
import ToastsComponent from "@/utils/toasts";
import classes from "./layout.module.css";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={classes.main}>{children}</main>
      <ToastsComponent />
      <Footer/>
    </>
  );
}

export default Layout;