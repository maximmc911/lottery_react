import axios from "axios";
import { getFillingRandomFielsd, getRandomNumber } from ".";

// constants

export let result = ``;
const URL_SERVER = `http://localhost:3800/lottery_result`;
const postData = {
  selectedNumber: {
    firstField: [],
    secondField: [],
  },
};
let COUNT_ERROR_SERVER = 0;

// functions

export const HandleSentResult = (fieldFirst, fieldSecond) => {
  const arr = [];
  let count = 0;
  arr.push(...getFillingRandomFielsd(fieldFirst, 8));

  for (let index = 0; index < fieldFirst.length; index++) {
    if (fieldFirst[index] !== null) {
      postData.selectedNumber.firstField.push(fieldFirst[index]);
    }
  }
  for (let index = 0; index < fieldSecond.length; index++) {
    if (fieldSecond[index] !== null) {
      postData.selectedNumber.secondField.push(fieldSecond[index]);
    }
  }
  for (let index = 0; index < arr.length; index++) {
    if (fieldFirst.includes(arr[index])) {
      count++;
    }
  }
  let number = getRandomNumber(1, 3);
  if (fieldSecond.includes(number)) {
    count++;
  }
  if (count < 4) {
    postData.isTicketWon = false;
    result = `К сожалению, вы проиграли :( `;
  } else {
    postData.isTicketWon = true;
    result = `Ого, вы выиграли! Поздравляем!`;
  }
  SentMessageServer();
};

// Ф-ция для повторной отправки запроса в случае неудачного первого запроса

const updatePostServer = () => {
  COUNT_ERROR_SERVER += 1;
  console.log(postData);
  if (COUNT_ERROR_SERVER < 3) {
    setTimeout(() => {
      SentMessageServer();
    }, 2000);
  } else {
    alert(`Возникла внутренняя ошибка`);
  }
};

// Ф-ция для отправки введенных данных на сервер

const SentMessageServer = async () => {
  try {
    await axios.post(URL_SERVER, postData);
    alert(`Запрос успешно отправлен`);
    console.log(`Запрос успешно отправлен`);
    COUNT_ERROR_SERVER = 0;
  } catch (error) {
    console.log(error);
    updatePostServer();
  }
};
