import { useRouter } from 'next/router';
import { checkLanguage } from "@/utils/utils";

import en from "@/locales/pages/terms/en";
import it from "@/locales/pages/terms/it";
import reClass from "@/styles/reusable.module.css";

function Terms() {
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

export default Terms;