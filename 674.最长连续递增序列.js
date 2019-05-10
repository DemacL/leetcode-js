/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    // 连续=>DP
    let max = 0;
    let currMax = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            currMax++;
        } else {
            if (nums[i] > nums[i - 1]) {
                currMax++;
            } else {
                currMax = 1;
            }
        }
        max = Math.max(max, currMax);
    }
    return max;
};

