import classes from "./top.module.css";
import reClass from "@/styles/reusable.module.css";
import btn from "@/styles/btns.module.css";


function Top({ txt }) {
  return (
    <section className={classes.container}>
      <h1 className={classes.title}>{txt.title}</h1>
      
      <h2 className={classes.subtitle}>{txt.subTitle}</h2>

      <button className={`${btn.btn} ${reClass.topMargin3}`}>{txt.btn}</button>
    </section>
  );
}

export default Top;