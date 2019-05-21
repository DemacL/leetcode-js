/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const arr = [];
    nums1.forEach(num1 => {
        if (nums2.includes(num1)) {
            arr.push(num1);
            const index = nums2.indexOf(num1);
            nums2.splice(index, 1)
        }
    });
    return arr;
};

