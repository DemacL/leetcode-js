/*
 * @lc app=leetcode.cn id=1038 lang=javascript
 *
 * [1038] 从二叉搜索树到更大和树
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
 * @return {TreeNode}
 */
var bstToGst = function (root) {

    const arr = [];
    // 中序遍历 即顺序数组
    function addItem(node) {
        if (node.left) {
            addItem(node.left)
        }
        arr.push(node.val);
        if (node.right) {
            addItem(node.right)
        }
    }
    addItem(root);

    /** 递归更新值 */
    function updateValue(node) {
        if (node.left) {
            updateValue(node.left)
        }
        node.val = arr.filter(item => item >= node.val).reduce((x, y) => x + y, 0);
        if (node.right) {
            updateValue(node.right)
        }
    }

    updateValue(root)

    return root;
};

