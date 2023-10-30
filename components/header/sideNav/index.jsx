import { useRouter } from 'next/router';
import Link from "next/link";
import { checkLanguage } from "@/utils/utils";

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import classes from "./sideNav.module.css";
import rClass from "@/styles/reusable.module.css";
import en from "@/locales/components/header/en";
import it from "@/locales/components/header/it";

function SideNav({ path, cssClass, handleClick }) {
  const router = useRouter();

  const { locale } = router;
  const txt = checkLanguage(locale, en, it);

  return (
    <div className={cssClass}>
      <Link onClick={handleClick} href="/services" className={path === "/services" ? `${rClass.marginTop} ${classes['link--active']} `: `${rClass.marginTop} ${classes.link}`}>{txt.services}</Link>
      <Link onClick={handleClick} href="/partners" className={path === "/partners" ? classes['link--active'] : classes.link}>{txt.parteners}</Link>
      <Link onClick={handleClick} href="/project" className={path === "/project" ? classes['link--active'] : classes.link}>{txt.project}</Link>
      <Link onClick={handleClick} href="/contact" className={path === "/contact" ? classes['link--active'] : classes.link}>{txt.contact}</Link>
      {/* <span className={classes.contactPhone}>+39 0625399148</span> */}
    </div>
  );
}

export default SideNav;