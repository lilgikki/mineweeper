import React from "react";
import { Cell } from "../../components";
import styles from './Field.module.scss'
import { FieldSize, renderArray } from "helpers/array";

const Field:React.FC = () => {
  const cells:number[] = [];
  for (let i = 0; i < FieldSize*FieldSize; i++) {
    cells[i] = i;
  }

  return (

    <div className={styles.field}>
      { cells.map((item, index) => <Cell key={index} point={index}/> ) }
    </div>

  )

}

export default Field;
