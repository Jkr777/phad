import { useRouter } from 'next/router';
import { checkLanguage } from "@/utils/utils";

import { MdDone } from "react-icons/md";
import en from "@/locales/pages/resource/en";
import reClass from "@/styles/reusable.module.css";
import classes from "./resource.module.css";

function Resource() {
  const router = useRouter();

  const { locale } = router;
  const txt = checkLanguage(locale, en);

  return (
    <section>
      <div className={reClass.containerTop}>
        <h1>{txt.title}</h1>
      </div>

      <div className={reClass.sPage}>
        <h2 className={classes.subTitle}>{txt.projects}</h2>

        <span className={classes.item}><MdDone style={{marginRight: "5px", fontSize: "20px", minWidth: "20px"}}  />{txt.projName1}</span>
        <span className={classes.item2}><MdDone style={{marginRight: "5px", fontSize: "20px", minWidth: "20px"}}  />{txt.projName2}</span>
        <span className={classes.item}><MdDone style={{marginRight: "5px", fontSize: "20px", minWidth: "20px"}}  />{txt.projName3}</span>
        <span className={classes.item2}><MdDone style={{marginRight: "5px", fontSize: "20px", minWidth: "20px"}}  />{txt.projName4}</span>
        <span className={classes.item}><MdDone style={{marginRight: "5px", fontSize: "20px", minWidth: "20px"}}  />{txt.projName5}</span>
        <span className={classes.item2}><MdDone style={{marginRight: "5px", fontSize: "20px", minWidth: "20px"}}  />{txt.projName6}</span>
      </div>
    </section>
  );
}

export default Resource;