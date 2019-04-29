/*
 * @lc app=leetcode.cn id=482 lang=javascript
 *
 * [482] 密钥格式化
 */
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function (S, K) {
    let valids = S.toUpperCase().replace(/-/g, '') // 所有有效字符
    const befores = valids.slice(0, valids.length % K);// 剔除取模的前面部分字符串
    afterValids = valids.slice(befores.length);// 剩余整除部分字符串
    let afters = '';// 后面部分的格式化字符串
    if (afterValids) {
        afters = afterValids.match(new RegExp(`.{${K}}`, 'g')).join('-');
    }
    if (befores && afters) {
        return befores + '-' + afters;
    } else if (befores) {
        return befores
    } else {
        return afters;
    }
};

