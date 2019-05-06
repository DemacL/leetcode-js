/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    const res = Array.from({ length: nums.length }).map((_, index) => index + 1)
    for (let i = 0; i < nums.length; i++) {
        index = res.indexOf(nums[i]);
        if (index >= 0) {
            res.splice(index, 1)
        }
    }
    return res;
};

