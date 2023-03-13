import React from "react";
import { Cell } from "../../components";
import styles from './Field.module.scss'

const Field:React.FC = () => {

  return (
    <div className={styles.field}>
      <Cell/>
      <Cell/>
      <Cell/>
      <Cell/>
    </div>
  )

}

export default Field;
