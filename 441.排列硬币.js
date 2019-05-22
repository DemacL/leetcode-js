/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    let num = 1;
    while (n - num > 0) {
        n -= num;
        num++;
    }
    return (n - num) === 0 ? num : num - 1;
};

