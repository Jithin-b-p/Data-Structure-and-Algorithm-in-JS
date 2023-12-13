// fibonacci num at nth position.(1-index).

// const findFibonacci = function (n) {
//   if (n === 1 || n === 2) {
//     return n - 1;
//   }

//   let left = findFibonacci(n - 1);
//   let right = findFibonacci(n - 2);

//   return left + right;
// };

const findFibonacci = function (n) {
  if (n === 1 || n === 2) {
    return n - 1;
  }

  return findFibonacci(n - 1) + findFibonacci(n - 2);
};

console.log(findFibonacci(10));
