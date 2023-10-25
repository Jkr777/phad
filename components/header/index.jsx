import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import NavItems from "./navItems";
import SideNav from "./sideNav";
import Modal from "../modal";

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import classes from "./header.module.css";
import Image from "next/image";
import Logo from "../../public/logo.png";


function Header() {
  const [clicked, handleClick] = useState({
    nav: false
  });  


  const handleClickFn = () => handleClick(prev => ({ nav: !prev.nav }));

  const modHandleClickFn = () => handleClick({ nav: false }); 

  const router = useRouter();
   
  return (
    <>
    <header className={classes.header}>
      <nav className={classes.nav}>
        <Link href="/">
          <Image alt="logo phad" src={Logo} />
        </Link>

        <div className={classes.navSmall} onClick={handleClickFn}>
          {clicked.nav ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <Modal isOpen={clicked.nav} setIsOpen={modHandleClickFn} />
        <NavItems path={router.pathname} />
      </nav>
    </header>
    <SideNav cssClass={clicked.nav ? classes.sideNavOpen : classes.sideNavClose} handleClick={handleClickFn} />
    </>
  );
}

export default Header;



