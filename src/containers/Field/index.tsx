import React from "react";
import { Cell } from "../../components";
import styles from './Field.module.scss'
import { FieldSize, renderArray } from "helpers/array";
import { CellNames } from "helpers/cell";

let isFirstClick = true;
let gameActive = false;
let arr:number[][] = [];
// const arrChecked:number[][] = [];

const Field:React.FC = () => {
  const cells:number[] = [];
  for (let i = 0; i < FieldSize*FieldSize; i++) {
    cells[i] = i;
  }

  const showCell = (x:number, y:number) => {
    switch (arr[x][y]) {
      case 0:
        return CellNames.opened;
        break;
      case 1:
        return CellNames.one;
        break;
      case 2:
        return CellNames.two;
        break;
      case 3:
        return CellNames.three;
        break;
      case 4:
        return CellNames.four;
        break;
      case 5:
        return CellNames.five;
        break;
      case 6:
        return CellNames.six;
        break;
      case 7:
        return CellNames.seven;
        break;
      case 8:
        return CellNames.eight;
        break;
      case 9:
        return CellNames.bombAct;
        break;  
    }
  };

  const clickCell = (firstClick:number, state:any, setState:any) => {
    if (isFirstClick) {
      arr = renderArray(firstClick);
      // for (let o = 0; o < FieldSize; o++) {
      //   arrChecked[o] = [];
      //   for (let p = 0; p < FieldSize; p++) {
      //     arrChecked[o][p] = 0;
      //   }
      // }
      isFirstClick = false;
      gameActive = true;
    }

    if (gameActive && state == CellNames.closed) {
      const x = Math.floor(firstClick / FieldSize);
      const y = firstClick % FieldSize;
      state = showCell(x, y);
      setState(state);
    }
  }

  return (

    <div className={styles.field}>
      { cells.map((item, index) => <Cell key={index} point={index} clickCell={clickCell}/> ) }
    </div>

  )

}

export default Field;
