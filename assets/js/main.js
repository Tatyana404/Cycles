"use strict";

// 1) Вывод чисел от 25 до 0 (порядок уменьшения)

// 2) Вывод чисел от 10 до 50, которые кратны 5

// 3) Найти сумму чисел в пределах от 1 до 100

// 4) Предлагать пользователю решить пример (2 + 2 * 2) до тех пор, пока он его не решит

// Task 1

(() => {
  let count = 26;

  while (true) {
    console.log(--count);

    if (count === 0) {
      return;
    }
  }
})();

// Task 2

(() => {
  let count = 10;

  while (true) {
    if (count % 5 === 0) {
      console.log(count);
    }

    count++;

    if (count === 51) {
      return;
    }
  }
})();

// Task 3

(() => {
  let count = 0;
  let total = 0;

  while (true) {
    count++;
    total += count;

    if (count === 100) {
      return console.log(total);
    }
  }
})();

// Task 4

(() => {
  while (true) {
    const response = parseFloat(prompt("Решите пример: 2 + 2 * 2"));

    if (response === 2 + 2 * 2) {
      return;
    }
  }
})();
