"use strict";

const permute = function (nums) {
  const result = [];
  // permuteHelper(nums, new Set(), result);
  permuteHelper(nums, 0, result);
  result.forEach((ans) => console.log(ans));
};

// const permuteHelper = function (nums, set, result) {
//   if (set.size === nums.length) {
//     return result.push([...set]);
//   }

//   for (let i = 0; i < nums.length; i++) {
//     if (set.has(nums[i])) continue;
//     set.add(nums[i]);
//     permuteHelper(nums, set, result);
//     set.delete(nums[i]);
//   }
// };

const permuteHelper = function (nums, indx, result) {
  if (nums.length - 1 === indx) {
    result.push([...nums]);
  }

  for (let i = indx; i < nums.length; i++) {
    [nums[i], nums[indx]] = [nums[indx], nums[i]];
    permuteHelper(nums, indx + 1, result);
    [nums[i], nums[indx]] = [nums[indx], nums[i]];
  }
};

const arr = [1, 2, 3];
permute(arr);
