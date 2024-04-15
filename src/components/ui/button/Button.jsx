import React from "react";
import s from "./button.module.css";
export const Button = ({ content }) => {
  return (
    <>
      <div className={s.button}>
        <p>{content}</p>
      </div>
    </>
  );
};
