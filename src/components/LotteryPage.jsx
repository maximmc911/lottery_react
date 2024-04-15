import React from "react";
import s from "./style/LotteryPage.module.css";
import Ticket from "./Ticket";
const LotteryPage = () => {
  return (
    <>
      <div className={s.container}>
        <Ticket />
      </div>
    </>
  );
};
export default LotteryPage;
