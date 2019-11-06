/*
 * @lc app=leetcode.cn id=1160 lang=javascript
 *
 * [1160] 拼写单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {

    /** 工具函数---获取字符串中字符和数量的映射 */
    const getCharNumMap = (word) => {
        return [...word].reduce((m, c) => { m.set(c, (m.get(c) || 0) + 1); return m }, new Map())
    }

    const chasrMap = getCharNumMap(chars);
    // 满足条件的是对于单词中每个字母，单词字母表中都有大于等于对应的数量
    const res = words.filter(word => {
        const wordMap = getCharNumMap(word);
        return [...wordMap.keys()].every(key => (chasrMap.get(key) || 0) >= wordMap.get(key))
    })
    return res.reduce((len, s) => len + s.length, 0);
};
// @lc code=end

