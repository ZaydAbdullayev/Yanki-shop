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

function App() {
  const location = useLocation();
  const [search, setSearch] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="App">
      <Header search={search} setSearch={setSearch} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/product" element={<Product search={search} />} />
        <Route path="/catalog" element={<Product search={search} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/view/product/:code" element={<ProductView />} />
        <Route path="/basket" element={<Card />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
