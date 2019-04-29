/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    //筛选质数法
    const numArr = Array.from({ length: n - 1 }).map((_, index) => ({ index, isPrime: true }));
    for (let i = 3; i < numArr.length; i += 2) {
        if (numArr[i].isPrime) {
            for (let j = 2 * numArr[i].index; j < numArr.length; j += numArr[i].index) {
                numArr[j].isPrime = false;
            }
        }
    }
    count = numArr.filter(x => x.isPrime).length //0 1
    if (n === 0 || n === 1) {
        return 0
    } else {
        return count > 0 ? count - (Math.floor((n-1) / 2)) + 1 : 0;
    }

};

