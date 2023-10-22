import { useRouter } from 'next/router';
import { checkLanguage } from "@/utils/utils";
import Nav from "./nav";

import classes from "./footer.module.css";
import en from "@/locales/components/footer/en";
import it from "@/locales/components/footer/it";

function Footer() {
  const router = useRouter();

  const { locale } = router;
  const txt = checkLanguage(locale, en, it);

  return (
    <footer className={classes.container}>
      <Nav txt={txt} loc={locale} router={router} />
      <span className={classes.footer}>© 2023 - Phad</span>
    </footer>
  );
}

export default Footer;