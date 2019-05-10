/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    const len = nums.length;
    const sum = len * (len + 1) / 2; // n个数的和
    const currSum = nums.reduce((x, y) => x + y); // 当前数组和
    return sum - currSum;
};

