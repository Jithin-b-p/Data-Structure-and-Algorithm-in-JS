'use strict'

function recursiveBS(nums, key, start, end) {

  //base case for stopping recursion.
  if (start > end) {
    return false;
  }

  //finding the middle value.
  let mid = start + Math.floor((end - start) / 2);

  // conditions for finding the required key.
  if (nums[mid] === key) return true;
  if (nums[mid] < key) return recursiveBS(nums, key, start + 1, end);
  if (nums[mid] > key) return recursiveBS(nums, key, start, end - 1);
  
}

function binarySearch(nums, key) {
  let start = 0, end = nums.length - 1;
  return recursiveBS(nums, key, start, end);
}

const numbers = [4, 63, 33, 15, 6, 10, 20];
numbers.sort((a, b) => a - b);

console.log(binarySearch(numbers, 4));
console.log(binarySearch(numbers, 10));
