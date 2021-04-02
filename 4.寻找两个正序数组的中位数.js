/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  let len = len1 + len2;
  let medianLen = 0;
  let arr = []

  if (len === 0) {
    return 0;
  }
  if (len1 === 0 || len2 === 0) {
    medianLen = Math.floor(len / 2);
    arr = len1 === 0 ? nums2 : nums1;
    if (len % 2 === 0) {
      return (arr[medianLen] + arr[medianLen - 1 > -1 ? medianLen - 1 : 0]) / 2;
    }
    return arr[medianLen]
  }

  let i1 = 0;
  let i2 = 0;
  let n1;
  let n2;
  medianLen = Math.floor(len / 2);

  while (i1 + i2 <= medianLen) {
    n1 = nums1[i1];
    n2 = nums2[i2];

    if (n1 === undefined) {
      arr.push(n2);
      i2++;
      continue;
    }

    if (n2 === undefined) {
      arr.push(n1);
      i1++;
      continue;
    }
    
    if (n1 > n2) {
      arr.push(n2);
      i2++;
      continue;
    }

    arr.push(n1);
    i1++;
  }

  if (len % 2 === 0) {
    return (arr[medianLen] + arr[medianLen - 1]) / 2;
  }

  return arr[medianLen];
};
// @lc code=end


// var findMedianSortedArrays = function (nums1, nums2) {
//   const len = nums1.length + nums2.length;
//   const arr = [...nums1, ...nums2];
//   if (len === 0) {
//     return 0;
//   }
//   if (len === 1) {
//     return arr[0];
//   }

//   arr.sort((a, b) => a - b);

//   let n = len / 2;

//   if (len % 2 === 0) {
//     return (arr[n] + arr[n - 1]) / 2
//   }

//   return arr[Math.floor(n)]
// };
