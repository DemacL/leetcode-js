/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
let reverse = function (x) {
    const res = Math.sign(x) * (+[...Math.abs(x).toString()].reverse().join(''))
    return (res < ((2 ** 31) - 1) && res > ((2 ** 31) * -1)) ? res : 0
}

