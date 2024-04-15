import React from "react";
import s from "./style/Ticket.module.css";
import { result } from "./functions/sentData";
export const ResultTicket = () => {
  return (
    <>
      <div className={s.card}>
        <div className={s.card_header}>
          <h1>Билет 1</h1>
        </div>
        <div className={s.main}>
          <span>{result}</span>
        </div>
      </div>
    </>
  );
};
