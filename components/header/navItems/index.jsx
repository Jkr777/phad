import { useRouter } from 'next/router';
import Link from "next/link";

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import classes from "./navItems.module.css";

function NavItems({ path, txt, handleClick }) {
  return (
    <div className={classes.container}>
      <span href="" onClick={handleClick} className={path === "/services" ? classes['link--active'] : classes.link}>{txt.services}</span>
      <Link href="/partners" className={path === "/partners" ? classes['link--active'] : classes.link}>{txt.parteners}</Link>
      <Link href="/project" className={path === "/project" ? classes['link--active'] : classes.link}>{txt.project}</Link>
      <Link href="/contact" className={path === "/contact" ? classes['link--active'] : classes.link}>{txt.contact}</Link>
      {/* <span className={classes.contactPhone}>+39 0625399148</span> */}
    </div>
  );
}

export default NavItems;