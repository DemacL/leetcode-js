/*
 * @lc app=leetcode.cn id=985 lang=javascript
 *
 * [985] 查询后的偶数和
 */
/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (A, queries) {
    let sum = A.reduce((sum, num) => sum + ((num % 2) ? 0 : num), 0);// 记录最开始的偶数和
    let res = [];
    for (let i = 0; i < queries.length; i++) {
        const query = queries[i];
        const oldNum = A[query[1]];// 原来的数字
        A[query[1]] += query[0];
        const newNum = A[query[1]];// 新的数字

        if (oldNum % 2 === 0) { // 旧的是偶数
            if (newNum % 2 === 0) {// 新的是偶数 
                sum += (newNum - oldNum);
            } else {// 新的不是偶数 
                sum -= oldNum;
            }
        } else {// 旧的不是偶数
            if (newNum % 2 === 0) {// 新的是偶数
                sum += newNum;
            }
        }

        res.push(sum);
    };
    return res;
}

