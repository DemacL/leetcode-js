/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    const set = new Set(); // 只能使用额外的 O(1) 的空间。不符合要求 回头处理  快慢指针？
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (set.has(num)) {
            return num;
        }
        set.add(num);
    }
};

