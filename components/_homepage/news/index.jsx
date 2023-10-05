import classes from "./news.module.css";
import reClass from "@/styles/reusable.module.css";

function News({ txt }) {
  return (
    <section className={classes.container}>
      <h2 className={classes.newsTitle}>{txt.newsTitle}</h2>
      <div>
        <p className={reClass.pStyle}>{txt.newsIntro1}</p>
        <p className={reClass.pStyle}>{txt.newsIntro2}</p>
        <p className={reClass.pStyle}>{txt.newsIntro3}</p>
      </div>
    </section>
  );
}

export default News;