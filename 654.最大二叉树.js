/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
    function creatChild(arrs) {
        const max = Math.max(...arrs);// 当前数组部分的最大数 
        const node = new TreeNode(max);
        const maxIndex = arrs.indexOf(max);
        const left = arrs.slice(0, maxIndex);
        if (left.length > 0) {
            node.left = creatChild(left);
        }
        const right = arrs.slice(maxIndex + 1);
        if (right.length > 0) {
            node.right = creatChild(right);
        }
        return node;
    }

    return creatChild(nums);
};

