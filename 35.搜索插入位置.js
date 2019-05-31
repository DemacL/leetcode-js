/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {

    let left = 0;
    let right = nums.length - 1;
    let middle = Math.floor(left + (right - left) / 2);// 防溢出

    while (left <= right) {
        let curNum = nums[middle];
        if (curNum === target) {
            return middle
        } else if (curNum < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
        middle = Math.floor(left + (right - left) / 2);
    }
    return left;

};

