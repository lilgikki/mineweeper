import React from "react";
import { Counter } from "../../components";
import { Play } from "../../components";
import styles from './Info.module.scss'

const Info:React.FC = () => {

  return (
    <div className={styles.info}>
      <Counter/>
      <Play/>
      <Counter/>
    </div>
  )

}

export default Info;
