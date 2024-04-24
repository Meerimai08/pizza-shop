import React from "react";
import { addProduct } from "../store/reducer/basket";
import { useDispatch } from "react-redux";

function Card({ products }) {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="card">
        <img src={products.img} alt={products.name} className="home-img" />
        <h3 className="home-name">{products.name}</h3>
        <p className="home-price">{`Price: ${products.price}сом`}</p>
        <div className="home-btns">
          <button
            onClick={() => dispatch(addProduct(products))}
            className="home-btn"
          >
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
