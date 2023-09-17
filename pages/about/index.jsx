import { useRouter } from 'next/router';
import { checkLanguage } from "@/utils/utils";
import Image from "next/image";

import en from "@/locales/pages/aboutUs/en";
import reClass from "@/styles/reusable.module.css";
import servicesClass from "@/pages/services/services.module.css";
import classes from "./about.module.css";

function About() {
  const router = useRouter();

  const { locale } = router;
  const txt = checkLanguage(locale, en);

  return (
    <section>
      <div className={reClass.containerTop}>
        <h1>{txt.title}</h1>
      </div>

      <div className={reClass.sPage}>
        <p className={servicesClass.item}>{txt.p1}</p>
        <p className={`${servicesClass.item} ${servicesClass.newPitem}`}>{txt.p2}</p>
        <p className={servicesClass.item}>{txt.p3}</p>
        <p className={`${servicesClass.item} ${servicesClass.newPitem}`}>{txt.p4}</p>
        <p className={servicesClass.item}>{txt.p5}</p>
        <p className={`${servicesClass.item} ${servicesClass.newPitem}`}>{txt.p6}</p>
        <p className={servicesClass.item}>{txt.p7}</p>
      </div>

      <div className={classes.imgCont}>
        <Image 
          src="/images/aboutUs.png"
          width={500}
          height={500}
          alt="About us"
        />
      </div>

      <div className={reClass.sPage}>
        <h2 className={classes.vis}>{txt.subTitle}</h2>
        <p className={servicesClass.item}>{txt.sP1}</p>
        <p className={`${servicesClass.item} ${servicesClass.newPitem}`}>{txt.sP2}</p>
        <p className={servicesClass.item}>{txt.sP3}</p>
        <p className={`${servicesClass.item} ${servicesClass.newPitem}`}>{txt.sP4}</p>
        <p className={servicesClass.item}>{txt.sP5}</p>
        <p className={`${servicesClass.item} ${servicesClass.newPitem}`}>{txt.sP6}</p>
      </div>
    </section>
  );
}

export default About;