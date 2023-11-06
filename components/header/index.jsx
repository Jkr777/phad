import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import NavItems from "./navItems";
import SideNav from "./sideNav";
import ServicesNav from "./services";
import Modal from "../modal";

import { checkLanguage } from "@/utils/utils";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import classes from "./header.module.css";
import Image from "next/image";
import Logo from "../../public/logo.png";

import en from "@/locales/components/header/en";
import it from "@/locales/components/header/it";

function Header() {
  const [clicked, handleClick] = useState({
    nav: false
  });  
  const [sClicked, handleSClick] = useState({
    nav: false
  });  

  const handleClickFn = () => {
    handleSClick({ nav: false});
    handleClick(prev => ({ nav: !prev.nav }));  
  }
  
  const handleSClickFn = () => {
    handleClick({ nav: false });  
    handleSClick(prev => ({ nav: !prev.nav }));
  }

  const closeSubMenu = () => handleSClick({ nav: false});

  const modHandleClickFn = () => handleSClick({ nav: false }); 

  const router = useRouter();
  
  const { locale } = router;
  const txt = checkLanguage(locale, en, it);

  return (
    <>
    <header className={classes.header}>
      <nav className={classes.nav}>
        <Link href="/" onClick={closeSubMenu}>
          <Image alt="logo phad" src={Logo} />
        </Link>

        <div className={classes.navSmall} onClick={handleClickFn}>
          {clicked.nav ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <Modal isOpen={sClicked.nav} setIsOpen={modHandleClickFn} />
        <NavItems path={router.pathname} txt={txt} handleClick={handleSClickFn} closeSubMenu={closeSubMenu} open={sClicked.nav} />
      </nav>
    </header>
    <ServicesNav txt={txt} open={sClicked} handleClick={handleSClickFn} />
    <SideNav cssClass={clicked.nav ? classes.sideNavOpen : classes.sideNavClose} handleClick={handleClickFn} />
    </>
  );
}

export default Header;