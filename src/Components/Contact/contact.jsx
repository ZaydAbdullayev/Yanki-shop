import React, { memo } from "react";
import "./contact.css";

function Contact() {
  return (
    <section className="Contact_section">
      <h1>Узнайте первым о новинках</h1>
      <form className="send_contact">
        <input
          type="email"
          name="email"
          placeholder="Ваш e-mail*"
          autoComplete="off"
          required
        />
        <button type="submit">ПОДПИСАТЬСЯ</button>
      </form>
      <p>
        Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих
        персональных данных и ознакомлен(а) с условиями конфиденциальности.
      </p>
    </section>
  );
}

export default memo(Contact)
