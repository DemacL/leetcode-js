/*
 * @lc app=leetcode.cn id=896 lang=javascript
 *
 * [896] 单调数列
 */
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
    const compares = A.map((x, index) => {
        if (index === 0) {
            return 0
        } else {
            const diff = x - A[index - 1]
            if (diff === 0) {
                return 0;
            } else if (diff > 0) {
                return 1
            } else {
                return -1;
            }
        }
    })

    return new Set(compares.filter(x => x !== 0)).size <= 1;
};

