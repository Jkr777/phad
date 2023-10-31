// import { useRouter } from 'next/router';
// import { checkLanguage } from "@/utils/utils";
// import { BsCircleFill } from "react-icons/bs";

// import ServicesComp from "@/components/_homepage/services";
// import en from "@/locales/pages/services/en";
// import it from "@/locales/pages/services/it";

// import classes from "./services.module.css";
// import reClass from "@/styles/reusable.module.css";

// function Services() {
//   const router = useRouter();

//   const { locale } = router;
//   const txt = checkLanguage(locale, en, it);

//   return (
//     <section>
//       <div className={reClass.containerTop}>
//         <h1>{txt.title}</h1>
//       </div>

//       <div className={reClass.sPage}>
//         {/* <ServicesComp txt={txt} /> */}
//         {/* <p className={classes.item}>{txt.p1}</p>
//         <p className={`${classes.item} ${classes.newPitem}`}>{txt.p2}</p>
//         <p className={classes.item}>{txt.p3}</p> */}

//         <h2 className={reClass.subTitle}>{txt.servicesTitle}</h2>
        
//         <span className={reClass.itemList}><BsCircleFill style={{marginRight: "5px", fontSize: "10px", minWidth: "20px"}}  />{txt.s1}</span>        <span className={reClass.itemList}><BsCircleFill style={{marginRight: "5px", fontSize: "10px", minWidth: "20px"}}  />{txt.s2}</span>        <span className={reClass.itemList}><BsCircleFill style={{marginRight: "5px", fontSize: "10px", minWidth: "20px"}}  />{txt.s3}</span>        <span className={reClass.itemList}><BsCircleFill style={{marginRight: "5px", fontSize: "10px", minWidth: "20px"}}  />{txt.s4}</span>        <span className={reClass.itemList}><BsCircleFill style={{marginRight: "5px", fontSize: "10px", minWidth: "20px"}}  />{txt.s5}</span>        <span className={reClass.itemList}><BsCircleFill style={{marginRight: "5px", fontSize: "10px", minWidth: "20px"}}  />{txt.s6}</span>        <span className={reClass.itemList}><BsCircleFill style={{marginRight: "5px", fontSize: "10px", minWidth: "20px"}}  />{txt.s7}</span>        <span className={reClass.itemList}><BsCircleFill style={{marginRight: "5px", fontSize: "10px", minWidth: "20px"}}  />{txt.s8}</span>
        
//         <p className={reClass.pStyle}>{txt.p4}</p>
//         <p className={reClass.pStyle}>{txt.p5}</p>

//         {/* <Image 
//           alt="services"
//           src="/images/services.png"
//           width={500}
//           height={500}
//         /> */}
//       </div>
//     </section>
//   );
// }

// export default Services;