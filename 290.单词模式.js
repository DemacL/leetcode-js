/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词模式
 */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
    // const chars = pattern.split(''); 不需要split pattern
    const words = str.split(' ');
    if (pattern.length !== words.length) {
        return false;
    }
    const map = new Map();
    for (let i = 0; i < pattern.length; i++) {
        // 如果两个都不存在则建立映射关系
        if (![...map.keys()].includes(pattern[i]) && ![...map.values()].includes(words[i])) {
            map.set(pattern[i], words[i]);
        }
        // 判断是否匹配映射
        else if (map.get(pattern[i]) !== words[i]) {
            return false;
        }
    }
    return true;
};

