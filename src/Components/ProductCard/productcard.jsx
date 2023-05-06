import React, { memo } from "react";
import "./productcard.css";
import { useNavigate } from "react-router-dom";

import Follow from "../Images/follow.svg";
import {AiOutlineEye} from "react-icons/ai"

export const ProductCard = memo(({ data }) => {
  const navigate = useNavigate();

  return (
    <>
      {data.map((item, index) => {
        const img = JSON?.parse(item.images || "[]");
        return (
          <figure
            className="product_card"
            key={item.id}
            onClick={() => navigate(`/view/product/${item.id}`)}
          >
            <img src={img[0]} alt={item.name || "Product_images"} />
            <figcaption className="info">
              <h3>
                <span>{item.name || "Product"}</span>
                <span>{item.new ? "new" : ""}</span>
              </h3>
              <span>{item.price} sum</span>
              <div className="product_size">{item.size || "have all size"}</div>
              <div className="product_for_whom">
                <span>Gender: </span>
                <sup> {item.for_whom}</sup>
              </div>
              <span className="view_num_two">
                <span>
                  <AiOutlineEye />
                </span>
                {item.view}
              </span>
            </figcaption>
            <button title="Дабавит в тзбранное">
              <img src={Follow} alt="follow" />
            </button>
          </figure>
        );
      })}
    </>
  );
});

// "id": 455,
// "name": "Oyoq kiyim",
// "for_whom": "children",
// "price": "109000",
// "season": "summer",
// "size": "22-36",
// "data": "28.05.2022",
// "images": "["https://server.pandashop.uz/img/15IMG_20220528_131839_195.jpg","https://server.pandashop.uz/img/15IMG_20220528_131841_107.jpg","https://server.pandashop.uz/img/15IMG_20220528_131842_547.jpg","https://server.pandashop.uz/img/15IMG_20220528_131844_693.jpg"]",
// "count": 0,
// "type": "Oyoq",
// "view": 12
