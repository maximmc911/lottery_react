import React, { useEffect, useState } from "react";
import s from "../style/Ticket.module.css";

const BtnLoterry = ({ status, number }) => {
  return (
    <>
      <div className={status !== null ? s.btn_active : s.btn}>
        <p>{number}</p>
      </div>
    </>
  );
};

export default BtnLoterry;
