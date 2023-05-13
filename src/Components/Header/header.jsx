import React from "react";
import "./header.css";
import { NavLink, useLocation, Link } from "react-router-dom";

import menu_icon from "../Images/menu.svg";
import search_image from "../Images/search.svg";
import profile from "../Images/profile.svg";
import favourite from "../Images/favourite.svg";
import basket from "../Images/basket.svg";

export function Header() {
  const location = useLocation().pathname;
  const [search, setSearch] = React.useState(false);

  const handleBlur = (e) => {
    const input = document.querySelector(".input");
    setSearch(false);
    input.value = "";
  };

  return (
    <nav className={location === "/" ? "header_home" : "header_other"}>
      <div className="left_header">
        <button>
          <img src={menu_icon} alt="" />
        </button>
        <NavLink to="/product?q=new">NEW</NavLink>
        <NavLink to="/catalog">КАТАЛОГ</NavLink>
        <NavLink to="/about">О НАС</NavLink>
      </div>
      <Link to="/">YANKI</Link>
      <div className="right_header">
        <select name="language">
          <option value="ru">Ru</option>
          <option value="en">En</option>
          <option value="uz">Uz</option>
        </select>
        <select name="carrency">
          <option value="ru">UAH</option>
          <option value="en">EU</option>
          <option value="uz">FU</option>
        </select>
        <form className="action">
          <input
            type="search"
            name="search"
            className="input"
            required
            placeholder="Введите ваш запрос"
            style={
              search
                ? { transition: "all 0.05s ease-in-out !important" }
                : {
                    display: "none",
                    transform: "translateY:-100%",
                    width: "0px",
                  }
            }
            onBlur={handleBlur}
            autoFocus
          />
          <button type="button" onClick={() => setSearch(true)}>
            <img src={search_image} alt="" />
          </button>
        </form>
        <Link to={"./contact"}>
          <img src={profile} alt="" />
        </Link>
        <Link to="/favourite">
          <img src={favourite} alt="" />
        </Link>
        <Link to="/basket">
          <img src={basket} alt="" />
        </Link>
      </div>
    </nav>
  );
}
