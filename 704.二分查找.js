/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0; // 左端点 
    let right = nums.length - 1; // 右断点 
    while (left <= right) {
        let medium = Math.floor((left + right) / 2) // 中间
        if (nums[medium] === target) {
            return medium;
        } else if (nums[medium] < target) {//  模板在右边部分
            left = medium + 1;
        } else {
            right = medium - 1;
        }
    }
    return -1;
};

