/*
 * @lc app=leetcode.cn id=575 lang=javascript
 *
 * [575] 分糖果
 */
/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function (candies) {
    const set = new Set();
    for (let i = 0; i < candies.length; i++) {
        if (!set.has(candies[i])) {
            set.add(candies[i]);
        }
        if (set.size === candies.length / 2) {
            return candies.length / 2
        }
    }
    return set.size;
};

