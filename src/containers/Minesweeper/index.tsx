import React from "react";
import { Cell } from "../../components";
import { Counter } from "../../components";
import './Minesweeper.css'

const Minesweeper:React.FC = () => {

  return (
      <section className="minesweeper">
          <div className="minesweeper__container container">
            <h2 className="visually-hidden">Игра "Сапёр"</h2>
            <div className="minesweeper__info">
              <Counter/>
              <button className="minesweeper__play minesweeper__play--start">
                <span className="visually-hidden">Начать игру</span>
              </button>
              <div className="minesweeper__time time">
                <span className="visually-hidden">Секундомер</span>
                <div className="time__0"></div>
                <div className="time__0"></div>
                <div className="time__0"></div>
              </div>
            </div>
            <div className="minesweeper__field field">
              <Cell/>
            </div>
          </div>
        </section>
  )

}

export default Minesweeper;

