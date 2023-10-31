import Link from "next/link";
import classN from "./services.module.css";
import rClass from "@/styles/reusable.module.css";

function ServicesNav({txt, open, handleClick}) {
  return (
    <nav className={open.nav ? classN.open : classN.close}>
      {console.log(open)}
      <Link onClick={handleClick} href="/services/business_development" className={`${rClass.marginTop} ${classN.link}`}>{txt.service1}</Link>
      <Link onClick={handleClick} href="/services/plc" className={classN.link}>{txt.service2}</Link>
      <Link onClick={handleClick} href="/services/scada_solutions" className={classN.link}>{txt.service3}</Link>
      <Link onClick={handleClick} href="/services/iiot" className={classN.link}>{txt.service4}</Link>
      <Link onClick={handleClick} href="/services/telecommunication" className={classN.link}>{txt.service5}</Link>
      <Link onClick={handleClick} href="/services/tlc" className={classN.link}>{txt.service6}</Link>
      <Link onClick={handleClick} href="/services/cctv" className={classN.link}>{txt.service7}</Link>
      <Link onClick={handleClick} href="/services/cybersecurity_assessment" className={classN.link}>{txt.service8}</Link>

    </nav>
  );
}

export default ServicesNav;