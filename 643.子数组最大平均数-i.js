/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let maxSum = nums.slice(0, k).reduce((x, y) => x + y, 0); // 整个最大和  初始化为前k个数最大和
    let currMaxSum = maxSum; // 以当前索引为结束的最大和
    for (let i = 0; i < nums.length - k; i++) {
        currMaxSum = currMaxSum + nums[i + k] - nums[i];// 减去第一个加上最后一个
        maxSum = Math.max(maxSum, currMaxSum);
    }
    return maxSum / k
};

