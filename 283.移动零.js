/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let curIndex = 0;// 当前放入非0元素的索引
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (element !== 0) {
            nums[curIndex] = element; // 不是0的元素放入对应的索引
            curIndex++
        }
    }
    for (let j = curIndex; j < nums.length; j++) {// 剩余的空位填0
        nums[j] = 0
    }
};

