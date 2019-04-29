/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    // s = [...s].sort().join('');
    // return [...t].sort().find(
    //     (x, index) => s[index] !== x
    // )
    return String.fromCharCode([...s, ...t].map(x => x.charCodeAt()).reduce((x, y) => x ^ y))
};

