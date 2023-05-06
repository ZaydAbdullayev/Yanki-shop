import React, { useState } from "react";
import "./card.css";
import Location from "../../Components/Location/location";
import { Link } from "react-router-dom";
import { NumericFormat } from "react-number-format";
import { AiOutlineDelete } from "react-icons/ai";

export const Card = () => {
  const st = JSON.parse(localStorage.getItem("card")) || [];
  const [card, setCard] = useState(st);

  const myData = [...card];

  const handleDel = (id) => {
    const result = card.filter((item) => item.id !== id);

    setCard(result);
    localStorage.setItem("card", JSON.stringify(result));
  };

  const handleInc = (id) => {
    myData.map((item) => {
      if (item.id === id) {
        item.count += 1;
      }
      return item;
    });

    setCard(myData);
    localStorage.setItem("card", JSON.stringify(myData));
  };

  const handleDec = (id) => {
    myData.map((item) => {
      if (item.id === id) {
        item.count -= 1;
      }

      if (item.count <= 0) {
        item.count = 0;
      }
      return item;
    });

    setCard(myData);
    localStorage.setItem("card", JSON.stringify(myData));
  };

  const handleSize = () => {
    const size = document.querySelector("#card_item_size");

    const newSize = size.value;
    myData.size = newSize;

    localStorage.setItem("card", JSON.stringify(myData));
  };

  return (
    <div className="card_section">
      <Location>
        <Link to={"/"}>Главная</Link>
        <span>{">"}</span>
        <Link to={"/basket"}>Корзина</Link>
      </Location>

      <div className="card_container">
        <h1>Ваш заказ</h1>
        {card.map((item) => {
          return (
            <div className="card_item" key={item.id}>
              <figure>
                <img src={item?.img[0]} alt="" />
                <p>{item.name}</p>
              </figure>
              <p>{item.season || "All"}</p>
              <div>
                <select name="size" id="card_item_size">
                  <option value=" ">{item.size}</option>
                  <option value="XL">XXL</option>
                  <option value="XL">XL</option>
                  <option value="XM">XM</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                </select>
              </div>
              <div>
                <div className="card__action">
                  <button onClick={() => handleDec(item.id)}>-</button>
                  <span>{item.count}</span>
                  <button onClick={() => handleInc(item.id)}>+</button>
                </div>
              </div>
              <div className="price-del">
                <NumericFormat
                  value={item.price * item.count}
                  displayType="text"
                  allowLeadingZeros
                  thousandSeparator=" "
                  suffix=" sum"
                />

                <button onClick={() => handleDel(item.id)}>
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
