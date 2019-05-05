/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let carry = 0;// 进位标记
    let res = [];
    aindex = a.length - 1;
    bindex = b.length - 1;
    while (aindex >= 0 || bindex >= 0) {// a或b还有位可以相加
        sum = (+a[aindex] || 0) + (+b[bindex] || 0) + carry;// aindex bindex可能为负数值转化为0
        carry = sum >= 2 ? 1 : 0;
        res.push(sum % 2);
        aindex--;
        bindex--;
    }
    if (carry) {
        res.push(1);
    }
    return res.reverse().join('');
};

