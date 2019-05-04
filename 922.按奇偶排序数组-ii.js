/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
    const evens = [];// 奇数位置上的偶数索引
    const odds = [];// 偶数位置上的奇数索引
    for (let i = 0; i < A.length; i++) {
        if (!(i % 2) && (A[i] % 2)) { // 偶数位置上的奇数索引
            odds.push(i)
        } else if ((i % 2) && !(A[i] % 2)) { // 奇数位置上的偶数索引
            evens.push(i)
        }
        if (evens.length > 0 && odds.length > 0) {// 如果有成对错误的奇偶对 交换他们的顺序
            let even = evens.pop();
            let odd = odds.pop();
            [A[even], A[odd]] = [A[odd], A[even]]
        }
    }
    return A;
};

