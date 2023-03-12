import React from "react";
import { Info } from "../../containers";
import { Field } from "../../containers";
import './Minesweeper.module.scss'

const Minesweeper:React.FC = () => {

  return (
      <section className="minesweeper">
          <div className="minesweeper__container container">
            <h2 className="visually-hidden">Игра "Сапёр"</h2>
            <Info/>
            <Field/>
          </div>
        </section>
  )

}

export default Minesweeper;

