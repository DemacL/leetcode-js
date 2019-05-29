/*
 * @lc app=leetcode.cn id=766 lang=javascript
 *
 * [766] 托普利茨矩阵
 */
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
    for (let i = 1; i < matrix.length; i++) {
        if (matrix[i - 1].slice(0, -1).join('_') !== matrix[i].slice(1).join('_')) {
            return false;
        }
    }
    return true;
};

