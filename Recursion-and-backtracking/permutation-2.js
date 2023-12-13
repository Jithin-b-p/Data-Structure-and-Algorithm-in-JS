"use strict";

const permuteUnique = function (nums) {
  const result = [];

  const map = new Map();
  for (const val of nums) {
    map.set(val, map.get(val) ? map.get(val) + 1 : 1);
  }
  permuteUniqueHelper(nums, map, result, []);
  result.forEach((ans) => console.log(ans));
};

const permuteUniqueHelper = function (nums, map, result, ans) {
  if (ans.length === nums.length) return result.push([...ans]);

  for (const [key, value] of map) {

    if (value === 0) continue;
    map.set(key, value - 1);
    ans.push(key);
    permuteUniqueHelper(nums, map, result, ans);
    ans.pop();
    map.set(key, value);
  }
};

permuteUnique([2, 1, 1]);
