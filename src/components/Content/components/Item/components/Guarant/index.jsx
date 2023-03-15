import React, { useEffect, useState } from "react";
import './index.scss'

export const Guarant = ({guarant, setGuarant}) => {
    const options = [
        {
            id: 0,
            value: "Без гарантии",
            title: "Без гарантии"
        },
        {
            id: 1,
            value: "12 месяцев",
            title: "12 месяцев"
        },
        {
            id: 2,
            value: "24 месяцев",
            title: "24 месяцев"
        },
        {
            id: 3,
            value: "36 месяцев",
            title: "36 месяцев"
        },
        {
            id: 4,
            value: "60 месяцев",
            title: "60 месяцев"
        },
    ]
    return (
        <select onChange={(e) => setGuarant(e.target.value)} name="" id="">
            {options.map(opt => {
                return (
                    <option value={opt.value}>{opt.title}</option>
                )
            })}
        </select>
    )
}