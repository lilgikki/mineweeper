import React from "react";
import { Cell } from "../../components";
import './Field.css'

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
