/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    return [...nums.reduce((map, item) => {
        map.set(item, (map.get(item) || 0) + 1); return map
    }, new Map())]
        .sort((x, y) => y[1] - x[1])[0][0]
};

