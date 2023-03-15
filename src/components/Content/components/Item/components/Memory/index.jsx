import React from "react";
import "./index.scss";

export const Memory = ({item, setMemory}) => {
   const memory = item.memory

   return (
       <>
      {memory.map((memory, index) => {
        return (
          <label key={index + 1} className="memory__label" htmlFor={"memory" + (index + 1)}>
            <input onChange={() => setMemory(memory)} className="memory__input" type="radio" name="memory" id={"memory" + (index + 1)} />
            <div
              className="memory__decoration"
            >{memory}</div>
          </label>
        );
      })}
    </>
   )
}