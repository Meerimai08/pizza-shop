import React from "react";
import "./basket.css";
import { useSelector, useDispatch } from "react-redux";
import pizza from "../../assets/pizza-img.jpg";
import { Link } from "react-router-dom";
import { Flex } from "antd";
import { deleteProduct } from "../../store/reducer/basket";
function Basket() {
  const countProduct = useSelector((state) => state.basket.basket);
  const count = useSelector((state) => state.basket.balance);
  const dispatch = useDispatch();
  return (
    <>
      <div className="basket-component">
        <div className="basket-logo">
          <img src={pizza} alt="" className="pizza-img" />
          <h4 className="basket-logo-text">
            React Pizza
            <br />
            лучшая пицца в вашем городе
          </h4>
        </div>
        <Flex justify="center" gap={50}>
          <Link to="/" className="basket-link">
            Все
          </Link>
          <Link to="/basket" className="header-link2">
            Корзина:{count}
          </Link>
        </Flex>
        <div className="cards-baskets">
          {countProduct.map((el) => (
            <div className="card-basket">
              <div className="card" key={el.id}>
                <img src={el.img} alt="" />
                <h4 className="basket-price">{`Цена:  ${el.price}сом`}</h4>
                <button
                  onClick={() => dispatch(deleteProduct(el.price))}
                  className="basket-btn"
                >
                  Удалить
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Basket;
