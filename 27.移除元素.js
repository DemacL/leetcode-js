/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    // 当前索引
    let currentIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        // 数值不等于val的元素放入索引，索引后移； 数值等于 val 的元素被直接跳过
        if (nums[i] !== val) {
            nums[currentIndex++] = nums[i]
        }
    }
    return currentIndex
};

