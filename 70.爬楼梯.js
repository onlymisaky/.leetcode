/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let prevPrev = 0;
  let prev = 0;
  let current = 1;

  for (var i = 0; i < n; i++) {
    prevPrev = prev;
    prev = current;
    current = prevPrev + prev;
  }

  return current;

  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }

  return climbStairs(n - 1) + climbStairs(n - 2);
};
// @lc code=end
