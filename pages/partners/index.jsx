import { useRouter } from 'next/router';
import { checkLanguage } from "@/utils/utils";

import en from "@/locales/pages/partners/en";
import reClass from "@/styles/reusable.module.css";


function Partners() {
  const router = useRouter();

  const { locale } = router;
  const txt = checkLanguage(locale, en);

  return (
    <section>
      <div className={reClass.containerTop}>
        <h1>{txt.title}</h1>
      </div>
    </section>
  );
}

export default Partners;