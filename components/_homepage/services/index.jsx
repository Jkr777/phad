import Image from "next/image";
import classes from "./services.module.css";

import { TbPointFilled } from "react-icons/tb";

function Services() {
  return (
    <section className={classes.container}>
      <div className={classes.info}>
        <h2 className={classes.infoTitle}>OUR SERVICES</h2>
        <span className={classes.infoItem}><TbPointFilled style={{marginRight: "5px"}} /> ICT solutions</span>
        <span className={classes.infoItem}><TbPointFilled style={{marginRight: "5px"}} /> Telecommunications
systems/infrastructure</span>
        <span className={classes.infoItem}><TbPointFilled style={{marginRight: "5px"}} /> PLC/Scada automation solutions</span>
        <span className={classes.infoItem}><TbPointFilled style={{marginRight: "5px"}} /> Radio Network Planning</span>
        <span className={classes.infoItem}><TbPointFilled style={{marginRight: "5px"}} /> Optimization and Performance
Engineering</span>
        <span className={classes.infoItem}><TbPointFilled style={{marginRight: "5px"}} /> Quality of Service management</span>
        <span className={classes.infoItem}><TbPointFilled style={{marginRight: "5px"}} /> Logistics</span>

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