/*
 * @lc app=leetcode.cn id=648 lang=javascript
 *
 * [648] 单词替换
 */

// @lc code=start
/**
 * @param {string[]} roots
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (roots, sentence) {
    return sentence.split(' ')// 拆分成单个单词数组
        .map(word => {
            const matchs = roots.filter(root => word.startsWith(root));// 匹配单词含有的所有词根
            return matchs.length > 0 ?
                matchs.sort((m1, m2) => m2.length - m1.length || m2.localeCompare(m1)).pop() :// 选出最短的词根 多个最短选字典排序最小的
                word
        })
        .join(' ')
};
// @lc code=end

