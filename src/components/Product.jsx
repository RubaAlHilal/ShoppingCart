import React, { useContext } from "react";
// import { appContext } from "../App";
import { CartContext } from "../context/cartContext";

function Product({ product }) {
  // const {cart, addToCart} = useContext(appContext);
  const {cart, addToCart, removeFromCart} = useContext(CartContext);
  const quantity = cart.filter((item) => item.id === product.id).length;

  return (
    <div className="col-3">
      <div
        className="card shadow-sm position-relative"
        style={{
          maxHeight: "450px",
          margin: "20px 10px",
        }}
      >
        {quantity > 0 && (
  <div
    style={{
      position: "absolute",
      top: "10px",
      right: "10px",
      background: "red",
      color: "white",
      borderRadius: "50%",
      width: "30px",
      height: "30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold"
    }}
  >
    {quantity}
  </div>
)}

        <img
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          src={product.image}
        />

        <div className="card-body">
          <p className="card-text">{product.title}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-lg btn-success" onClick={()=> addToCart(product)}>
                +
              </button>
              <button type="button" className="btn btn-lg btn-danger" onClick={()=> removeFromCart(product.id) }>
                -
              </button>
            </div>
            <p className="text-muted">{product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
