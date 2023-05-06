import React, {memo} from "react";
import "./footer.css";

import instagram from "../Images/instagram.svg";
import twitter from "../Images/twitter.svg";

function Footer() {
  return (
    <footer className="Footer">
      <div className="footer_item">
        <p>КОМПАНИЯ</p>
        <a href=".">О нас</a>
        <a href=".">Контакты</a>
      </div>
      <div className="footer_item">
        <p>ПОЛЕЗНОЕ</p>
        <a href=".">Оплата и доставка</a>
        <a href=".">Условия возврата</a>
        <a href=".">Бонусная система</a>
      </div>
      <div className="footer_item">
        <p>ПОКУПАТЕЛЮ</p>
        <a href=".">Избранное</a>
        <a href=".">Публичная оферта</a>
        <a href=".">Политика конфиденциальности</a>
      </div>
      <div className="footer_item">
        <p>КОМПАНИЯ</p>
        <div className="sosyal">
          <a href="https://instagram.com">
            <img src={instagram} alt="" />
          </a>
          <a href="https://twitter.com">
            <img src={twitter} alt="" />
          </a>
        </div>
        <a href="tel:+380730963644">+38(073) 096 36 44</a>
        <a href="mailto:info@yanki.com">info@yanki.com</a>
      </div>
      <p>©️ 2021 Yanki. All rights reserved</p>
    </footer>
  );
}

export default memo(Footer)