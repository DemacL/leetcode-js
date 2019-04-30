/*
 * @lc app=leetcode.cn id=953 lang=javascript
 *
 * [953] 验证外星语词典
 * 思路:将words正确的顺序排列出来与原字符串比较
 */
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    return [...words].sort((x, y) => {
        let i = 0;
        while (i < x.length && i < y.length) {
            if (x[i] !== y[i]) {
                return order.indexOf(x[i]) - order.indexOf(y[i])
            }
            i++;// 找到第一个不同的字母作比较用以确定想x,y单词的相对顺序
        }
        // 没有找到不同的字母：完全相同或者一个是另一个的前缀
        if (x.length === y.length) {// 同样的单词
            return 0
        } else if (i === x.length - 1) {// y单词比较长，x放前面
            return -1;
        } else {// x单词比较长，x放后面
            return 1;
        }
    }).join('') === words.join('')
};

