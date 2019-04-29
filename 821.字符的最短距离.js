/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 * 思路:
 * 取当前字符距离上一个C和下一个C的最小值，而当前字符与上一个C的距离刚好是当前字符前一个字符与C的距离+1
 */
/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function (S, C) {
    const arr = [];
    arr[0] = S.indexOf(C);// 第一个字符与C的距离
    for (let i = 1; i < S.length; i++) {
        const nextDis = S.indexOf(C, i) - i// 下一个C的距离 包括当前  
        const preDis = arr[arr.length - 1] + 1;// 上一个距离自动+1 不包括当前
        arr.push(nextDis >= 0 ? Math.min(preDis, nextDis) : preDis)
    }
    return arr;
};
