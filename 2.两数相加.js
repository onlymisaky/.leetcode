/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let sum = 0;
  let val = sum;
  const node = new ListNode;
  let head = node;
  while (l1 || l2) {
    if (l1) {
      sum = l1.val + sum;
      l1 = l1.next;
    }
    if (l2) {
      sum = l2.val + sum;
      l2 = l2.next;
    }

    val = sum;
    if (sum >= 10) {
      val = val - 10;
      sum = 1;
    } else {
      sum = 0
    }

    head.next = new ListNode(val);
    head = head.next;
  }

  if (sum === 1) {
    head.next = new ListNode(1);
    head = head.next;
  }


  return node.next;
};
// @lc code=end


// function ListNode(val, next) {
//   this.val = (val === undefined ? 0 : val)
//   this.next = (next === undefined ? null : next)
// }

// var node1 = new ListNode;
// var head1 = node1;
// [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
//   .forEach((item) => {
//     head1.next = new ListNode(item);
//     head1 = head1.next;
//   })

// var arr2 = [5, 6, 4];
// var node2 = new ListNode
// var head2 = node2;
// [5, 6, 4]
//   .forEach((item) => {
//     head2.next = new ListNode(item);
//     head2 = head2.next;
//   })

// addTwoNumbers(node1.next, node2.next)

/**
 * 1. 遍历链表，拼接字符串 m = list.val + m
 * 2. 求和 sum = m + n
 * 3. 倒序遍历 sum ，生成新链表
 * 问题: 超出数字范围，遍历两次
 */
