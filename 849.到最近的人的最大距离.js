/*
 * @lc app=leetcode.cn id=849 lang=javascript
 *
 * [849] 到最近的人的最大距离
 */
/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
    let start = (seats.join('').match(/^0+/g) || [''])[0].length; // 最前面连续0长度为最长距离
    const max = Math.max(...(seats.join('').match(/0+/g) || []).map(x => x.length));// 连续0正则分组;并获取长度最长的那一组
    let middle = Math.ceil(max / 2);// 最大长度的中间为最长距离
    let end = (seats.join('').match(/0+$/g) || [''])[0].length; // 最后面连续0长度为最长距离
    return Math.max(start, middle, end);
};

