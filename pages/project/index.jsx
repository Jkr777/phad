import { useRouter } from 'next/router';
import { checkLanguage } from "@/utils/utils";

import { MdDone } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import en from "@/locales/pages/project/en";
import reClass from "@/styles/reusable.module.css";
// import classes from "./project.module.css";

function Project() {
  const router = useRouter();

  const { locale } = router;
  const txt = checkLanguage(locale, en);

  return (
    <section>
      <div className={reClass.containerTop}>
        <h1>{txt.title}</h1>
      </div>

      <div className={reClass.sPage}>
        <h2 className={reClass.subTitle}>{txt.projects}</h2>

        <div className={reClass.cartList}>

          <div className={reClass.cart}>
            <span className={reClass.cartTop}><AiOutlineTeam style={{marginRight: "5px", fontSize: "40px", minWidth: "40px"}} />{txt.partenerName1}</span>

            <div className={reClass.cartBottom}>
              <ul>
                <li className={reClass.cartItem}><MdDone style={{display: "inline", marginRight: "5px", fontSize: "15px", minWidth: "15px"}} />{txt.p11}</li>
                <li className={reClass.cartItem}><MdDone style={{display: "inline", marginRight: "5px", fontSize: "15px", minWidth: "15px"}} />{txt.p12}</li>
                <li className={reClass.cartItem}><MdDone style={{display: "inline", marginRight: "5px", fontSize: "15px", minWidth: "15px"}} />{txt.p13}</li>
                <li className={reClass.cartItem}><MdDone style={{display: "inline", marginRight: "5px", fontSize: "15px", minWidth: "15px"}} />{txt.p14}</li>
              </ul>
              {/* <span className={reClass.cartItem}>{txt.p11}</span>
              <span className={reClass.cartItem}>{txt.p12}</span>
              <span className={reClass.cartItem}>{txt.p13}</span>
              <span className={reClass.cartItem}>{txt.p14}</span> */}
            </div>
          </div>

          <div className={reClass.cart}>
            <span className={reClass.cartTop}><AiOutlineTeam style={{marginRight: "5px", fontSize: "40px", minWidth: "40px"}} />{txt.partenerName2}</span>

            <div className={reClass.cartBottom}>
            <ul>
              <li className={reClass.cartItem}><MdDone style={{display: "inline", marginRight: "5px", fontSize: "15px", minWidth: "15px"}} />{txt.p21}</li>
              <li className={reClass.cartItem}><MdDone style={{display: "inline", marginRight: "5px", fontSize: "15px", minWidth: "15px"}} />{txt.p22}</li>
            </ul>
            </div>
          </div>  

          <div className={reClass.cart}>
            <span className={reClass.cartTop}><AiOutlineTeam style={{marginRight: "5px", fontSize: "40px", minWidth: "40px"}} />{txt.partenerName3}</span>

            <div className={reClass.cartBottom}>
            <ul>
              <li className={reClass.cartItem}><MdDone style={{display: "inline", marginRight: "5px", fontSize: "15px", minWidth: "15px"}} />{txt.p31}</li>
            </ul>
            </div>
          </div>  

          <div className={reClass.cart}>
            <span className={reClass.cartTop}><AiOutlineTeam style={{marginRight: "5px", fontSize: "40px", minWidth: "40px"}} />{txt.partenerName4}</span>

            <div className={reClass.cartBottom}>
            <ul>
              <li className={reClass.cartItem}><MdDone style={{display: "inline", marginRight: "5px", fontSize: "15px", minWidth: "15px"}} />{txt.p41}</li>
            </ul>
            </div>
          </div>
                          
          <div className={reClass.cart}>
            <span className={reClass.cartTop}><AiOutlineTeam style={{marginRight: "5px", fontSize: "40px", minWidth: "40px"}} />{txt.partenerName5}</span>

            <div className={reClass.cartBottom}>
            <ul>
              <li className={reClass.cartItem}><MdDone style={{display: "inline", marginRight: "5px", fontSize: "15px", minWidth: "15px"}} />{txt.p51}</li>
            </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Project;