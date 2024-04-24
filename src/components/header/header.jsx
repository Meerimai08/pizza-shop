import pizza from "../../assets/pizza-img.jpg";
import "./header.css";
import { Link } from "react-router-dom";
import { Button, Dropdown, Flex, Space } from "antd";
import Pizza from "../pizza/pizza";
import { useSelector } from "react-redux";
function Header() {
  const items = [
    {
      key: "1",
      label: (
        <button
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#fff",
            padding: 5,
            border: "none",
            color: "#000",
          }}
        >
          по высокой цене
        </button>
      ),
    },
    {
      key: "2",
      label: (
        <button
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#fff",
            padding: 5,
            border: "none",
            color: "#000",
          }}
        >
          по низкой цене
        </button>
      ),
    },
  ];
  const count = useSelector((state) => state.basket.balance);
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header__component">
            <div className="header-logo">
              <img src={pizza} alt="" className="pizza-img" />
              <h4 className="header-logo-text">
                React Pizza
                <br />
                лучшая пицца в вашем городе
              </h4>
            </div>
            <Flex justify="center" gap={50}>
              <Link to="/" className="header-link">
                Все
              </Link>
              <Link to="/pizza"></Link>
              <Link to="/basket" className="header-link2">
                Корзина:{count}сом
              </Link>
            </Flex>
            <Flex align="center" justify="end">
              <Space direction="vertical" />
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottomLeft"
              >
                <Button style={{ background: "#fea245", color: "#fff" }}>
                  Сортировка по ценам
                </Button>
              </Dropdown>
            </Flex>
          </div>
          <Pizza />
        </div>
      </div>
    </>
  );
}

export default Header;
