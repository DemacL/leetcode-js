/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    nums.sort((x, y) => y - x)
    return Math.max(nums[0] * nums[1] * nums[2], nums[0] * nums[nums.length - 1] * nums[nums.length - 2]);
};

