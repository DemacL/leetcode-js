/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {

  // 存放到[i,j]路径的和
  const res = Array.from({ length: triangle.length }, _ => []);

  res[0][0] = triangle[0][0]
  for (let i = 1; i < triangle.length; i++) {
    const row = triangle[i];
    for (let j = 0; j < row.length; j++) {
      if (j === 0) {
        res[i][0] = res[i - 1][0] + triangle[i][0]
      } else if (j === row.length - 1) {
        res[i][j] = res[i - 1][j - 1] + triangle[i][j]
      } else {
        res[i][j] = Math.min(res[i - 1][j - 1], res[i - 1][j]) + triangle[i][j]
      }
    }
  }


  return Math.min(...res.pop()) // 取最后一层的最小值 即最小路径和
};
// @lc code=end

