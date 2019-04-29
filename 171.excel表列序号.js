/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
    return [...s].reduce((sum, ch, index) => sum + (ch.charCodeAt() - 64) * 26 ** (s.length - index - 1), 0)
};

