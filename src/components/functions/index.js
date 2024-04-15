// Генератор случайных чисел в определенном интервале, где min - вкючается в интервал, а max - не включается

export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

//Генератор массива со случайными числами

export const getFillingRandomFielsd = (arr, iter) => {
  let counter = [];
  for (let index = 1; index < iter + 1; index++) {
    let randomNumber = getRandomNumber(0, arr.length);
    if (!counter.includes(randomNumber)) {
      counter.push(randomNumber);
    } else iter++;
  }
  return counter;
};
