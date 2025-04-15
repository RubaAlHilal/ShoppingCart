import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import { CartContext } from '../context/cartContext';
function HomePage() {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  return (
    <div>
      <Header />
      <Hero />
      <Slider />
      <ProductList cart={cart} addToCart={addToCart} removeFromCart = {removeFromCart}/>
      <Footer />
    </div>
  );
}

export default HomePage;
