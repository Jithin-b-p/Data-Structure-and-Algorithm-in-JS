"use strict";

// printing name n times;
const printName = function (n) {
  if (n === 0) {
    return;
  }
  n--;
  console.log("jithin");
  printName(n);
};

printName(5);

// printing linearly from 1 to n
const printNumbers = function (n, count) {
  if (count > n) {
    return;
  }

  console.log(count);
  count++;
  printNumbers(n, count);
};

printNumbers(5, 1);

// printing linearly from 1 to n. Here we are placing the print statement after the function call
// this way we can control the output/
const printNumbers1 = function (n) {
  if (n < 1) {
    return;
  }

  printNumbers1(n - 1);
  console.log(n);
};

printNumbers1(5, 5);

// print n numbers in reverse.
const printNumbersReverse = function (n) {
  if (n < 1) {
    return;
  }
  console.log(n);
  printNumbersReverse(n - 1);
};

printNumbersReverse(5);

// placing the print statement after the function call.
const printNumbersReverse1 = function (n, count = 1) {
  if (count > n) {
    return;
  }
  printNumbersReverse1(n, count + 1);
  console.log(count);
};

printNumbersReverse1(5);

// *********************************
// finding the sum of n numbers.
// ***********************************

// parameterized way.
const sumOfNNumbers = function (n, count = 1, sum = 0) {
  if (count > n) {
    console.log(sum);
    return;
  }

  sumOfNNumbers(n, count + 1, sum + count);
};
sumOfNNumbers(5);

// functional way.
const sumOfNNumbers1 = function (n) {
  if (n === 0) {
    return 0;
  }

  return n + sumOfNNumbers1(n - 1);
};

console.log(sumOfNNumbers1(5));

// factorial
const factorialOfN = function (n) {
  if (n <= 1) {
    return 1;
  }

  return n * factorialOfN(n - 1);
};

console.log(factorialOfN(5));

// ****************
// Reversing an array.
// *****************

// const reverseArray = function(start, end, arr) {
//   if(start === end) {
//     return;
//   }

//   // const temp = arr[start];
//   // arr[start] = arr[end];
//   // arr[end] = temp;

//   // swapping using destructuring.
//   [arr[start], arr[end]] = [arr[end], arr[start]];

//   reverseArray(start + 1, end - 1, arr);
// }
// const arr = [3, 9, 1, 4, 5];
// console.log(arr);
// reverseArray(0, arr.length - 1, arr);
// console.log(arr);

// optimized function with only one pointer.
const reverseArray = function (start, arr) {
  if (start >= Math.floor(arr.length / 2)) {
    return;
  }

  [arr[start], arr[arr.length - 1 - start]] = [
    arr[arr.length - 1 - start],
    arr[start],
  ];
  reverseArray(start + 1, arr);
};

const arr = [3, 9, 1, 4, 5];
console.log(arr);
reverseArray(0, arr);
console.log(arr);

// ***************************
// string is palindrome or not
// ***************************

// const strPalindromeOrNot = function (start, end, str) {
//   if (start === end) {
//     return true;
//   }

//   if (str.charAt(start) !== str.charAt(end)) {
//     return false;
//   }

//   return strPalindromeOrNot(start + 1, end - 1, str);
// };

// using only single pointer.
const strPalindromeOrNot = function (start, str) {
  if (start >= str.length / 2) {
    return true;
  }

  if (str.charAt(start) !== str.charAt(str.length - 1 - start)) {
    return false;
  }

  return strPalindromeOrNot(start + 1, str);
};

const str = "malayalam";
console.log(strPalindromeOrNot(0, str));

