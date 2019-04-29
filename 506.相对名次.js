/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function (nums) {
    return nums
        .map((x, index) => [x, index]) // 将数据和原来的顺序关联到二维数组
        .sort((x, y) => y[0] - x[0])// 根据项中的分数排序
        .map((x, index) => {// 根据位置将分数数据项换成排名
            switch (index) {
                case 0:
                    x[0] = 'Gold Medal';
                    return x
                case 1:
                    x[0] = 'Silver Medal';
                    return x
                case 2:
                    x[0] = 'Bronze Medal';
                    return x
                default:
                    x[0] = index + 1 + '';
                    return x
            }
        })
        .sort((x, y) => x[1] - y[1])// 根据原来的索引恢复成原来的顺序
        .map(x => x[0])// 将排名抽取出来
};

