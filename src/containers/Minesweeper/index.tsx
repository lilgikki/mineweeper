import React from "react";
import { Info } from "../../containers";
import { Field } from "../../containers";
import styles from './Minesweeper.module.scss'

const Minesweeper:React.FC = () => {

  return (
      <section className={styles.minesweeper}>
          <div className={styles.container}>
            <h2 className="visually-hidden">Игра &quot;Сапёр&ldquo;</h2>
            <Info/>
            <Field/>
          </div>
        </section>
  )

}

export default Minesweeper;

