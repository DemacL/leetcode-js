/*
 * @lc app=leetcode.cn id=566 lang=javascript
 *
 * [566] 重塑矩阵
 */
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
    // const allNums = nums.flat();
    const allNums = [];

    for (let i = 0; i < nums.length; i++) {
        allNums.push(...nums[i]);
    }

    if (allNums.length !== r * c) {
        return nums;
    }
    let newNums = [];
    while (r > 0) {
        newNums.push(allNums.splice(0, c));
        r--;
    }
    return newNums;
};

