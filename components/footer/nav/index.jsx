import Link from "next/link";
import classes from "./nav.module.css";

function Nav({ txt }) {
  return (
    <nav className={classes.nav}>
      <div className={classes.navItems}>
        <div className={classes.navItem}>
          <span className={classes.navItemTitle}>{txt.company}</span>
          <Link className={classes.link} href="/about">{txt.about}</Link>
          <Link className={classes.link} href="/contact">{txt.contact}</Link>
        </div>

        <div className={classes.navItem}>
          <span className={classes.navItemTitle}>{txt.legal}</span>
            <Link className={classes.link} href="/terms">{txt.terms}</Link>
            <Link className={classes.link} href="/privacy">{txt.privacy}</Link>
        </div>
      </div>
      <select className={classes.langSelect}>
        <option defaultValue={txt.changeLang} hidden>{txt.changeLang}</option>
        <option value="en">{txt.en}</option>
        <option value="it">{txt.it}</option>
        <option value="ro">{txt.ro}</option>
      </select>
    </nav>
  );
}

export default Nav;