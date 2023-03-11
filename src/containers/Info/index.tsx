import React from "react";
import { Counter } from "../../components";
import { Play } from "../../components";
import './Info.css'

const Info:React.FC = () => {

  return (
    <div className="minesweeper__info">
      <Counter/>
      <Play/>
      <Counter/>
    </div>
  )

}

export default Info;