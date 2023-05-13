import { Header } from "./Components/Header/header";
import { Home } from "./Components/Home/home";
import Footer from "./Components/Footer/footer";
import { Product } from "./Page/Product/product.jsx";
import { Routes, Route } from "react-router-dom";
import { ProductView } from "./Page/ProductView/productview";
import { Card } from "./Page/Card/card";
import { Favourite } from "./Page/Favourite/favourite";
import { ContactPage } from "./Page/ContactPage/contactpage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/catalog" element={<Product />} />
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
