import React from "react";
import "./favourite.css";
import { ProductCard } from "../../Components/ProductCard/productcard";
import Location from "../../Components/Location/location";
import { Link } from "react-router-dom";

import Empty from "./empty-cart.gif";

export const Favourite = () => {
  const like = JSON.parse(localStorage.getItem("like")) || [];
  const data =[...like]
  
  console.log();

  return (
    <div className="favourite_section">
      <Location>
        <Link to={"/"}>Главная</Link>
        <span>{">"}</span>
        <Link to={"/favourite"}>Избранное</Link>
      </Location>

      <h3>Избранное</h3>

      <div className={like.length ? "favourite_container" : "close_favorite_box"}>
        <ProductCard data={data} />
      </div>

      {/* ======== When cart is empty ======== */}
      <div
        className={
          !like.length ? "empty_favorite_active" : "empty_favorite_close"
        }
      >
        <h1 className="animation">Favourites is Empty</h1>
        <figure>
          <img src={Empty} alt="favorite is empty" />
        </figure>
      </div>
    </div>
  );
};
