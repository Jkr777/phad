import { useRouter } from 'next/router';
import { checkLanguage } from "@/utils/utils";
import Nav from "./nav";

import classes from "./footer.module.css";
import en from "@/locales/components/footer/en";


function Footer() {
  const router = useRouter();

  const { locale } = router;
  const txt = checkLanguage(locale, en);

  return (
    <footer>
      <Nav txt={txt} />
      <span className={classes.footer}>© 2023 - Phad</span>
    </footer>
  );
}

export default Footer;