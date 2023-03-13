import React, { useState } from "react";
import styles from './Cell.module.scss'

const CELL__STATE = {
  closed: 'closed',
  opened: 'opened',
  flag: 'flag',
  quest: 'quest',
  bomb: 'bomb',
  bombAct: 'bombAct',
  bombFlag: 'bombFlag',
  one: 'cell__1',
  two: 'cell__2',
  three: 'cell__3',
  four: 'cell__4',
  five: 'cell__5',
  six: 'cell__6',
  seven: 'cell__7',
  eight: 'cell__8'
}

const Cell:React.FC = () => {
  const [cellState, setCellState] = useState(CELL__STATE.closed);

  return (
    <button className={styles[cellState]}>
      <span className="visually-hidden">Ячейка поля</span>
    </button>
  )

}

export default Cell;
