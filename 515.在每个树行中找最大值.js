/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
 * @return {number[]}
 */
var largestValues = function (root) {
  if (!root) {
    return []
  }

  let allLevel = []

  //  根据上一层获取下一次的节点
  const getSubLevelByParLevel = (parLevel, subLevel, allLevel) => {

    if (parLevel.length > 0) {
      for (let i = 0; i < parLevel.length; i++) {

        const node = parLevel[i];
        if (node.left) {
          subLevel.push(node.left)
        }
        if (node.right) {
          subLevel.push(node.right)
        }

      }

      allLevel.push(parLevel)// 将当前一层的节点加入数组
      getSubLevelByParLevel(subLevel, [], allLevel)// 继续获取下一层
    }

  }

  getSubLevelByParLevel([root], [], allLevel);

  const maxs = allLevel.map(nodes => Math.max(...nodes.map(node => node.val)))
  return maxs
};
// @lc code=end

