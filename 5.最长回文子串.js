/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let cmax = '';// 当前最长回文子串
    let max = '';// 最长回文子串
    for (let i = 0; i < s.length; i++) {
        let newStr = cmax + s[i];
        cmax = [...newStr].reverse().join('') === newStr ? newStr : s[i];
        max = cmax.length > max.length ? cmax : max;
    }
    return max.length;
};

