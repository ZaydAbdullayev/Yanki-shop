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
          <button type="button">
            <img src={search_image} alt="" />
          </button>
        </form>
        <a href=".">
          <img src={profile} alt="" />
        </a>
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
