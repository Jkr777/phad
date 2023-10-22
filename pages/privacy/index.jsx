import { useRouter } from 'next/router';
import { checkLanguage } from "@/utils/utils";

import en from "@/locales/pages/privacy/en";
import it from "@/locales/pages/privacy/it";
import reClass from "@/styles/reusable.module.css";

function Privacy() {
  const router = useRouter();

  const { locale } = router;
  const txt = checkLanguage(locale, en, it);

  return (
    <section>
      <div className={reClass.containerTop}>
        <h1>{txt.title}</h1>
      </div>
    </section>
  );
}

export default Privacy;