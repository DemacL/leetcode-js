/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    let count = 0;
    // 判断一个方格的左上方有没有岛屿
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                count += 4;
                if (grid[i - 1] && grid[i - 1][j] === 1) {//去掉左边重复计算部分
                    count -= 2
                }
                if (grid[i] && grid[i][j - 1] === 1) {// 去掉上边重复计算部分
                    count -= 2;
                }
            }
        }
    }
    return count;
};

