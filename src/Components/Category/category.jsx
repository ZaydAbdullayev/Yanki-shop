import React from "react";
import "./category.css";
import { useNavigate } from "react-router-dom";


import Category_1 from "../Images/caregory_img.png";
import Category_2 from "../Images/category_image_1.png";
import Category_3 from "../Images/category_image_2.png";
import Category_4 from "../Images/category_image_3.png";

export function Category() {
    const navigate = useNavigate();
    return (
      <section className="Category_section">
        <h1>Категории</h1>
        <div className="product_box">
          <figure onClick={() => navigate("/catalog")}>
            <img src={Category_1} alt="" />
            <figcaption>Куртки</figcaption>
          </figure>
          <figure onClick={() => navigate("/catalog")}>
            <img src={Category_2} alt="" />
            <figcaption>Пальто</figcaption>
          </figure>
          <figure onClick={() => navigate("/catalog")}>
            <img src={Category_3} alt="" />
            <figcaption>Шубы</figcaption>
          </figure>
          <figure onClick={() => navigate("/catalog")}>
            <img src={Category_4} alt="" />
            <figcaption>Парки</figcaption>
          </figure>
        </div>
      </section>
    );
}