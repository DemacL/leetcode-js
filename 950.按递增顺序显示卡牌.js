/*
 * @lc app=leetcode.cn id=950 lang=javascript
 *
 * [950] 按递增顺序显示卡牌
 */
/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
    deck.sort((x, y) => x - y);
    let res = [];
    while (deck.length > 0) {
        if (res.length > 0) {
            res.unshift(res.pop())
        }
        res.unshift(deck.pop())
    }
    return res;
};

