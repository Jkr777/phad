import classes from "./news.module.css";

function News({ txt }) {
  return (
    <section className={classes.container}>
      <h2 className={classes.newsTitle}>{txt.newsTitle}</h2>
      <div>
        <p className={classes.newsP}>{txt.newsIntro1}</p>
        <p className={classes.newsP}>{txt.newsIntro2}</p>
        <p className={classes.newsP}>{txt.newsIntro3}</p>
      </div>
    </section>
  );
}

export default News;