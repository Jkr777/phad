import Link from "next/link";

import classes from "./connect.module.css";
import { BsArrowRight } from "react-icons/bs";


function Connect({ txt }) {
  return (
    <section className={classes.container}>
      <h2 className={classes.title}>{txt.connectTitle}</h2>
      <div className={classes.connectLink}>
        <Link href="/contact">{txt.connectLink}</Link>
        <BsArrowRight style={{marginLeft: "10px"}}/>
      </div>
    </section>
  );
}

export default Connect;