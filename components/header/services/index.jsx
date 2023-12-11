import Link from "next/link";
import classN from "./services.module.css";
import rClass from "@/styles/reusable.module.css";

function ServicesNav({txt, open, handleClick}) {
  return (
    <nav className={open.nav ? classN.open : classN.close}>
      <Link onClick={handleClick} href="/services/business_development" className={`${rClass.marginTop} ${classN.link}`}>{txt.service1}</Link>
      <Link onClick={handleClick} href="/services/cybersecurity_assessment" className={classN.link}>{txt.service2}</Link>
      <Link onClick={handleClick} href="/services/industrial_automation" className={classN.link}>{txt.service3}</Link>
      <Link onClick={handleClick} href="/services/physical_security" className={classN.link}>{txt.service4}</Link>
      <Link onClick={handleClick} href="/services/scada_solutions" className={classN.link}>{txt.service5}</Link>
      <Link onClick={handleClick} href="/services/telecommunications" className={classN.link}>{txt.service6}</Link>
    </nav>
  );
}

export default ServicesNav;