import React from "react";
import styles from './Play.module.scss'

const Play:React.FC = () => {

  const buttonStyles = styles.play + ' ' + styles.start;

  return (
    <button className={buttonStyles}>
      <span className="visually-hidden">Начать игру</span>
    </button>
  )

}

export default Play;
