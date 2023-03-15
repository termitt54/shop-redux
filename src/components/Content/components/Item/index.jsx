import React, { useState } from "react";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addToBasket, plusCount } from "../../../../redux/basketReducer";
import { Color } from "./components/Color";
import { Guarant } from "./components/Guarant";
import { Memory } from "./components/Memory";
import "./index.scss";

export const Item = () => {
  const { state } = useLocation();
  const basket = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();
  let item = state.item;
  const navigate = useNavigate();
  const [guarant, setGuarant] = useState("Без гарантии");
  const [color, setColor] = useState("black");
  const [memory, setMemory] = useState("");

  const addItem = (item) => {
    const order = {
      ...item,
      count: 1,
      totalPrice: item.price,
      guarant: guarant,
      color: color,
      memory: memory,
    };
    const el = basket.find(
      (el) =>
        el.name === item.name &&
        el.guarant === guarant &&
        el.color === color &&
        el.memory === memory
    );
    if (el) {
      dispatch(plusCount(el));
    } else {
      dispatch(addToBasket(order));
    }
  };

  if (guarant === "12 месяцев") {
    item = { ...item, price: item.price + item.price * 0.05 };
  }
  if (guarant === "24 месяцев") {
    item = { ...item, price: item.price + item.price * 0.1 };
  }
  if (guarant === "36 месяцев") {
    item = { ...item, price: item.price + item.price * 0.15 };
  }
  if (guarant === "60 месяцев") {
    item = { ...item, price: item.price + item.price * 0.25 };
  }

  if (item.memory) {
    if (item.memory[0] === "64Gb") {
      if (memory === "64Gb") {
        item = { ...item, price: item.price + 0 };
      }
      if (memory === "128Gb") {
        item = { ...item, price: item.price + 5000 };
      }
      if (memory === "256Gb") {
        item = { ...item, price: item.price + 12500 };
      }
      if (memory === "512Gb") {
        item = { ...item, price: item.price + 25000 };
      }
    } else if (item.memory[0] === "128Gb") {
      if (memory === "128Gb") {
        item = { ...item, price: item.price + 0 };
      }
      if (memory === "256Gb") {
        item = { ...item, price: item.price + 12500 };
      }
      if (memory === "512Gb") {
        item = { ...item, price: item.price + 25000 };
      }
    } else {
      if (memory === "64Gb") {
        item = { ...item, price: item.price + 5000 };
      }
      if (memory === "128Gb") {
        item = { ...item, price: item.price + 11000 };
      }
      if (memory === "256Gb") {
        item = { ...item, price: item.price + 17500 };
      }
      if (memory === "512Gb") {
        item = { ...item, price: item.price + 25000 };
      }
    }
  }

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem href="/">Главная</BreadcrumbItem>
        <Breadcrumb.Item href={`/${state.brand.href}`}>
          {state.brand.category}
        </Breadcrumb.Item>
        <BreadcrumbItem onClick={goBack}>{state.brand.name}</BreadcrumbItem>
        <BreadcrumbItem active>{item.name}</BreadcrumbItem>
      </Breadcrumb>

      <div className="element">
        <img className="element__image" src={item.image} alt="" />

        <div className="info element__info">
          <div className="info__article">Артикул: {item.article}</div>
          <div className="info__title">
            Название: <span style={{ fontWeight: 700 }}>{item.name}</span>
          </div>
          <div className="info__garant">
            Гарантия: <Guarant guarant={guarant} setGuarant={setGuarant} />
          </div>
          {item.memory && (
            <div className="memory">
              <span>Память:</span> <Memory item={item} setMemory={setMemory} />
            </div>
          )}
          {item.color && (
            <div className="color">
              Цвет: <Color item={item} setColor={setColor} />
            </div>
          )}

          <div className="info__block">
            <div className="info__price">
              {item.price.toLocaleString("ru-RU")} руб.
            </div>
            <button className="btn btn_save">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="red"
                className="bi bi-suit-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
              </svg>
            </button>
            <button onClick={() => addItem(item)} className="btn btn_buy">
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
