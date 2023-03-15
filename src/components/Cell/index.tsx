import React, { useState } from "react";
import styles from './Cell.module.scss'
import { renderArray, FieldSize } from "helpers/array";

let isFirstClick = true;
let gameActive = false;
let arr:number[][] = [];
const arrChecked:number[][] = [];

enum CellNames {
  closed = 'closed',
  opened = 'opened',
  flag = 'flag',
  quest = 'quest',
  bomb = 'bomb',
  bombAct ='bombAct',
  bombFlag = 'bombFlag',
  one = 'cell__1',
  two = 'cell__2',
  three = 'cell__3',
  four = 'cell__4',
  five = 'cell__5',
  six = 'cell__6',
  seven = 'cell__7',
  eight = 'cell__8'
}

interface IProps {
  point: number,
}

const Cell = (props: IProps) => {
  const [cellState, setCellState] = useState(CellNames.closed);

  const showCell = (a:Array<any>, x:number, y:number) => {
    switch (a[x][y]) {
      case 0:
        setCellState(CellNames.opened);
        break;
      case 1:
        setCellState(CellNames.one);
        break;
      case 2:
        setCellState(CellNames.two);
        break;
      case 3:
        setCellState(CellNames.three);
        break;
      case 4:
        setCellState(CellNames.four);
        break;
      case 5:
        setCellState(CellNames.five);
        break;
      case 6:
        setCellState(CellNames.six);
        break;
      case 7:
        setCellState(CellNames.seven);
        break;
        case 8:
          setCellState(CellNames.eight);
          break;
      case 9:
        setCellState(CellNames.bombAct);
        break;
        
    }
  };

  // const showEmptyNeighbours = (a:Array<any>, x:number, y:number) => {
  //   if (x > 0 && arrChecked[x-1][y] == 0) {
  //     showCell(a, x-1, y);
  //     arrChecked[x-1][y] = 1;
  //     if (a[x-1][y] == 0) {
  //       showEmptyNeighbours(a, x-1, y);
  //     }
  //   }
  //   if (x > 0 && y > 0 && arrChecked[x-1][y-1] == 0) {
  //     showCell(a, x-1, y-1);
  //     arrChecked[x-1][y-1] = 1;
  //     if (a[x-1][y-1] == 0) {
  //       showEmptyNeighbours(a, x-1, y-1);
  //     }
  //   }
  //   if (x > 0 && y < FieldSize - 1 && arrChecked[x-1][y+1] == 0) {
  //     showCell(a, x-1, y+1);
  //     arrChecked[x-1][y] = 1;
  //     if (a[x-1][y+1] == 0) {
  //       showEmptyNeighbours(a, x-1, y+1);
  //     }
  //   }
  //   if (y > 0 && arrChecked[x][y-1] == 0) {
  //     showCell(a, x, y-1);
  //     arrChecked[x][y-1] = 1;
  //     if (a[x][y-1] == 0) {
  //       showEmptyNeighbours(a, x, y-1);
  //     }
  //   }
  //   if (y > 0 && arrChecked[x][y+1] == 0) {
  //     showCell(a, x, y+1);
  //     arrChecked[x][y+1] = 1;
  //     if (a[x][y+1] == 0) {
  //       showEmptyNeighbours(a, x, y+1);
  //     }
  //   }
  //   if (x < FieldSize - 1 && y > 0 && arrChecked[x+1][y-1] == 0) {
  //     showCell(a, x+1, y);
  //     arrChecked[x+1][y] = 1;
  //     if (a[x+1][y] == 0) {
  //       showEmptyNeighbours(a, x+1, y);
  //     }
  //   }
  //   if (x < FieldSize - 1 && arrChecked[x+1][y] == 0) {
  //     showCell(a, x+1, y);
  //     arrChecked[x+1][y] = 1;
  //     if (a[x+1][y] == 0) {
  //       showEmptyNeighbours(a, x+1, y);
  //     }
  //   }
  //   if (x < FieldSize - 1 && y < FieldSize - 1 && arrChecked[x+1][y+1] == 0) {
  //     showCell(a, x+1, y+1);
  //     arrChecked[x+1][y+1] = 1;
  //     if (a[x+1][y+1] == 0) {
  //       showEmptyNeighbours(a, x+1, y+1);
  //     }
  //   }
  //   return;
  // };

  const clickCell = () => {
    if (isFirstClick) {
      arr = renderArray(props.point);
      for (let o = 0; o < FieldSize; o++) {
        arrChecked[o] = [];
        for (let p = 0; p < FieldSize; p++) {
          arrChecked[o][p] = 0;
        }
      }
      isFirstClick = false;
      gameActive = true;
    }

    if (gameActive && cellState == CellNames.closed) {
      const x = Math.floor(props.point / FieldSize);
      const y = props.point % FieldSize;
      showCell(arr, x, y);
    }
  }

  return (
    <button className={styles[cellState]} onClick={clickCell}>
      <span className="visually-hidden">Ячейка поля</span>
    </button>
  )

}

export default Cell;
