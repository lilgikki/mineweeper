import React from "react";
import { Minesweeper } from "../../containers";

const Home:React.FC = () => {
  return (
    <>
      <h1 className="visually-hidden">Главная страница</h1>
      <Minesweeper/>
    </>
  )
}

export default Home;
