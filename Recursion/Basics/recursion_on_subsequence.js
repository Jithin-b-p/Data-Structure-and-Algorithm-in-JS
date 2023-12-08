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