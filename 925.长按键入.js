/*
 * @lc app=leetcode.cn id=925 lang=javascript
 *
 * [925] 长按键入
 */
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
    return new RegExp('^' +
        name.match(/(\w)(\1)*/g)  //"leelee"=>["l", "ee", "l", "ee"]
            .map(x => x.length === 1 ? x + '+' : `${x[0]}{${x.length},}`)// ["l", "ee", "l", "ee"] =>["l+", "e{2,}", "l+", "e{2,}"]
            .join('') + '$') // ["l+", "e{2,}", "l+", "e{2,}"] => "l+e{2,}l+e{2,}"
        .test(typed)
};

