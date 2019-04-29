/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let summax = 0;
    let min = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (prices[i - 1] >= prices[i]) {
            summax += prices[i - 1] - min;
            min = prices[i]
        }
    }
    if (prices[prices.length - 1] > min) {
        summax += prices[prices.length - 1] - min
    }
    return summax;
};

