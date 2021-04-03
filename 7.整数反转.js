/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x === 0) {
    return 0
  }
  let multiplier = x > 0 ? 1 : -1;
  let str = `${x}`.replace(/(0*$)/g, '');
  let s = '';
  let min = multiplier === 1 ? 0 : 1;
  for (let i = str.length - 1; i >= min; i--) {
    s += str[i];
  }
  s = s * multiplier;
  if (s > 2147483647 || s < -2147483648) {
    return 0;
  }
  return s;
};
// @lc code=end


