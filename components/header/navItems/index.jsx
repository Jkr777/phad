import { useRouter } from 'next/router';
import Link from "next/link";
import { checkLanguage } from "@/utils/utils";

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import classes from "./navItems.module.css";
import en from "@/locales/components/header/en";

function NavItems({ path }) {
  const router = useRouter();

  const { locale } = router;
  const txt = checkLanguage(locale, en);

  return (
    <div>
      <Link href="/services" className={path === "/services" ? classes['link--active'] : classes.link}>{txt.services}</Link>
      <Link href="/parteners" className={path === "/partners" ? classes['link--active'] : classes.link}>{txt.parteners}</Link>
      <Link href="/resource" className={path === "/resource" ? classes['link--active'] : classes.link}>{txt.resource}</Link>
      <Link href="/contact" className={path === "/contact" ? classes['link--active'] : classes.link}>{txt.contact}</Link>
      {/* <span className={classes.contactPhone}>+39 0625399148</span> */}
    </div>
  );
}

export default NavItems;