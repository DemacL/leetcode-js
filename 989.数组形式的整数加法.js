/*
 * @lc app=leetcode.cn id=989 lang=javascript
 *
 * [989] 数组形式的整数加法
 * 大数相加的问题，考虑溢出等，按最原始的按位相加即可
 */
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
    const numArr1 = A.reverse();//A的反转形式[1,2,0,0]=>[0, 0, 2, 1]
    const numArr2 = K.toString().split('').reverse().map(x => +x);// K数字的数组反转形式 123=>[3,2, 1]
    const maxLength = Math.max(numArr1.length, numArr2.length);
    const res = [];// 结果
    let carry = false; // 进位标记
    for (let i = 0; i < maxLength; i++) {
        sum = (numArr1[i] ? numArr1[i] : 0) + (numArr2[i] ? numArr2[i] : 0) + (carry ? 1 : 0)
        carry = sum >= 10;
        res.push(sum % 10)
    }
    if (carry) {
        res.push(1)
    }
    return res.reverse();
};

