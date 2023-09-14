import Image from "next/image";
import classes from "./services.module.css";

import { TbPointFilled } from "react-icons/tb";

function Services({ txt }) {
  return (
    <section className={classes.container}>
      <div className={classes.info}>
        <h2 className={classes.infoTitle}>{txt.servicesTitle}</h2>
        <span className={classes.infoItem}><TbPointFilled style={{marginRight: "5px"}} />{txt.option1}</span>
        <span className={classes.infoItem}><TbPointFilled style={{marginRight: "5px"}} /> {txt.option2}</span>
        <span className={classes.infoItem}><TbPointFilled style={{marginRight: "5px"}} />{txt.option3}</span>
        <span className={classes.infoItem}><TbPointFilled style={{marginRight: "5px"}} />{txt.option4}</span>
        <span className={classes.infoItem}><TbPointFilled style={{marginRight: "5px"}} />{txt.option5}</span>
        <span className={classes.infoItem}><TbPointFilled style={{marginRight: "5px"}} />{txt.option6}</span>
        <span className={classes.infoItem}><TbPointFilled style={{marginRight: "5px"}} />{txt.option7}</span>
      </div>
      <div className={classes.img}>
        <Image 
          src="/images/services.png"
          fill
          alt="Picture of services"
        />
      </div>
    </section>
  );
}

export default Services;