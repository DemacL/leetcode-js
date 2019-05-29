/*
 * @lc app=leetcode.cn id=888 lang=javascript
 *
 * [888] 公平的糖果交换
 */
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function (A, B) {

    const asum = A.reduce((s, x) => s + x);
    const bsum = B.reduce((s, x) => s + x);
    const diff = asum - bsum;

    for (let i = 0; i < A.length; i++) {
        const num1 = A[i];
        const num2 = num1 - diff / 2;
        if (B.includes(num2)) {
            return [num1, num2]
        }
    }
};

