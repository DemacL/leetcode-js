/*
 * @lc app=leetcode.cn id=1051 lang=javascript
 *
 * [1051] 高度检查器
 */
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    let sum = 0;
    const sortHeights = [...heights].sort((x, y) => x - y);
    for (let i = 0; i < sortHeights.length; i++) {
        if (sortHeights[i] !== heights[i]) {
            sum++
        }
    }
    return sum;
};

