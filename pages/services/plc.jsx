import { useRouter } from 'next/router';
import { checkLanguage } from "@/utils/utils";
import { BsCircleFill } from "react-icons/bs";

import { MdDone } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import ServicesComp from "@/components/_homepage/services";
import en from "@/locales/pages/services/en";
import it from "@/locales/pages/services/it";

import servicesClass from "./services.module.css";
import reClass from "@/styles/reusable.module.css";

function Business() {
  const router = useRouter();

  const { locale } = router;
  const txt = checkLanguage(locale, en, it);

  return (
    <section>
      <div className={reClass.containerTop}>
        <h1>{txt.s2}</h1>
      </div>

      <div className={reClass.sPage}>
        {/* <ServicesComp txt={txt} /> */}
        {/* <p className={classes.item}>{txt.p1}</p>
        <p className={`${classes.item} ${classes.newPitem}`}>{txt.p2}</p>
        <p className={classes.item}>{txt.p3}</p> */}
        <div className={servicesClass.infoCart}>
          <h2 className={reClass.subTitle}>{txt.title}</h2>

          <p className={reClass.pStyle}>{txt.s2p1}</p>
        </div>
        
        <h2 className={reClass.subTitle}>{txt.servicesTitle}</h2>

        <div className={reClass.cartList2}>
        <div className={reClass.cart}>
            <span className={reClass.cartTop}><AiOutlineTeam style={{marginRight: "5px", fontSize: "40px", minWidth: "40px"}} />{txt.partenerName2}</span>

            <div className={reClass.cartBottom}>
              <ul>
                <li className={reClass.cartItem}><MdDone style={{display: "inline", marginRight: "5px", fontSize: "15px", minWidth: "15px"}} />{txt.p21}</li>
                <li className={reClass.cartItem}><MdDone style={{display: "inline", marginRight: "5px", fontSize: "15px", minWidth: "15px"}} />{txt.p22}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* <span className={reClass.itemList}><BsCircleFill style={{marginRight: "5px", fontSize: "10px", minWidth: "20px"}}  />{txt.s1}</span>        <span className={reClass.itemList}><BsCircleFill style={{marginRight: "5px", fontSize: "10px", minWidth: "20px"}}  />{txt.s2}</span>        <span className={reClass.itemList}><BsCircleFill style={{marginRight: "5px", fontSize: "10px", minWidth: "20px"}}  />{txt.s3}</span>        <span className={reClass.itemList}><BsCircleFill style={{marginRight: "5px", fontSize: "10px", minWidth: "20px"}}  />{txt.s4}</span>        <span className={reClass.itemList}><BsCircleFill style={{marginRight: "5px", fontSize: "10px", minWidth: "20px"}}  />{txt.s5}</span>        <span className={reClass.itemList}><BsCircleFill style={{marginRight: "5px", fontSize: "10px", minWidth: "20px"}}  />{txt.s6}</span>        <span className={reClass.itemList}><BsCircleFill style={{marginRight: "5px", fontSize: "10px", minWidth: "20px"}}  />{txt.s7}</span>        <span className={reClass.itemList}><BsCircleFill style={{marginRight: "5px", fontSize: "10px", minWidth: "20px"}}  />{txt.s8}</span> */}
        

        {/* <Image 
          alt="services"
          src="/images/services.png"
          width={500}
          height={500}
        /> */}
      </div>
    </section>
  );
}

export default Business;