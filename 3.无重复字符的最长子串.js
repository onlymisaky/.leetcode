/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let current = [];
  let prev = [];

  // let currentL = 0;
  // let currentR = 0;
  // let prevL = 0;
  // let prevR = 0;

  for (let i = 0; i < s.length; i++) {
    let v = s[i];
    let index = current.indexOf(v);
    if (index === -1) {
      current.push(v);
      // currentR = i;
    } else {
      if (current.length > prev.length) {
        prev = current;
        // prevL = currentL;
        // prevR = currentR;
      }
      current = current.slice(index + 1);
      current.push(v);
      // currentL = currentL + index + 1;
      // currentR = s[i + 1] === undefined
      //   ? i
      //   : i + 1;
    }
  }
  const n = Math.max(current.length, prev.length);
  return n
};
// @lc code=end

lengthOfLongestSubstring("abcabcbb");
lengthOfLongestSubstring("aab");
lengthOfLongestSubstring("dvdf");
lengthOfLongestSubstring("bbtablud");
lengthOfLongestSubstring("aabaab!bb");

// var lengthOfLongestSubstring = function (s) {
//   let current = '';
//   let prev = '';
//   for (let i = 0; i < s.length; i++) {
//     let v = s[i];
//     let index = current.indexOf(v);
//     if (index === -1) {
//       current = current + v
//     } else {
//       let temp = prev;
//       prev = current;
//       // 连续重复
//       if (index === current.length) {
//         prev = current;
//         current = v;
//       } else {
//         // var tem2 = prev.substring(index + 1);
//         // index = temp.indexOf(v);
//         // if (index === -1) {
//         //   current = tem2 + v;
//         // } else {
//         //   current = temp;
//         // }
//         index = temp.indexOf(v);
//         if (index === -1) {
//           current = temp + v;
//         } else {
//           current = temp;
//         }
//       }
//     }

//   }
//   console.log(Math.max(current.length, prev.length));
//   return Math.max(current.length, prev.length);
// };

