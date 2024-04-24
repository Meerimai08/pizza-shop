import React from "react";
import "./pizza.css";
import Card from "../card";

function Pizza() {
  const cardPizza = [
    {
      img: "https://i.pinimg.com/236x/4d/8b/ce/4d8bce02999b38314e48ea984f015fe0.jpg",
      name: "pizza",
      price: 400,
      id: 1,
    },
    {
      img: "https://i.pinimg.com/236x/34/f4/8f/34f48f5c56c938642b80b0555e5adf82.jpg",
      name: "pizza",
      price: 1300,
      id: 2,
    },
    {
      img: "https://i.pinimg.com/236x/ab/f5/a4/abf5a42ae9b11dc30f271862844237bd.jpg",
      name: "pizza",
      price: 600,
      id: 3,
    },
    {
      img: "https://i.pinimg.com/236x/b5/07/69/b50769913713cd449bc6c36224d10749.jpg",
      name: "pizza",
      price: 800,
      id: 4,
    },
    {
      img: "https://i.pinimg.com/236x/fe/07/73/fe07732a17df21b7234a8bbc656b770f.jpg",
      name: "pizza",
      price: 500,
      id: 5,
    },
    {
      img: "https://i.pinimg.com/236x/fa/f1/df/faf1dfb8a5692e965ec9757c2a3aabb5.jpg",
      name: "pizza",
      price: 1500,
      id: 6,
    },
  ];
  return (
    <div className="container">
      <div className="cards">
        {cardPizza.map((el) => (
          <Card key={el.id} products={el} />
        ))}
      </div>
    </div>
  );
}

export default Pizza;
