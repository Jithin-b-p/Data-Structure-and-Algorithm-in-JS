"use strict";

/*
const printSubsequence = function (arr, indx, subSeq) {
  // when the indx equals with array length we can print the array and return.
  if (indx === arr.length) {
    console.log(subSeq);
    return;
  }

  // every element for the corresponding index have two option either get picked or not.
  subSeq.push(arr[indx]);
  // recursively call with the element picked.
  printSubsequence(arr, indx + 1, subSeq);
  subSeq.pop();
  // recursively call with the element not picked.
  printSubsequence(arr, indx + 1, subSeq);
};

// const arr = [3, 1, 2];

// printSubsequence(arr, 0, []);

// output
// [3, 1, 2]
// [3, 1]
// [3, 2]
// [3]
// [1, 2]
// [1]
// [2]
// []
*/

const printSubsequence = function (arr, indx, subSeq) {
  // when the indx equals with array length we can print the array and return.
  if (indx === arr.length) {
    console.log(subSeq);
    return;
  }

  // recursively call with the element not picked.
  printSubsequence(arr, indx + 1, subSeq);
  // every element for the corresponding index have two option either get picked or not.
  subSeq.push(arr[indx]);
  // recursively call with the element picked.
  printSubsequence(arr, indx + 1, subSeq);
  subSeq.pop();
};

const arr = [3, 1, 2];

printSubsequence(arr, 0, []);

// output
// []
// [2]
// [1]
// [1, 2]
// [3]
// [3, 2]
// [3, 1]
// [3, 1, 2]

/*
output can be differed by choose whether to pick element 1st or not to pick 
element 1st
*/

// *********************************
// print subsequence whose sum is k
// *********************************

const printSubSeqOfSumK = function (array, ans, indx, sum, k) {
  // when we get each subsequnce,
  // we check if the sum is equal to k.
  if (indx === arr.length) {
    if (sum === k) {
      console.log(ans);
    }
    return;
  }

  // Picking the element.
  ans.push(array[indx]);
  printSubSeqOfSumK(array, ans, indx + 1, sum + array[indx], k);
  // not picking the element.
  ans.pop();
  printSubSeqOfSumK(array, ans, indx + 1, sum, k);
};

const array = [1, 2, 1];
const k = 2;

printSubSeqOfSumK(array, [], 0, 0, k);

// *************************************
// print any subsequence whose sum is k
// *************************************

const printAnySubSeqOfSumK = function (array, ans, indx, sum, k) {
  if (indx === array.length) {
    if (sum === k) {
      console.log(ans);
      return true;
    }
    return false;
  }

  ans.push(array[indx]);
  if (printAnySubSeqOfSumK(array, ans, indx + 1, sum + array[indx], k)) {
    return true;
  }
  ans.pop();
  if (printAnySubSeqOfSumK(array, ans, indx + 1, sum, k)) {
    return true;
  }

  return false;
};

printAnySubSeqOfSumK([1, 2, 1], [], 0, 0, 2);

// *******************************************
// get the count of subsequence whose sum is k
// *******************************************

const countSubSeqSumOfK = function (array, indx, sum, k) {
  if (indx === array.length) {
    if (sum === k) {
      return 1;
    }
    return 0;
  }

  let left = countSubSeqSumOfK(array, indx + 1, sum + array[indx], k);
  let right = countSubSeqSumOfK(array, indx + 1, sum, k);

  return left + right;
};

console.log(countSubSeqSumOfK([1, 2, 1], 0, 0, 2));
