/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    const set = new Set();
    nums1.forEach(num1 => {
        if (nums2.includes(num1)) {
            set.add(num1)
        }
    });
    return [...set]
};

