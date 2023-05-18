import React, { useState, useEffect } from "react";
import "./productview.css";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Location from "../../Components/Location/location";
import { ProductCard } from "../../Components/ProductCard/productcard";
import Loading from "../../Components/Loading/loading";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { acAddCard } from "../../Redux/card";
import { acAddLike } from "../../Redux/like";

import Favorite from "../images/Izbranny.svg";
import { AiOutlineEye } from "react-icons/ai";

export const ProductView = () => {
  const [product, setProduct] = useState({ img: [] });
  const [img, setImg] = useState(0);
  const { code } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  useEffect(() => {
    const url = `https://server.pandashop.uz/product_test?id=${code}`;
    setLoading(true);

    axios(url)
      .then((res) => {
        const img = JSON.parse(res?.data?.images || "[]");
        delete res?.data?.images;
        setProduct({ ...res.data, img });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, [code]);

  useEffect(() => {
    const url = "https://server.pandashop.uz/product_test";
    setLoading(true);
    window.scrollTo(0, 0);
    axios(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, [product]);

  const addToCard = (item) => {
    const size = document.querySelector("#product__size");
    dispatch(acAddCard(item));
    const msg = " Этот товар добавление в карзинку";
    enqueueSnackbar(msg, { variant: "success" });

    if (!item.size) {
      item.size = size.value;
    }
  };

  const addToLike = (item) => {
    dispatch(acAddLike(item));
    const message = "Товар добавлен в избранное";
    enqueueSnackbar(message, { variant: "success" });

    // if (item.id) {
    //   const message = "Товар добавлен в избранное";
    //   enqueueSnackbar(message, { variant: "success" });
    // } else {
    //   const message = "Этот товар уже в избранном";
    //   enqueueSnackbar(message, { variant: "info" });
    // }
  };

  return (
    <div className="product_view">
      <Location>
        <Link to={"/"}>Главная</Link>
        <span>{">"}</span>
        <Link to={"/catalog"}>Каталог</Link>
        <span>{">"}</span>
        <Link to={`/view/product/${code}`}>
          {product.name ? product.name : "Product"}
        </Link>
      </Location>
      <div className="product_view_box">
        <div className="left_product_view">
          <div className="left_product_view_img_box">
            {product?.img?.map((item, index) => {
              return (
                <figure key={index} onClick={() => setImg(index)}>
                  <img src={item} alt="" />
                  <i style={img === index ? { display: "none" } : {}}></i>
                </figure>
              );
            })}
          </div>
          <figure className="left_main_img">
            <img src={product.img[img]} alt="" />
          </figure>
        </div>
        <div className="right_product_view">
          <p>
            {product.name}
            <span className="view_num">
              <span>
                <AiOutlineEye />
              </span>
              {product.view}
            </span>{" "}
          </p>
          <span>{product.price} sum</span>
          <p>Season | {product.season}</p>
          <select
            name="size"
            id="product__size"
            defaultValue={"Выберите размер"}
          >
            <option value="">Выберите размер</option>
            <option value="XXL">XXL</option>
            <option value="XL">XL</option>
            <option value="XM">XM</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
          <div className="btn_box">
            <button onClick={() => addToCard({ ...product, count: 1 })}>
              В КОРЗИНУ
            </button>
            <button onClick={() => addToLike(product)}>
              <img src={Favorite} alt="icon" />
              <span>В ИЗБРАННОЕ</span>
            </button>
          </div>
          <p>Подробности</p>
          <details className="about_product">
            <summary>
              Обмеры и описание <span>∨</span>
            </summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, error aliquid sequi maxime nihil, ducimus odio dicta
              fugiat eveniet ad corporis nemo consectetur aliquam tenetur
              corrupti deleniti quas quidem! Fugiat.
            </p>
          </details>
          <details class=" about_product">
            <summary>
              Состав и уход
              <span>∨</span>
            </summary>
            <p id="product_info">
              Состав: 50% Шерсть, 50% Полиэстер <br />
              Подкладка: 100% Полиэстер <br />
              Утеплитель: 90% Пух, 10% Перо <br />
              - Не стирать <br />
              - Гладить при температуре утюга до 110°C <br />
              - Не отбеливать <br />
              - Сухая чистка (химчистка) <br />- Барабанная сушка запрещена
            </p>
          </details>
        </div>
      </div>
      <div className="offer_product_box">
        <div className="offer_product">
          <h3>Весь образ</h3>
          <div className="offer_img_box">
            <ProductCard data={data.slice(301, 303)} />
          </div>
        </div>
        <div className="offer_product">
          <h3>Дополните образ</h3>
          <div className="offer_img_box">
            <ProductCard data={data.slice(100, 104)} />
          </div>
        </div>
        <div className="offer_product">
          <h3>Вам может понравиться</h3>
          <div className="offer_img_box">
            <ProductCard data={data.slice(240, 244)} />
          </div>
        </div>
        <div className="offer_product">
          <h3>Вы недавно смотрели</h3>
          <div className="offer_img_box">
            <ProductCard data={data.slice(400, 402)} />
          </div>
        </div>
      </div>

      <Loading status={loading} />
    </div>
  );
};
