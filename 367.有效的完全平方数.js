/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let i = 1;
    let sum = i;
    // 一个完全平方数可表示为连续奇数和
    while (sum < num) {
        i += 2;
        sum += i;
    }
    return sum === num
};

