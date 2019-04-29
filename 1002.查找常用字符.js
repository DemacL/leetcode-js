/*
 * @lc app=leetcode.cn id=1002 lang=javascript
 *
 * [1002] 查找常用字符
 */
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
    return [...new Set(A[0])].filter(ch => A.every(word => word.includes(ch)))// 共有的字母  ["e", "l"]
        .map(ch => ch.repeat(Math.min(...A.map(x => x.match(new RegExp(ch, 'g')).length))))// 将每个共有字母映射成该字母都有最大重复次数的字符串 ["e", "ll"]
        .join('') // 'ell'
        .split('') // ['e', 'l', 'l']
};

