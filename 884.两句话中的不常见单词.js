/*
 * @lc app=leetcode.cn id=884 lang=javascript
 *
 * [884] 两句话中的不常见单词
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function (A, B) {
    return [...
        [...A.split(' '), ...B.split(' ')]
            .reduce((map, item) => {
                map.set(item, (map.get(item) || 0) + 1);
                return map
            }, new Map())]
        .filter(x => x[1] === 1)
        .map(x => x[0])
};

