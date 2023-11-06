import { useRouter } from 'next/router';
import Link from "next/link";

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import classes from "./navItems.module.css";

function NavItems({ path, txt, handleClick, closeSubMenu }) {
  return (
    <div className={classes.container}>
      <span href="" onClick={handleClick} className={path === "/services" ? classes['link--active'] : classes.link}>{txt.services}</span>
      <Link onClick={closeSubMenu} href="/partners" className={path === "/partners" ? classes['link--active'] : classes.link}>{txt.parteners}</Link>
      <Link onClick={closeSubMenu} href="/project" className={path === "/project" ? classes['link--active'] : classes.link}>{txt.project}</Link>
      <Link onClick={closeSubMenu} href="/contact" className={path === "/contact" ? classes['link--active'] : classes.link}>{txt.contact}</Link>
      {/* <span className={classes.contactPhone}>+39 0625399148</span> */}
    </div>
  );
}

export default NavItems;