/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let i = 1;
    while ((i ** 2) < x) {
        i++;
    }
    return (i ** 2 === x) ? i : (i - 1)
};

