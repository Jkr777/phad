import { useRouter } from 'next/router';
import Link from "next/link";
import { checkLanguage } from "@/utils/utils";

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import classes from "./sideNav.module.css";
import rClass from "@/styles/reusable.module.css";
import en from "@/locales/components/header/en";
import it from "@/locales/components/header/it";

function SideNav({ path, cssClass, handleClick, servicesNav, servicesFn }) {
  const router = useRouter();

  const { locale } = router;
  const txt = checkLanguage(locale, en, it);

  return (
    <div className={cssClass}>
      <Link onClick={servicesFn} href="" className={path === "/services" ? `${rClass.marginTop} ${classes['link--active']} `: `${rClass.marginTop} ${classes.link}`}>{txt.services}</Link>
      <span className={servicesNav ? classes.servicesContainer : classes.servicesContainerClose}>
        <Link onClick={handleClick} href="/services/business_development" className={path === "/partners" ? classes['link--active'] : classes.link}>{txt.service1}</Link>
        <Link onClick={handleClick} href="/services/cybersecurity_assessment" className={path === "/partners" ? classes['link--active'] : classes.link}>{txt.service2}</Link>
        <Link onClick={handleClick} href="/services/industrial_automation" className={path === "/partners" ? classes['link--active'] : classes.link}>{txt.service3}</Link>
        <Link onClick={handleClick} href="/services/physical_security" className={path === "/partners" ? classes['link--active'] : classes.link}>{txt.service4}</Link>
        <Link onClick={handleClick} href="/services/scada_solutions" className={path === "/partners" ? classes['link--active'] : classes.link}>{txt.service5}</Link>
        <Link onClick={handleClick} href="/services/telecommunications" className={path === "/partners" ? classes['link--active'] : classes.link}>{txt.service6}</Link>
      </span>
      <Link onClick={handleClick} href="/partners" className={path === "/partners" ? classes['link--active'] : classes.link}>{txt.parteners}</Link>
      <Link onClick={handleClick} href="/project" className={path === "/project" ? classes['link--active'] : classes.link}>{txt.project}</Link>
      <Link onClick={handleClick} href="/contact" className={path === "/contact" ? classes['link--active'] : classes.link}>{txt.contact}</Link>
      {/* <span className={classes.contactPhone}>+39 0625399148</span> */}
    </div>
  );
}

export default SideNav;