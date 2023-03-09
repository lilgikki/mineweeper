import React from "react";
import './Counter.css'

const Counter:React.FC = () => {
  return (
    <div className="minesweeper__counter-bombs bombs">
      <span className="visually-hidden">Счетчик оставшихся мин</span>
      <div className="bombs__0"></div>
      <div className="bombs__4"></div>
      <div className="bombs__0"></div>
    </div>
  )
}

export default Counter;
