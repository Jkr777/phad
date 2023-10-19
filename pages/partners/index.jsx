import { useRouter } from 'next/router';
import { checkLanguage } from "@/utils/utils";

import en from "@/locales/pages/partners/en";
import reClass from "@/styles/reusable.module.css";
import classes from "./partners.module.css";
import { AiOutlineTeam } from "react-icons/ai";

function Partners() {
  const router = useRouter();

  const { locale } = router;
  const txt = checkLanguage(locale, en);

  return (
    <section>
      <div className={reClass.containerTop}>
        <h1>{txt.title}</h1>
      </div>

      <div className={reClass.sPage}>
        <h2 className={classes.subTitle}>{txt.subTitle}</h2>
      
        <div className={classes.part}>
          <span className={classes.partTitle}><AiOutlineTeam style={{marginRight: "5px", fontSize: "40px", minWidth: "40px"}} /> {txt.name}</span>
          <p>{txt.info}</p>
        </div>        
        
        <div className={classes.part}>
          <span className={classes.partTitle}><AiOutlineTeam style={{marginRight: "5px", fontSize: "40px", minWidth: "40px"}} /> {txt.name2}</span>
          <p>{txt.info2}</p>
        </div>        
        
        <div className={classes.part}>
          <span className={classes.partTitle}><AiOutlineTeam style={{marginRight: "5px", fontSize: "40px", minWidth: "40px"}} /> {txt.name3}</span>
          <p>{txt.info3}</p>
        </div>        
        
        <div className={classes.part}>
          <span className={classes.partTitle}><AiOutlineTeam style={{marginRight: "5px", fontSize: "40px", minWidth: "40px"}} /> {txt.name4}</span>
          <p>{txt.info4}</p>
        </div>        
        
        <div className={classes.part}>
          <span className={classes.partTitle}><AiOutlineTeam style={{marginRight: "5px", fontSize: "40px", minWidth: "40px"}} /> {txt.name5}</span>
          <p>{txt.info5}</p>
        </div>        
        
        <div className={classes.part}>
          <span className={classes.partTitle}><AiOutlineTeam style={{marginRight: "5px", fontSize: "40px", minWidth: "40px"}} /> {txt.name6}</span>
          <p>{txt.info6}</p>
        </div>


      </div>
    </section>
  );
}

export default Partners;