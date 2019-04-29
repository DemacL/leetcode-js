/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
    return A.map(row => row.reverse().map(x => x === 0 ? 1 : 0))
};

/// 用异或 