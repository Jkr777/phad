import { useRouter } from "next/router";
import Link from "next/link";
import NavItems from "./navItems";

import classes from "./header.module.css";
import Image from "next/image";
import Logo from "../../public/logo.png";


function Header() {
  const router = useRouter();

  return (
    <>
    <header className={classes.header}>
      <nav className={classes.nav}>
        <Link href="/">
          <Image alt="logo phad" src={Logo} />
        </Link>
  
        <NavItems path={router.pathname} />
      </nav>
    </header>
    </>
  );
}

export default Header;



