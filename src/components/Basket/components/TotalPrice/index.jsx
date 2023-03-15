import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import './index.scss'

export const TotalPrice = () => {
    const [totalPrice, setTotalPrice] = useState(0)
    const basket = useSelector((state) => state.basket.basket);

    useEffect(() => {
        setTotalPrice(basket.reduce((a,b) => a + b.totalPrice, 0))
    }, [basket])

    return (
        <div className="total-price">
            <div className="total-price__final">
                <span>Итого:</span>
                <span>{totalPrice.toLocaleString("ru-RU")} руб.</span>
            </div>

            <button className="total-price__button">Оформить заказ</button>
        </div>
    )
}