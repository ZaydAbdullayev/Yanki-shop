import React from "react";
import "./home.css";
import Contact from "../Contact/contact"
import { Category } from "../Category/category";

import Home_img_1 from "../Images/home_image_1.png";
import Home_img_2 from "../Images/home_image_2.png";
import Home_img_3 from "../Images/home_image_3.png";

export function Home() {
  return (
    <div className="Home_page">
      <div className="home_intro">
        <figure>
          <img src={Home_img_1} alt="" />
        </figure>
        <figure>
          <img src={Home_img_2} alt="" />
        </figure>
        <figure>
          <img src={Home_img_3} alt="" />
        </figure>
        <div className="paragraf">
          <p>Новая коллекция</p>
          <i></i>
          <p>Смотреть Новинки {">"}</p>
        </div>
      </div>
      <Category />
      <Contact />
    </div>
  );
}
