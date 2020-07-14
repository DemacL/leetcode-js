/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {

  // 递归获取某个节点子节点并放入路径中，
  // 如果是子节点则结束递归，并将该路径放入路径结果中
  const getPath = (array, node) => {

    if (node) {
      array.push(node.val)
      if (!node.left && !node.right) {  // 到达叶子节点
        res.push(array)
      } else { 
        getPath([...array], node.left)// 路径分叉，需要用两个全新的数组来保存两份不同的路径
        getPath([...array], node.right)
      }
    }
  }


  const res = []
  getPath([], root);
  return res.map(path => path.join('->'))
};
// @lc code=end

