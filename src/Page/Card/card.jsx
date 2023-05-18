import React, { useState, useEffect } from "react";
import "./card.css";
import Location from "../../Components/Location/location";
import { Link, useNavigate } from "react-router-dom";
import { NumericFormat } from "react-number-format";
import { AiOutlineDelete } from "react-icons/ai";
import { useSnackbar } from "notistack";
import { useSelector, useDispatch } from "react-redux";
import {
  acDecrementItem,
  acDeleteItem,
  acIncrementItem,
} from "../../Redux/card";

import Empty from "./empty-cart.gif";

export const Card = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [total, setTotal] = useState(0);
  const card = useSelector((state) => state.card);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleDel(id) {
    dispatch(acDeleteItem(id));
    const msg = "Товар удален из корзины!";
    enqueueSnackbar(msg, { variant: "warning" });
  }

  const handleInc = (id) => {
    dispatch(acIncrementItem(id));
  };

  const handleDec = (id) => {
    dispatch(acDecrementItem(id));
    if (id.count <= 0) {
      id.count = 0;
      return id;
    }
  };

  useEffect(() => {
    let i = 0;
    card.forEach((item) => {
      i += item.price * item.count;
    });
    setTotal(i);
  }, [card]);

  const viewProduct = (id) => {
    navigate(`/view/product/${id}`);
  };

  return (
    <div className="card_section">
      <Location>
        <Link to={"/"}>Главная</Link>
        <span>{">"}</span>
        <Link to={"/basket"}>Корзина</Link>
      </Location>

      {/* ======== Cart container for cart_item ======== */}
      <div className="card_container">
        <h1>Ваш заказ</h1>
        {/* ============ Product item section =========== */}
        {card.map((item) => {
          return (
            <div className="card_item" key={item.id}>
              <figure onClick={() => viewProduct(item.id)}>
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

        {/* ============== Total price calc section ========== */}
        <div className={card.length ? "total_price" : "total_price_none"}>
          <p>K оплате:</p>
          <NumericFormat
            value={total || 0}
            displayType="text"
            thousandSeparator=" "
            suffix=" sum"
          />
        </div>

        {/* ======== When cart is empty ======== */}
        <div
          className={!card.length ? "empty_card_active" : "empty_card_close"}
        >
          <h1 className="animation">Basket is Empty</h1>
          <figure>
            <img src={Empty} alt="Card is empty" />
          </figure>
        </div>
      </div>

      {/* ========== Cart container  for personal information ======= */}
      <form className={card.length ? "book_container" : "book_container_close"}>
        <h3>Оформление заказа</h3>

        {/* ========== left section for book container ========= */}
        <div className="info_left_section">
          <div className="personal_info">
            <p>Персональные данные:</p>
            <input
              type="text"
              placeholder="Ваше имя*"
              required
              autoComplete="off"
            />
            <input
              type="text"
              placeholder="Ваша фамилия*"
              required
              autoComplete="off"
            />
            <input
              type="email"
              placeholder="Ваш e-mail*"
              required
              autoComplete="off"
            />
            <input
              type="number"
              placeholder="Ваш телефон*"
              required
              autoComplete="off"
            />
          </div>

          <div className="delivery_section">
            <p>Способ доставки:</p>
            <div className="delivery_item">
              <p>По Украине:</p>
              <label htmlFor="">
                <input type="radio" name="change" />
                <span>
                  Самовывоз - вул. Большая Васильковская 14(м. Льва Толстого)
                </span>
              </label>
              <label htmlFor="">
                <input type="radio" name="change" />
                <span>Новая Почта</span>
              </label>
            </div>
            <div className="delivery_item">
              <p>Международная доставка:</p>
              <label htmlFor="">
                <input type="radio" name="date" />
                <span>Украпочта / 1-3 недели / 30$</span>
              </label>
              <label htmlFor="">
                <input type="radio" name="date" />
                <span>DHL / 3-7 дней / 60$</span>
              </label>
            </div>
          </div>

          {/* ======== adress info section ======== */}
          <div className="personal_info">
            <p>Адрес доставки:</p>
            <input
              type="text"
              placeholder="Город*"
              required
              autoComplete="off"
            />
            <input
              type="text"
              placeholder="Отделение почты*"
              required
              autoComplete="off"
            />
          </div>

          <div className="delivery_section payment_section">
            <p>
              Вы можете оплатить покупку одним из ниже перечисленных способов:
            </p>
            <label htmlFor="">
              <input type="radio" name="pay" />
              <span>Полная предоплата через Приват 24</span>
            </label>
            <label htmlFor="">
              <input type="radio" name="pay" />
              <span>Денежным переводом Visa/MasterCard</span>
            </label>
            <label htmlFor="">
              <input type="radio" name="pay" />
              <span>Наложенным платежом в отделении Новой Почты</span>
            </label>
          </div>

          {/* ========= use bonus section ======= */}
          <div className="personal_info">
            <p>Использование бонусного счёта:</p>
            <input
              type="text"
              placeholder="Сумма списания бонусов*"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        {/* ========== right section for book container ========= */}
        <div className="info_right_section">
          <div className="extra_info">
            <Link to={"/"}>Войти в личный кабинет</Link>
            <Link to={"/"}>УСЛОВИЯ ДОСТАВКИ</Link>
            <Link to={"/"}>УСЛОВИЯ ОБМЕНА И ВОЗВРАТА</Link>
            <Link to={"/"}>ИНФОРМАЦИЯ ОБ ОПЛАТЕ</Link>
          </div>
          <div className="buy_box">
            <p>
              ДОСТАВКА: <span>По тарифам перевозчика</span>
            </p>
            <p>
              БОНУСЫ:{" "}
              <NumericFormat
                value={0}
                displayType="text"
                thousandSeparator=" "
                suffix=" sum"
              />
            </p>
            <p>
              ИТОГО:{" "}
              <NumericFormat
                value={total || 0}
                displayType="text"
                thousandSeparator=" "
                suffix=" sum"
              />
            </p>
            <button type="submit">ОФОРМИТЬ ЗАКАЗ</button>
            <span>
              Нажимая на кнопку «оплатить заказ», я принимаю условия{" "}
              <Link to={"/"}>публичной оферты</Link> и{" "}
              <Link to={"/"}>политики конфиденциальности</Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};
