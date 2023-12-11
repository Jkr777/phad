import { useRouter } from 'next/router';
import { checkLanguage } from "@/utils/utils";
import Image from "next/image";

import en from "@/locales/pages/aboutUs/en";
import it from "@/locales/pages/aboutUs/it";
import reClass from "@/styles/reusable.module.css";
import servicesClass from "@/pages/services/services.module.css";
import classes from "./about.module.css";

function About() {
  const router = useRouter();

  const { locale } = router;
  const txt = checkLanguage(locale, en, it);

  return (
    <section>
      <div className={reClass.containerTop}>
        <h1>{txt.title}</h1>
      </div>

      <div className={reClass.sPage}>
        <p className={reClass.pStyle}>{txt.p1}</p>
        <p className={reClass.pStyle}>{txt.p2}</p>
        <p className={reClass.pStyle}>{txt.p3}</p>
        <p className={reClass.pStyle}>{txt.p5}</p>
        <p className={reClass.pStyle}>{txt.p6}
  
        {locale === "en" ? <ul className= {servicesClass.list}>
          <li>{txt.p6l1}</li>
          <li>{txt.p6l2}</li>
          <li>{txt.p6l3}</li>
          <li>{txt.p6l4}</li>
          <li>{txt.p6l5}</li>
          <li>{txt.p6l6}</li>
          <li>{txt.p6l7}</li>
          <li>{txt.p6l8}</li>
        </ul> : null}
        
        </p>
        <p className={reClass.pStyle}>{txt.p7}</p>
      </div>

      <div className={classes.imgCont}>
        <Image 
          src="/images/servicesImg.jpg"
          width={500}
          height={20}
          alt="About us"
        />
      </div>

      <div className={reClass.sPage}>
        <h2 className={classes.vis}>{txt.subTitle}</h2>
        <p className={reClass.pStyle}>{txt.sP1}</p>
        <p className={reClass.pStyle}>{txt.sP2}</p>
        <p className={reClass.pStyle}>{txt.sP3}</p>
        <p className={reClass.pStyle}>{txt.sP5}</p>
        <p className={reClass.pStyle}>{txt.sP6}</p>
      </div>
    </section>
  );
}

export default About;