/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {

  if (!head) {
    return head
  }

  let newHead = head;
  if (head.next) {
    newHead = head.next;
  }// 交换后的头结点应该是第二个节点的指针

  let odd = head;
  let even = odd.next; // 找到奇偶的两个节点同时存在才可交换
  let pre = null; // 除了第一对 后面的交换都需要使用之前的节点将交换后的节点连接起来
  while (odd && even) {
    // 交换操作
    odd.next = even.next;
    even.next = odd;

    if (pre) {
      pre.next = even;
    }
    pre = odd; // 保存偶数项的指针 奇数指针已经交换到偶数位
    // 下一对需要交换的节点
    odd = odd.next;
    even = odd ? odd.next : null;
  }

  return newHead;

};
// @lc code=end

