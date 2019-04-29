/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let jw = false;// 是否有进位标记
    let head = null;// 结果链表头指针
    let current = null;// 结果链表的当前指针
    let current1 = l1;//链表1当前指针
    let current2 = l2;//链表2当前指针
    while (current1 && current2) {
        const added = current1.val + current2.val + (jw ? 1 : 0);// 当前位两个数字相加的和
        jw = added >= 10;
        newNode = new ListNode();
        newNode.val = added % 10;
        if (head === null) {
            head = newNode;
        } else {
            current.next = newNode;
        }
        current = newNode;
        current1 = current1.next;
        current2 = current2.next;
    }
    while (current1) {// 链表1特别长
        added = current1.val + (jw ? 1 : 0);
        jw = added >= 10;
        newNode = new ListNode();
        newNode.val = added % 10;
        current.next = newNode;
        current = newNode;
        current1 = current1.next;
    }
    while (current2) {// 或者链表2特别长
        added = current2.val + (jw ? 1 : 0);
        jw = added >= 10;
        newNode = new ListNode();
        newNode.val = added % 10;
        current.next = newNode;
        current = newNode;
        current2 = current2.next;
    }
    if (jw) {
        newNode = new ListNode();
        newNode.val = 1;
        current.next = newNode;
    }
    return head;
};

