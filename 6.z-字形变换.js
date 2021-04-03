/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;

  const arr = [];
  let row = 0;
  let isIncrease = true;

  for (let i = 0; i < s.length; i++) {
    if (!arr[row]) {
      arr[row] = '';
    }
    arr[row] += s[i];
    if (isIncrease) {
      if (row < numRows - 1) {
        row++;
      } else {
        isIncrease = false;
        row--;
      }
    } else {
      if (row > 0) {
        row--;
      } else {
        isIncrease = true;
        row++;
      }
    }
  }

  return arr.join('');
};
// @lc code=end
