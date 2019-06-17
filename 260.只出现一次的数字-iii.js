/*
 * @lc app=leetcode.cn id=260 lang=javascript
 *
 * [260] 只出现一次的数字 III
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        set.has(num) ? set.delete(num) : set.add(num)
    }
    return [...set]
};

