import { useState } from "react";
import { useRouter } from 'next/router';
import { checkLanguage } from "@/utils/utils";
import Map from "@/components/_about";

import en from "@/locales/pages/contactUs/en";
import classes from "./contact.module.css";
import reClass from "@/styles/reusable.module.css";
import btnClass from "@/styles/btns.module.css";
import formClass from "@/styles/forms.module.css";

function Contact() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mess: ""
  });

  const handleChange = e => setData(prev => ({...prev, [e.target.name]: e.target.value}));

  const router = useRouter();

  const { locale } = router;
  const txt = checkLanguage(locale, en);

  return (
    <section>
      <div className={reClass.containerTop}>
        <h1>{txt.title}</h1>
      </div>

      <div className={reClass.sPage}>        
        <div className={classes.formCenter}>

        <form className={formClass.form}>
          <h2 className={classes.subTitle}>{txt.subTitle}</h2>

            <input 
              className={formClass.input}
              type="text"
              maxLength="255"
              minLength="5"
              required
              autoFocus
              autoComplete="firstName"
              name="firstName"
              value={data.firstName}
              onChange={handleChange}
              placeholder={txt.firstName}
            />

            <input 
              className={formClass.input}
              type="text"
              maxLength="255"
              minLength="5"
              required
              autoComplete="lastName"
              name="lastName"
              value={data.lastName}
              onChange={handleChange}
              placeholder={txt.lastName}
            />

            <input 
              className={formClass.input}
              type="email"
              maxLength="255"
              minLength="3"
              required
              autoComplete="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder={txt.email}
            />

            <textarea
              className={formClass.txtArea}
              name="mess"
              required
              maxLength="255"
              placeholder={txt.mess}
              value={data.mess}
              onChange={handleChange}
            />

          <button className={btnClass.btnContact}>{txt.btn}</button>
        </form>
        </div>
        <Map />
      </div>
    </section>
  );
}

export default Contact;