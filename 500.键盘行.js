/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 */
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    return words.filter(word =>
            [/^[qwertyuiop]+$/, /^[asdfghjkl]+$/, /^[zxcvbnm]+$/]
                .some(reg =>
                    reg.test(word.toLowerCase())))// 过滤每一个单词满足三个正则中的任何一个即可
};

