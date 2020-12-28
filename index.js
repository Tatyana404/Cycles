"use strict";

// Task 1

function numbersInDecreasingOrder() {
  let count = 25;
  while (true) {
    console.log(count--);
    if (count === 0) {
      return count;
    }
  }
}
numbersInDecreasingOrder();

// Task 2

function multiples5() {
  let count = 10;
  while (true) {
    if (count % 5 === 0) {
      console.log(count);
    }
    count++;
    if (count === 51) {
      return count;
    }
  }
}
multiples5();

// Task 3

function sumOfNumbers() {
  let count = 1;
  let summ = 0;
  while (true) {
    summ += count++;
    if (count > 100) {
      return summ;
    }
  }
}
sumOfNumbers();

// Task 4

function solveAnExample() {
  while (true) {
    const userResponse = +prompt("Решите пример: 2 + 2 * 2");
    if (userResponse === 2 + 2 * 2) {
      return true;
    }
  }
}
solveAnExample();
