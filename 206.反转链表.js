/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function (head) {
  if(head === null){
    return head
  }
  let prev = head;
  let current = prev.next;
  head.next = null;
  while (current) {
    let next = current.next;// 保存要被反转的节点的下一个节点，以免修改后丢失
    current.next = prev;// 反转节点
    prev = current;
    current = next;
  }
  return prev
};
// @lc code=end

