/*
 * @lc app=leetcode.cn id=937 lang=javascript
 *
 * [937] 重新排列日志文件
 */
/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {

    return [...logs.map(x => x.split(' '))
        .filter(x => /[a-z]/.test(x[1][0]))
        .sort((x, y) => {
            xstr = x.slice(1).join('')
            ystr = y.slice(1).join('') 
                return xstr.localeCompare(ystr)
            // }
        }).map(x => x.join(' ')),
    ...logs.map(x => x.split(' '))
        .filter(x => /[0-9]/.test(x[1][0]))
        .map(x => x.join(' '))]

};

