/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
    const dic = 'ZABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let res = '';
    while (n / 26 > 1) {//如果还有进位
        let mod = n % 26;// 取得当前余数
        res = dic[mod] + res;// 将余数放入结果
        n = (n - (mod === 0 ? 26 : mod)) / 26;// 减去余数部分
    }
    res = dic[n] + res
    return res;
};

