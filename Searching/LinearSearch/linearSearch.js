"use strict";

function linearSearch(numbers, key) {
  // linearly searching for element one by one from the start of the array.
  // This will keep on to the end if we didnt find the key we required.
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === key) {
      return "Found";
    }
  }
  return "Not found";
}

const numbers = [4, 63, 33, 15, 6, 10, 20];

console.log(linearSearch(numbers, 15));
console.log(linearSearch(numbers, 56));
