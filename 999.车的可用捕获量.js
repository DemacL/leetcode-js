/*
 * @lc app=leetcode.cn id=999 lang=javascript
 *
 * [999] 车的可用捕获量
 */
/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {

    let count = 0;
    let rrow = 0; // 白色车所在行
    let rcol = 0; // 白色车所在列
    for (let row = 0; row < 8; row++) {
        rcol = board[row].indexOf('R');
        if (rcol >= 0) {
            rrow = row;
            break;
        }
    }
    // 白车位置左边部分可捕获的卒数量
    for (let col = rcol - 1; col >= 0; col--) {// 左边部分
        let current = board[rrow][col];
        if (current === 'p') {
            count++;
            break;
        }
        else if (current === 'B') {
            break;
        }
    }
    // 白车位置右边部分可捕获的卒数量
    for (let col = rcol + 1; col < 8; col++) {// 右边部分
        let current = board[rrow][col];
        if (current === 'p') {
            count++;
            break;
        } else if (current === 'B') {
            break;
        }
    }
    // 白车位置垂直上面部分可捕获的卒数量
    for (let row = rrow - 1; row >= 0; row--) {// 上部分
        let current = board[row][rcol];
        if (current === 'p') {
            count++;
            break;
        }
        else if (current === 'B') {
            break;
        }
    }
    // 白车位置垂直下面部分可捕获的卒数量
    for (let row = rrow + 1; row < 8; row++) {// 下部分
        let current = board[row][rcol];
        if (current === 'p') {
            count++;
            break;
        } else if (current === 'B') {
            break;
        }
    }
    return count;
};

