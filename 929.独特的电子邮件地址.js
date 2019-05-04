/*
 * @lc app=leetcode.cn id=929 lang=javascript
 *
 * [929] 独特的电子邮件地址
 */
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
    return new Set(emails.map(x => {
        arrs = x.split('@');//根据@符号分成本地名称和域名
        arrs[0] = arrs[0].split('+')[0].replace(/\./g, '');// 第一个+号后的内容不要,.号忽略
        return arrs.join('@')//本地名称和域名组合成有效的邮件地址
    })).size
};

