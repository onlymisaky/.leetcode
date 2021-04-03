/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let n = parseInt(s);
  if (`${n}` === `NaN`) return 0;
  if (n < -2147483648) {
    return -2147483648;
  }
  if (n > 2147483647) {
    return 2147483647;
  }
  return n; 
  return Math.max(Math.min(n, 2147483647), -2147483648);
};
// @lc code=end

