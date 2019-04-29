/*
 * @lc app=leetcode.cn id=561 lang=javascript
 *
 * [561] 数组拆分 I
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    return nums
        .sort((x, y) => x - y).filter((_, index) => index % 2 === 0)
        .reduce((sum, x) => sum + x, 0)
};

