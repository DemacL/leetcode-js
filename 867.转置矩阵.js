/*
 * @lc app=leetcode.cn id=867 lang=javascript
 *
 * [867] 转置矩阵
 */
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
    return A[0].reduce((res, _, index) => { res.push(A.map(x => x[index])); return res }, [])
};

var transpose1 = function (A) {
    const res = [];
    for (let col = 0; col < A[0].length; col++) {
        const arrs = [];
        for (let row = 0; row < A.length; row++) {
            arrs.push(A[row][col]);
        }
        res.push(arrs);
    }
    return res;
};

