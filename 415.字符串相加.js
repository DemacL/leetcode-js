/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let carry = 0;// 进位标记
    let res = [];
    let index1 = num1.length - 1;
    let index2 = num2.length - 1;
    while (index1 >= 0 || index2 >= 0) {// a或b还有位可以相加
        sum = (+num1[index1] || 0) + (+num2[index2] || 0) + carry;// index1 index2 可能为负数值转化为0
        carry = sum >= 10 ? 1 : 0;
        res.push(sum % 10);
        index1--;
        index2--;
    }
    if (carry) {
        res.push(1);
    }
    return res.reverse().join('');
};

