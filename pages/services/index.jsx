import { useRouter } from 'next/router';
import { checkLanguage } from "@/utils/utils";

import en from "@/locales/pages/services/en";
import classes from "./services.module.css";
import reClass from "@/styles/reusable.module.css";

function Services() {
  const router = useRouter();

  const { locale } = router;
  const txt = checkLanguage(locale, en);

  return (
    <section>
      <div className={reClass.containerTop}>
        <h1>{txt.title}</h1>
      </div>

      <div className={reClass.sPage}>
        <p className={classes.item}>{txt.p1}</p>
        <p className={classes.item}>{txt.p2}</p>
        <p className={classes.item}>{txt.p3}</p>
        <p className={classes.item}>{txt.p4}</p>
        <p className={classes.item}>{txt.p5}</p>
      </div>
    </section>
  );
}

export default Services;