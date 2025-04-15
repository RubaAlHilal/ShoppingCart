import React, { useEffect, useState, useContext} from "react";
import Product from "./Product";
import { CartContext } from "../context/cartContext";

function ProductList() {
  const [products, setProducts] = useState([]);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h3 className="text-center m-3">Product List</h3>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <Product
               product={product}
               key={product.id}
               cart={cart}
               addToCart={addToCart}
               removeFromCart={removeFromCart} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
