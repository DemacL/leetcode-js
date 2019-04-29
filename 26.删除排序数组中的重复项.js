/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    // 当前可以放入不重复元素的索引
    let currentIndex = 1;
    for (let i = 1; i < nums.length; i++) {
        // 如果这个数不等于前一个数 则放入最前面的索引中，并将索引后移一位
        if (nums[i] !== nums[i - 1]) {
            nums[currentIndex++] = nums[i]
        }
    }
    return currentIndex
};

