import { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/router';
import { checkLanguage } from "@/utils/utils";
import { toast } from 'react-toastify';
import Map from "@/components/_about";

import en from "@/locales/pages/contactUs/en";
import it from "@/locales/pages/contactUs/it";
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
  const txt = checkLanguage(locale, en, it);

  async function handleSubmitFn() {
    try {
      await axios.post('/api/contact', data);

      toast.info(txt.successMess, { position: toast.POSITION.TOP_RIGHT });
    } catch {
      toast.error(txt.errMess, { position: toast.POSITION.TOP_RIGHT });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if(!data.mess) {
      toast.error(txt.errMessData, { position: toast.POSITION.TOP_RIGHT });

      return;
    }

    handleSubmitFn();

    setData({
      firstName: "",
      lastName: "",
      email: "",
      mess: ""
    });
  }

  return (
    <section>
      <div className={reClass.containerTop}>
        <h1>{txt.title}</h1>
      </div>

      <div className={reClass.sPage}>        
        <div className={classes.formCenter}>

        <form className={formClass.form} onSubmit={handleSubmit}>
          <h2 className={classes.subTitle}>{txt.subTitle}</h2>

            <input 
              className={formClass.input}
              type="text"
              maxLength="255"
              minLength="2"
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
              minLength="2"
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
              maxLength="555"
              placeholder={txt.mess}
              value={data.mess}
              onChange={handleChange}
            />

          <button className={btnClass.btnContact}>{txt.btn}</button>
          <span className={classes.privacy}>{txt.privacy}</span>
        </form>
        </div>
        <Map />
      </div>
    </section>
  );
}

export default Contact;