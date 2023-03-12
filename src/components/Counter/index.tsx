import React from "react";
import './Counter.module.scss'

const Counter:React.FC = () => {
  return (
    <div className="minesweeper__counter-counter counter">
      <span className="visually-hidden">Счетчик</span>
      <div className="counter__0"></div>
      <div className="counter__0"></div>
      <div className="counter__0"></div>
    </div>
  )
}

export default Counter;
