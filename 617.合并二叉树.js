/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {

    if (!t1) {// 空树
        return t2;
    }

    function mergeNode(node1, node2) {
        if (!node1 && !node2) {
            return null;
        }

        if (node1 && node2) { // 相同位置都有值，合并到基准树
            node1.val += node2.val;
        } else if (node2) { // 基准树上没有值，被合并的树有值，生成一个节点合并到基准树
            node1 = new TreeNode(node2.val)
        }
        node1.left = mergeNode(node1 ? node1.left : null, node2 ? node2.left : null);
        node1.right = mergeNode(node1 ? node1.right : null, node2 ? node2.right : null);
        return node1;
    }

    mergeNode(t1, t2)
    return t1;
};

