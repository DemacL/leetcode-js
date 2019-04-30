/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let current = head;// 当前节点
    let pre = head;// 前一个指针
    while (current) {
        if (current.val === val) {
            if (current === head) {
                head = current.next;//删除头节点
                pre = head;// 前一个指针更新
            } else {
                pre.next = current.next;// 删除中间节点
            }
        } else {
            pre = current;// 前一个指针后移
        }
        current = current.next;// 当前指针后移
    }
    return head;
};

