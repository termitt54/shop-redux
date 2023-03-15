import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  minusCount,
  plusCount,
  removeFromBasket,
} from "../../../../redux/basketReducer";
import "./index.scss";

export const Item = ({ item, index }) => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const addCount = (item) => {
    dispatch(plusCount(item));
  };

  const removeCount = (item) => {
    dispatch(minusCount(item));
  };
  return (
    <div key={index + 1} className="order">
      <img className="order__image" src={item.image} alt="" />
      <div className="order__info">
        <div className="order__title">{item.name}</div>
        {item.color ? (
          <div className="order__color">Цвет: <span>{item.color}</span></div>
        ) : null}
        {item.memory ? <div className="order__memory">Память: <span>{item.memory}</span></div> : null}
        <div className="order__garant">Гарантия: <span>{item.guarant}</span></div>
      </div>
      <div
        onMouseEnter={() => setVisible(!visible)}
        onMouseLeave={() => setVisible(!visible)}
        className="order__count"
      >
        <button
          onClick={() => removeCount(item)}
          disabled={item.count === 1 ? true : false}
          className="btn_count-minus"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-dash-lg"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
            />
          </svg>
        </button>
        <span>{item.count}</span>
        <button onClick={() => addCount(item)} className="btn_count-plus">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-lg"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
            />
          </svg>
        </button>

        {visible ? (
          <span
            onClick={() => dispatch(removeFromBasket(item))}
            className="order__remove"
          >
            Удалить
          </span>
        ) : null}
      </div>

      <div className="order__price">
        {item.totalPrice.toLocaleString("ru-RU")} руб.
      </div>
    </div>
  );
};
