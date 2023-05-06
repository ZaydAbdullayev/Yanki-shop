import React, { useEffect, useState } from "react";
import "./product.css";
import { useLocation, Link } from "react-router-dom";
import Location from "../../Components/Location/location";
import { ProductCard } from "../../Components/ProductCard/productcard";
import axios from "axios";
import Loading from "../../Components/Loading/loading";

export function Product() {
  const query = useLocation().search.split("=")[1];
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [query]);

  useEffect(() => {
    const url = "https://server.pandashop.uz/product_test";
    setLoading(true)

    axios(url)
      .then((res) => {
        setData(res.data.slice(280, 340));
      })
      .catch((err) => {
        console.log(err);
      }).finally(() => {
        setLoading(false)
      })
  }, []);

  return (
    <div className="Product_page">
      <Location>
        <Link to="/">Главная</Link>
        <span>{">"}</span>
        <Link to={query ? `/product?q=${query}` : "/product"}>
          {" "}
          {query ? query : "Каталог"}{" "}
        </Link>
      </Location>

      <div className="product_container">
        <div className="product_filter">
          <h3>Каталог</h3>

          {catalog.map((item, index) => {
            return (
              <Link to={`/product?q=${item.query}`} key={index}>
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className="product_body">
          <ProductCard data={data} />
        </div>
      </div>

      <Loading status={loading} />
    </div>
  );
}

const catalog = [
  {
    name: "New",
    query: "new",
  },
  {
    name: "Bestsellers",
    query: "bestsellers",
  },
  {
    name: "Верхняя одежда",
    query: "top",
  },
  {
    name: "Шубы",
    query: "fur",
  },
  {
    name: "Тренчи",
    query: "trench",
  },
  {
    name: "Пальто",
    query: "coat",
  },
  {
    name: "Пуховики и жилеты",
    query: "vest",
  },
  {
    name: "Костюмы",
    query: "suit",
  },
  {
    name: "Жакеты",
    query: "jaket",
  },
  {
    name: "Платья",
    query: "dress",
  },
  {
    name: "Рубашки и блузы",
    query: "shirt",
  },
  {
    name: "Юбки",
    query: "skirt",
  },
  {
    name: "Футболки и топы",
    query: "t-shirt",
  },
  {
    name: "Аксессуары",
    query: "parfum",
  },
  {
    name: "Sale",
    query: "sale",
  },
  {
    name: "Summer",
    query: "summer",
  },
  {
    name: "Посмотреть всё",
    query: "all",
  },
];
