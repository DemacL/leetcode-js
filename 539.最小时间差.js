/*
 * @lc app=leetcode.cn id=539 lang=javascript
 *
 * [539] 最小时间差
 */
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
    const minutes = timePoints.map(x => x.split(':')).map(x => +x[0] * 60 + +x[1]).sort((x, y) => x - y)
    minutes.push(minutes[0] + 1440);
    const diff = minutes.map((x, index) => minutes[index + 1] - x);
    diff.pop();
    return Math.min(...diff);
};


