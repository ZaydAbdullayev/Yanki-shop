import React, { useEffect, useState } from "react";
import { Header } from "./Components/Header/header";
import { Home } from "./Components/Home/home";
import Footer from "./Components/Footer/footer";
import { Product } from "./Page/Product/product.jsx";
import { Routes, Route } from "react-router-dom";
import { ProductView } from "./Page/ProductView/productview";
import { Card } from "./Page/Card/card";
import { Favourite } from "./Page/Favourite/favourite";
import { ContactPage } from "./Page/ContactPage/contactpage";
import { useLocation } from "react-router-dom";
import {
  Login,
  ForgotPassL,
  Sigin,
  ForgotPassS,
  Succes,
  LoginSecondLevel,
  SuccesL,
} from "./Components/Login/login";

function App() {
  const location = useLocation();
  const [search, setSearch] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="App" style={{ position: "relative" }}>
      <Header search={search} setSearch={setSearch} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/product" element={<Product search={search} />} />
        <Route path="/catalog" element={<Product search={search} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/view/product/:code" element={<ProductView />} />
        <Route path="/basket" element={<Card />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/about" element={<Sigin />} />
        <Route path="/forgot/password" element={<ForgotPassS />} />
        <Route path="/new/profile" element={<Login />} />
        <Route path="/update/password" element={<ForgotPassL />} />
        <Route path="/update/succes" element={<Succes />} />
        <Route path="/profile/chack" element={<LoginSecondLevel />} />
        <Route path="/profile/update/success" element={<SuccesL />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
