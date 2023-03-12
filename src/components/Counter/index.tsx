import React from "react";

import styles from './Counter.module.scss';

const Counter:React.FC = () => {
  return (
    <div className="minesweeper__counter-counter counter">
      <span className="visually-hidden">Счетчик</span>
      <div className={styles.counter__0}/>
      <div className={styles.counter__0}/>
      <div className={styles.counter__0}/>
    </div>
  )
}

export default Counter;
