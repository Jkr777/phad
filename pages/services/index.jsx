import { useRouter } from 'next/router';
import { checkLanguage } from "@/utils/utils";
import Image from "next/image";

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
        <p className={`${classes.item} ${classes.newPitem}`}>{txt.p2}</p>
        <p className={classes.item}>{txt.p3}</p>
        <p className={`${classes.item} ${classes.newPitem}`}>{txt.p4}</p>
        <p className={classes.item}>{txt.p5}</p>

        {/* <Image 
          alt="services"
          src="/images/services.png"
          width={500}
          height={500}
        /> */}
      </div>
    </section>
  );
}

export default Services;