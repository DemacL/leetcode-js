/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let currentmax = Number.MIN_SAFE_INTEGER; // 以当前第i个元素结尾的最大子序和
    let max = Number.MIN_SAFE_INTEGER; // 整个序列最大子序和
    for (let i = 0; i < nums.length; i++) {
        currentmax = Math.max(nums[i], nums[i] + currentmax);
        max = Math.max(currentmax, max);
    }
    return max;
};

