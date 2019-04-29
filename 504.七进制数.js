/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 */
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {

    const negFlag = num < 0;
    num = Math.abs(num);
    let res = ''
    while (num / 7 >= 1) {
        res = num % 7 + res;
        num = num - num % 7
        num /= 7
    }
    res = num % 7 + res;

    return (negFlag ? '-' : '') + res;
};

