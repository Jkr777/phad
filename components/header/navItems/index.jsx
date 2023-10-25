import { useRouter } from 'next/router';
import Link from "next/link";
import { checkLanguage } from "@/utils/utils";

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import classes from "./navItems.module.css";
import en from "@/locales/components/header/en";
import it from "@/locales/components/header/it";

function NavItems({ path }) {
  const router = useRouter();

  const { locale } = router;
  const txt = checkLanguage(locale, en, it);

  return (
    <div className={classes.container}>
      <Link href="/services" className={path === "/services" ? classes['link--active'] : classes.link}>{txt.services}</Link>
      <Link href="/partners" className={path === "/partners" ? classes['link--active'] : classes.link}>{txt.parteners}</Link>
      <Link href="/project" className={path === "/project" ? classes['link--active'] : classes.link}>{txt.project}</Link>
      <Link href="/contact" className={path === "/contact" ? classes['link--active'] : classes.link}>{txt.contact}</Link>
      {/* <span className={classes.contactPhone}>+39 0625399148</span> */}
    </div>
  );
}

export default NavItems;