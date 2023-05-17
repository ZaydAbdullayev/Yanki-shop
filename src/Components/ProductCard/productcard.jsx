import React, { memo } from "react";
import "./productcard.css";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

import Follow from "../Images/follow.svg";
import { AiOutlineEye } from "react-icons/ai";

export const ProductCard = memo(({ data }) => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const addToLike = (item) => {
    const like = JSON.parse(localStorage.getItem("like") || "[]");
    const myFavorite = [...like];
    const found = myFavorite.find((i) => i.id === item.id);

    if (!found) {
      myFavorite.push(item);
      const message = "Товар добавлен в избранное";
      enqueueSnackbar(message, { variant: "success" });
    } else {
      const message = "Этот товар уже в избранном";
      enqueueSnackbar(message, { variant: "info" });
    }

    // localStorage.setItem("like", JSON.stringify(myFavorite));
  };

  return (
    <>
      {data.map((item, index) => {
        const img = JSON?.parse(item.images || "[]");
        return (
          <figure className="product_card" key={item.id}>
            <img
              src={img[0]}
              alt={item.name || "Product_images"}
              onClick={() => navigate(`/view/product/${item.id}`)}
            />
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
            <button title="Дабавит в тзбранное" onClick={() => addToLike(item)}>
              <img src={Follow} alt="follow" />
            </button>
          </figure>
        );
      })}
    </>
  );
});
