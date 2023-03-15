import React from "react";
import {  useSelector } from "react-redux";
import { Item } from "./components/Item";
import { TotalPrice } from "./components/TotalPrice";
import "./index.scss";

export const Basket = () => {
  const basket = useSelector((state) => state.basket.basket);
  return (
    <div className="basket">
      <div className="basket__orders">
        {!basket.length ? (
          <div className="basket__empty">В корзине пока пусто</div>
        ) : (
          basket.map((item, index) => {
            return (
              <Item item={item} index={index}/>
            );
          })
        )}
      </div>

        {!basket.length 
        ? null
        : <TotalPrice/>
        }
    </div>
  );
};
