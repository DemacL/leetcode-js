/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    return s.split(' ')// 转换成单词数组
        .map(x => [...x].reverse().join(''))//每个单词映射成反转后的单词
        .join(' ')// 单词组成字符串
};

