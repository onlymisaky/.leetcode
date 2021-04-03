/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  if (x < 10) {
    return true;
  }
  let str = `${x}`;
  let len = str.length;
  let mid = len / 2;
  let left;
  let right;
  if (len % 2 === 0) {
    left = mid - 1;
    right = mid;
  } else {
    left = Math.floor(mid) - 1;
    right = Math.ceil(mid);
  }
  while (left > 0 && right < len - 1 && str[left] === str[right]) {
    left--;
    right++;
  }
  return left === 0 && str[left] === str[right]
};
// @lc code=end
 
