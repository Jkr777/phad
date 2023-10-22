import Link from "next/link";
import classes from "./nav.module.css";

function Nav({ txt, loc, router }) {

  function changeLang(e) {
    console.log(e.target.value)
    router.push('/', '/', {locale: e.target.value})
  }

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
      <select onChange={changeLang} className={classes.langSelect}>
        <option defaultValue={txt.changeLang} hidden>{txt.changeLang}</option>
        {loc === "en" ? null : <option value="en">{txt.en}</option>}
        {loc === "it" ? null : <option value="it">{txt.it}</option>}
      </select>
    </nav>
  );
}

export default Nav;