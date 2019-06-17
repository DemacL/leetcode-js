/*
 * @lc app=leetcode.cn id=938 lang=javascript
 *
 * [938] 二叉搜索树的范围和
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
    const vals = [];
    /** 遍历节点 */
    function addVal(node, vals) {
        vals.push(node.val);
        if (node.left) {
            addVal(node.left, vals)
        }
        if (node.right) {
            addVal(node.right, vals)
        }
    }
    addVal(root, vals);
    return vals.filter(val => L <= val && val <= R).reduce((x, y) => x + y, 0);
};

