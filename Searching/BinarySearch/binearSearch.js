"use strict";

function binarySearch(numbers, key) {
  //initialising the starting and ending search positions.
  let start = 0,
    end = numbers.length - 1;

  while (start <= end) {
    //finding the mid of the search space.
    const mid = start + (end - start) / 2;

    //if we found the mid as the key then return found.
    if (numbers[mid] === key) {
      return "found";
    // if the mid value is less than key the reduce the search space to right.
    } else if (numbers[mid] < key) {
      start = mid + 1;
    // if the mid value is greater than key then reduce the search space to left. 
    } else {
      end = mid - 1;
    }
  }
  // If we didnt find the element we will be out of the loop.
  return "not found";
}

const numbers = [4, 63, 33, 15, 6, 10, 20];

// binary search can be applied on sorted data.
numbers.sort((a, b) => a - b);

console.log(binarySearch(numbers, 15));
console.log(binarySearch(numbers, 56));
