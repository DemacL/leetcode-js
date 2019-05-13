/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let carry = 0;// 进位标记
    let res = [];
    let index = digits.length - 1;
    while (index >= 0) {
        sum = +digits[index] + ((index === digits.length - 1) ? 1 : 0) + carry;
        carry = sum >= 10 ? 1 : 0;
        res.push(sum % 10);
        index--;
    }
    if (carry) {
        res.push(1);
    }
    return res.reverse();
};

