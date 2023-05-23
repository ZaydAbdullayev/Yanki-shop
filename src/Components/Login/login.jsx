import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Icon from "./Frame.svg";

export const Sigin = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = Object.fromEntries(formData.entries());
    console.log(value);
    navigate("/catalog");
  };

  const closePage = (e) => {
    navigate("/");
  };

  return (
    <div className="login_form_box">
      <form className="login_form" onSubmit={handleSubmit}>
        <p>Авторизация</p>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          placeholder="Ваш e-mail*"
          className="input"
        />
        <input
          type="password"
          name="password"
          required
          autoComplete="off"
          placeholder="Ваш пароль*"
          className="input"
        />
        <div className="forgot_password_box">
          <Link to={"/forgot/password"}>Забыли пароль?</Link>
          <Link to={"/new/profile"}>Нет аккаунта?</Link>
        </div>
        <button className="btn" type="submit">
          Войти
        </button>
        <button className="close_btn" type="button" onClick={closePage}>
          <img src={Icon} alt="icon" />
        </button>
      </form>
    </div>
  );
};

export const ForgotPassS = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = Object.fromEntries(formData.entries());
    console.log(value);
    navigate("/update/password");
  };

  const closePage = (e) => {
    navigate("/");
  };

  return (
    <div className="login_form_box">
      <form className="login_form" onSubmit={handleSubmit}>
        <p>Забыли пароль?</p>
        <span>
          Введите свою почту и мы отправим вам код для сброса пароля и
          восстановления аккаунта:
        </span>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          placeholder="Ваш e-mail*"
          className="input"
        />
        <button className="btn">Войти</button>
        <button className="close_btn" type="button" onClick={closePage}>
          <img src={Icon} alt="icon" />
        </button>
      </form>
    </div>
  );
};

export const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = Object.fromEntries(formData.entries());
    console.log(value);
    navigate("/profile/chack");
  };

  const closePage = (e) => {
    navigate("/");
  };

  return (
    <div className="login_form_box">
      <form className="login_form" onSubmit={handleSubmit}>
        <p>Регистрация</p>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          placeholder="Ваш e-mail*"
          className="input"
        />
        <input
          type="password"
          name="password"
          required
          autoComplete="off"
          placeholder="Ваш пароль*"
          className="input"
        />
        <button className="btn">Продолжить</button>
        <button className="close_btn" type="button" onClick={closePage}>
          <img src={Icon} alt="icon" />
        </button>
      </form>
    </div>
  );
};

export const LoginSecondLevel = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = Object.fromEntries(formData.entries());
    console.log(value);
    navigate("/profile/update/success");
  };

  const closePage = (e) => {
    navigate("/");
  };

  return (
    <div className="login_form_box">
      <form className="login_form" onSubmit={handleSubmit}>
        <p>Регистрация - шаг 2</p>
        <span>
          Мы отправили вам на почту код для подтверждения регистации. Введите
          его, пожалуйста
        </span>
        <input
          type="number"
          name="email"
          required
          autoComplete="off"
          placeholder="Код с e-mail*"
          maxLength="6"
          className="input"
        />
        <button className="btn">Войти</button>
        <button className="close_btn" type="button" onClick={closePage}>
          <img src={Icon} alt="icon" />
        </button>
      </form>
    </div>
  );
};

export const ForgotPassL = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = Object.fromEntries(formData.entries());
    console.log(value);
    navigate("/update/succes");
  };

  const closePage = (e) => {
    navigate("/");
  };

  return (
    <div className="login_form_box">
      <form className="login_form" onSubmit={handleSubmit}>
        <p>Забыли пароль?</p>
        <span>Код из сообщения:</span>
        <input
          type="number"
          name="code"
          autoComplete="off"
          placeholder="Код*"
          className="input"
          required
        />
        <input
          type="password"
          name="password"
          autoComplete="off"
          placeholder="Новый пароль*"
          className="input"
          required
        />
        <button className="btn">Продолжить</button>
        <button className="close_btn" type="button" onClick={closePage}>
          <img src={Icon} alt="icon" />
        </button>
      </form>
    </div>
  );
};

export const Succes = () => {
  const navigate = useNavigate();
  const closePage = (e) => {
    navigate("/catalog");
  };
  return (
    <div className="login_form_box">
      <form className="login_form">
        <p>Вы успешно сменили пароль!</p>
        <button className="close_btn" type="button" onClick={closePage}>
          <img src={Icon} alt="icon" />
        </button>
      </form>
    </div>
  );
};

export const SuccesL = () => {
  const navigate = useNavigate();
  const closePage = (e) => {
    navigate("/catalog");
  };
  return (
    <div className="login_form_box">
      <form className="login_form">
        <p>Регистрация - успешно!</p>
        <span>Вы успешно зарегестрировались! Приятных покупок!</span>
        <button className="close_btn" type="button" onClick={closePage}>
          <img src={Icon} alt="icon" />
        </button>
      </form>
    </div>
  );
};
