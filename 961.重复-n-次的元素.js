/*
 * @lc app=leetcode.cn id=961 lang=javascript
 *
 * [961] 重复 N 次的元素
 */
/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
    const map = new Map();
    const half = A.length / 2;
    for (let i = 0; i < A.length; i++) {
        const num = A[i];// 当前数字
        count = (map.get(num) || 0) + 1; // 这个数字的出现次数
        if (count === half) {
            return num;
        }
        map.set(num, count)
    }
};

