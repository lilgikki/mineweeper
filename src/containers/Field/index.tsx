import React from "react";
import { Cell } from "../../components";
import './Field.module.scss'

const Field:React.FC = () => {

  return (
    <div className="minesweeper__field field">
      <Cell/>
      <Cell/>
      <Cell/>
      <Cell/>
    </div>
  )

}

export default Field;
