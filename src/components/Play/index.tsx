import React from "react";
import './Play.module.scss'

const Play:React.FC = () => {

  return (
    <button className="minesweeper__play minesweeper__play--start">
      <span className="visually-hidden">Начать игру</span>
    </button>
  )

}

export default Play;
