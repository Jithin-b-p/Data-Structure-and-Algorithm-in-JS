"use strict";


// const combinationSum = function (candidates, target) {
//   const result = [];

//   combinationHelper(candidates, 0, [], target, result);

//   result.forEach((ans) => console.log(ans));
// };

// const combinationHelper = function (candidates, indx, ans, target, result) {
//   if (target < 0) {
//     return;
//   }

//   if (target === 0) {
//     result.push([...ans]);
//     return;
//   }

//   for (let i = indx; i < candidates.length; i++) {
//     ans.push(candidates[i]);
//     combinationHelper(candidates, i, ans, target - candidates[i], result);
//     ans.pop();
//   }
// };

// const candidates = [2, 3, 6, 7];

// combinationSum(candidates, 7);



// ****************************
// pick and not picking number

const combinationSum = function (candidates, target) {
  const result = [];
  combinationSumHelper(candidates, 0, [], target, result);
  result.forEach((ans) => console.log(ans));
};

const combinationSumHelper = function (candidates, indx, ans, target, result) {
  if (indx >= candidates.length || target < 0) return;
  if (target === 0) {
    result.push([...ans]);
    return;
  }

  ans.push(candidates[indx]);
  combinationSumHelper(
    candidates,
    indx,
    ans,
    target - candidates[indx],
    result
  );
  ans.pop();
  combinationSumHelper(candidates, indx + 1, ans, target, result);
};

const candidates = [2, 3, 6, 7];
combinationSum(candidates, 7);
