/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续1的个数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let max = 0;
    let currMax = 0;
    for (let i = 0; i < nums.length; i++) {
        currMax = nums[i] ? currMax + 1 : 0
        max = Math.max(max, currMax)
    }
    return max;
};


var findMaxConsecutiveOnes1 = function (nums) {
    return Math.max(...(nums.join('') // 拼接成字符串
        .match(/1+/g) || []). // 连续1分组
        map(x => x.length), 0 // 每组映射成长度数组
    )// 获取数组最大值 
};

