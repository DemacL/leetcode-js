/*
 * @lc app=leetcode.cn id=819 lang=javascript
 *
 * [819] 最常见的单词
 */
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    return [...paragraph
        .toLowerCase()
        .match(/[a-z]+/g)
        .reduce((map, item) => {
            map.set(item, (map.get(item) || 0) + 1);
            return map
        }, new Map())]// 1.将字符串分解构造成单词和数量组成的二维数组
        .filter(wordCount => !banned.includes(wordCount[0])) // 2.根据banned过滤
        .sort((x, y) => x[1] - y[1])  // 3.根据count数排序
        .pop()[0]
};

