import { useRouter } from 'next/router';
import { checkLanguage } from "@/utils/utils";

import en from "@/locales/pages/aboutUs/en";
import reClass from "@/styles/reusable.module.css";

function About() {
  const router = useRouter();

  const { locale } = router;
  const txt = checkLanguage(locale, en);

  return (
    <section>
      <div className={reClass.containerTop}>
        <h1>{txt.title}</h1>
      </div>

      <div>
        <p>{txt.p1}</p>
        <p>{txt.p2}</p>
        <p>{txt.p3}</p>
        <p>{txt.p4}</p>
        <p>{txt.p5}</p>
        <p>{txt.p6}</p>
        <p>{txt.p7}</p>
      </div>

      <div>
        <h2>{txt.subTitle}</h2>
        <p>{txt.sP1}</p>
        <p>{txt.sP2}</p>
        <p>{txt.sP3}</p>
        <p>{txt.sP4}</p>
        <p>{txt.sP5}</p>
        <p>{txt.sP6}</p>
      </div>
    </section>
  );
}

export default About;