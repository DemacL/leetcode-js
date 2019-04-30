/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let set = new Set();
    for (let i = 0; i < s.length; i++) {
        if (!set.has(s[i]) && i === s.lastIndexOf(s[i])) {//第一个唯一字符:字符之前未出现并且之后也没有出现
            return i
        } else {
            set.add(s[i]); // 记录出现过的字符
        }
    }
    return -1;
};

