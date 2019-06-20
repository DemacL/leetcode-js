/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    // 构造空矩阵
    const matrix = Array.from({ length: n }).map(_ => Array.from({ length: n }));
    let row = 0;
    let col = 0;
    let num = 1;
    let directionType = {
        right: 'right',
        down: 'down',
        left: 'left',
        up: 'up'
    };
    let direction = directionType.right;
    while (num <= n * n) {
        if (direction === directionType.right) {// 向右平移
            if (col < n && !matrix[row][col]) {// 如果右边还可以放置数据则放置数据;方向保持不变
                matrix[row][col] = num++;
                const nextCol = col + 1;// 向右的下一列
                if (nextCol < n && !matrix[row][nextCol]) {
                    col = nextCol;
                } else {
                    direction = directionType.down//右边不能放置数据,改变方向向下
                    row++;
                }
            }
        } else if (direction === directionType.down) {// 向下平移
            if (row < n && !matrix[row][col]) {// 如果下边还可以放置数据则放置数据;方向保持不变
                matrix[row][col] = num++;
                const nextRow = row + 1;
                if (nextRow < n && !matrix[nextRow][col]) {
                    row = nextRow;
                } else {
                    direction = directionType.left;//下边不能放置数据,改变方向向左
                    col--;
                }
            }
        } else if (direction === directionType.left) {// 向左平移
            if (col >= 0 && !matrix[row][col]) {// 如果左边还可以放置数据则放置数据;方向保持不变
                matrix[row][col] = num++;
                const nextCol = col - 1;
                if (nextCol >= 0 && !matrix[row][nextCol]) {
                    col = nextCol;
                } else {
                    direction = directionType.up;//左边不能放置数据,改变方向向上
                    row--;
                }
            }
        } else if (direction === directionType.up) {// 向上平移
            if (row >= 0 && !matrix[row][col]) {// 如果上边还可以放置数据则放置数据;方向保持不变
                matrix[row][col] = num++;
                const nextRow = row - 1;
                if (nextRow >= 0 && !matrix[nextRow][col]) {
                    row = nextRow;
                } else {
                    direction = directionType.right;//上边不能放置数据,改变方向向右
                    col++;
                }
            }
        }
    }
    return matrix;
};

