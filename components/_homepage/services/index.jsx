import Image from "next/image";
import classes from "./services.module.css";

import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillCloud } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoIosSchool } from "react-icons/io";

function Services({ txt }) {
  return (
    <section className={classes.container}>
      {/* <h2 className={classes.infoTitle}>{txt.servicesTitle}</h2> */}

      <div className={classes.miniContainer}>
      <div className={classes.info}>
        <span className={`${classes.infoItem} ${classes.big4}`}><AiFillCheckCircle style={{marginRight: "5px", minWidth: "20px"}} />{txt.title1}</span>
        
        <span className={`${classes.infoItem} ${classes.big4}`}><AiFillCloud style={{marginRight: "5px", minWidth: "20px"}} /> {txt.service1}</span>
        
        <span className={`${classes.infoItem} ${classes.big4}`}><BsFillPeopleFill style={{marginRight: "5px", minWidth: "20px"}} />{txt.resources1}</span>  

        <span className={`${classes.infoItem} ${classes.big4}`}><IoIosSchool style={{marginRight: "5px", minWidth: "20px"}} />{txt.dip1}</span>
        {/* <span className={classes.infoItem}><AiFillCheckCircle style={{marginRight: "5px"}} />{txt.option4}</span>
        <span className={classes.infoItem}><AiFillCheckCircle style={{marginRight: "5px"}} />{txt.option5}</span>
        <span className={classes.infoItem}><AiFillCheckCircle style={{marginRight: "5px"}} />{txt.option6}</span>
        <span className={classes.infoItem}><AiFillCheckCircle style={{marginRight: "5px"}} />{txt.option7}</span> */}
      </div>
      <div className={classes.info2}>
        <span className={`${classes.infoItem} ${classes.big4}`}><AiFillCheckCircle style={{marginRight: "5px", minWidth: "20px"}} />{txt.title2}</span>
        
        <span className={`${classes.infoItem} ${classes.big4}`}><AiFillCloud style={{marginRight: "5px", minWidth: "20px"}} /> {txt.service2}</span>
        
        <span className={`${classes.infoItem} ${classes.big4}`}><BsFillPeopleFill style={{marginRight: "5px", minWidth: "20px"}} />{txt.resources2}</span>  

        <span className={`${classes.infoItem} ${classes.big4}`}><IoIosSchool style={{marginRight: "5px", minWidth: "20px"}} />{txt.dip2}</span>
        {/* <Image 
          src="/images/services.png"
          fill
          alt="Picture of services"
        /> */}
      </div>
      </div>
    </section>
  );
}

export default Services;