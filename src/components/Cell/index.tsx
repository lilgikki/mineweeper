import React, { useState } from "react";
import './Cell.module.scss'

const Cell:React.FC = () => {
  const [cellState, setCellState] = useState('closed');

  return (
    <button className={`field__cell field__cell--${cellState}`}>
      <span className="visually-hidden">Ячейка поля</span>
    </button>
  )

}

export default Cell;
