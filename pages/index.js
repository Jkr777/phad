// https://phad.vercel.app/
import { useRouter } from 'next/router';
import { checkLanguage } from "@/utils/utils";

import Top from "@/components/_homepage/top";
// import Services from "@/components/_homepage/services";
import News from "@/components/_homepage/news";
import Connect from "@/components/_homepage/connect";

import en from "@/locales/pages/homepage/en";

function Home() {
  const router = useRouter();

  const { locale } = router;
  const txt = checkLanguage(locale, en);

  return (
    <div>
      <Top txt={txt} />
      <News txt={txt} />
      {/* <Services txt={txt} /> */}
      <Connect txt={txt} />
    </div>
  );
}

export default Home;