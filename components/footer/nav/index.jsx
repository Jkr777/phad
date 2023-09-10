import Link from "next/link";
import classes from "./nav.module.css";

function Nav({ txt }) {
  return (
    <nav className={classes.nav}>
      <div>
        <div>
          <span>{txt.company}</span>
          <div>
            <Link hef="/about">{txt.about}</Link>
            <Link hef="/investors">{txt.investors}</Link>
            <Link hef="/contact">{txt.contact}</Link>
          </div>
        </div>

        <div>
          <span>{txt.legal}</span>
          <div>
            <Link hef="/terms">{txt.terms}</Link>
            <Link hef="/privacy">{txt.privacy}</Link>
          </div>
        </div>
      </div>
      <select className={classes.langSelect}>
        <option value="" disabled selected hidden>{txt.changeLang}</option>
        <option value="en">{txt.en}</option>
        <option value="it">{txt.it}</option>
        <option value="ro">{txt.ro}</option>
      </select>
    </nav>
  );
}

export default Nav;