import React from "react";
import "./index.scss";

export const Color = ({ item, setColor }) => {
  const color = item.color;

  return (
    <>
      {color.map((color, index) => {
        return (
          <label key={index + 1} className="color__label" htmlFor={"color" + (index + 1)}>
            <input onChange={() => setColor(color)} className="color__input" type="radio" name="color" id={"color" + (index + 1)} />
            <div
              style={{ backgroundColor: `${color}` }}
              className="color__decoration"
            ></div>
          </label>
        );
      })}
    </>
  );
};
