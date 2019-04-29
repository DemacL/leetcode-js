/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxp = 0;
    let min = prices[0]
    for (let i = 1; i < prices.length; i++) {
        min = Math.min(prices[i], min);
        maxp = Math.max(maxp, prices[i] - min)
    }
    return maxp;
};

