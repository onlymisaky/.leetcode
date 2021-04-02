/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

  const map = {};

  for (var i = 0; i < nums.length; i++) {
    let m = nums[i];
    let n = target - m;

    // 数组查找
    // let j = nums.indexOf(n);
    // if (j > -1 && j !== i) {
    //   return [i, j];
    // }

    // map查找
    if (map[n] !== undefined) {
      return [map[n], i];
    }
    map[m] = i;
  }
  return [];
};
// @lc code=end
