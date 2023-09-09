import { useRouter } from 'next/router';
import Link from "next/link";
import { checkLanguage } from "@/utils/utils";

import en from "@/locales/header/en";

function NavItems({ path }) {
  const router = useRouter();

  const { locale } = router;
  const txt = checkLanguage;

  return (
    <div>
      <Link className={path === "/services"}></Link>
      <Link className={path === "/parteners"}></Link>
      <Link className={path === "/resource"}></Link>
      <Link className={path === "/contact"}></Link>
    </div>
  );
}

export default NavItems;