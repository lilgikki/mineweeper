import React, { useState } from "react";
import styles from './Cell.module.scss'
// import { renderArray, FieldSize } from "helpers/array";
import { CellNames } from "helpers/cell";

interface IProps {
  point: number,
  clickCell: any,
}

const Cell = (props: IProps) => {
  const [cellState, setCellState] = useState(CellNames.closed);

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

  return (
    <button className={styles[cellState]} onClick={() => {props.clickCell(props.point, cellState, setCellState)}}>
      <span className="visually-hidden">Ячейка поля</span>
    </button>
  )

}

export default Cell;
