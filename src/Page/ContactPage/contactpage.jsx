import React from "react";
import "./contactpage.css";
import Location from "../../Components/Location/location";
import { Link } from "react-router-dom";
import Contact from "../../Components/Contact/contact";

import Inst from "./instagram.svg";
import tlgrm from "./telegram.svg";

export const ContactPage = () => {
  window.scrollTo(0, 0);

  return (
    <div className="contact_page">
      <Location>
        <Link to={"/"}>Главная</Link>
        <span>{">"}</span>
        <Link to={"/about"}>Контакты</Link>
      </Location>
      <h1>Связаться c нами</h1>

      <div className="contact_info_box">
        <div className="contact_info_item">
          <p>B социальных сетях</p>
          <div className="sosyal_media">
            <a href="https://instagram.com">
              <img src={Inst} alt="" />
            </a>
            <a href="https://instagram.com">
              <img src={tlgrm} alt="" />
            </a>
          </div>
        </div>
        <div className="contact_info_item">
          <p>По телефону</p>
          <a href="tel:+380730963644">+38(067) 158 82 66</a>
          <a href="tel:+380730963644">+38(073) 226 39 81</a>
        </div>
        <div className="contact_info_item">
          <p>По почте</p>
          <a href="mailto:example@gmail.com">example@gmail.com</a>
        </div>
        <div className="contact_info_item">
          <p>Наш офис</p>
          <a href="adres:г. Киев, улица Батумская, 18">
            г. Киев, улица Батумская, 18
          </a>
        </div>
      </div>

      <Contact />
    </div>
  );
};
