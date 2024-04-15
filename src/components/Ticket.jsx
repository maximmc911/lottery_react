import React, { useEffect, useRef, useState } from "react";
import s from "./style/Ticket.module.css";
import icon from "../../public/magic-wand.svg";
import BtnLoterry from "./ui/BtnLoterry";
import { Button } from "./ui/button/Button";
import { ResultTicket } from "./ResultTicket";
import { HandleSentResult } from "./functions/sentData";

const Ticket = () => {
  // constants & hooks
  const [fieldSecond, setfieldSecond] = useState(Array(2).fill(null));
  const [fieldFirst, setfieldFirst] = useState(new Array(19).fill(null));
  const [FieldSecondUpdate, setFieldSecondUpdate] = useState(true);
  const [FieldFirstUpdate, setFieldFirstUpdate] = useState(true);
  const [openResultPage, setOpenResultPage] = useState(false);
  useEffect(() => {
    if (fieldFirst[FieldFirstUpdate] == null) {
      let count = 0;
      for (let index = 0; index < fieldFirst.length; index++) {
        if (fieldFirst[index] !== null) {
          count++;
        }
      }
      if (count < 8) {
        fieldFirst[FieldFirstUpdate] = FieldFirstUpdate + 1;
        setFieldFirstUpdate(true);
      }
    } else {
      fieldFirst[FieldFirstUpdate] = null;
      setFieldFirstUpdate(false);
    }
  }, [FieldFirstUpdate]);

  useEffect(() => {
    if (fieldSecond[FieldSecondUpdate] == null) {
      if (
        fieldSecond[FieldSecondUpdate - 1] == null &&
        fieldSecond[FieldSecondUpdate + 1] == null
      ) {
        fieldSecond[FieldSecondUpdate] = FieldSecondUpdate + 1;
        fieldSecond.length = 2;
        setFieldSecondUpdate(true);
      }
    } else {
      fieldSecond[FieldSecondUpdate] = null;
      setFieldSecondUpdate(false);
    }
  }, [FieldSecondUpdate]);

  return (
    <>
      {!openResultPage ? (
        <div className={s.card}>
          <div className={s.card_header}>
            <h1>Билет 1</h1>
            <div className="">
              <img src={icon} alt="" className={s.icon} />
            </div>
          </div>
          <div className={s.main}>
            <h2>
              Поле 1 <span>Отметьте 8 чисел.</span>{" "}
            </h2>
            <div className={s.btn_group}>
              {fieldFirst.map((e, index) => (
                <div
                  className=""
                  key={index}
                  onClick={() => setFieldFirstUpdate(index)}
                >
                  <BtnLoterry number={index + 1} status={e} />
                </div>
              ))}
            </div>
            <h2>
              Поле 2 <span>Отметьте 1 число.</span>{" "}
            </h2>
            <div className={s.btn_group}>
              {fieldSecond.map((e, index) => (
                <div
                  className=""
                  key={index}
                  onClick={() => setFieldSecondUpdate(index)}
                >
                  <BtnLoterry number={index + 1} status={e} />
                </div>
              ))}
            </div>
            <div
              className=""
              style={{
                display: "flex",
                justifyContent: "center",
                margin: `20px`,
              }}
            >
              <div
                className=""
                onClick={() => (
                  HandleSentResult(fieldFirst, fieldSecond),
                  setOpenResultPage(true)
                )}
              >
                <Button content={`Показать результат`} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ResultTicket />
      )}
    </>
  );
};

export default Ticket;
