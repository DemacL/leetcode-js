/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect1 = function (nums1, nums2) {
    const arr = [];
    nums1.forEach(num1 => {
        if (nums2.includes(num1)) {
            arr.push(num1);
            const index = nums2.indexOf(num1);
            nums2.splice(index, 1)
        }
    });
    return arr;
};

var intersect = function (nums1, nums2) {


    const calCountMap = (arr) => {
        return arr.reduce((m, item) => {
            m.set(item, (m.get(item) || 0) + 1)
            return m;
        }, new Map())
    }// 计算key和数量的映射

    const m1 = calCountMap(nums1);
    const m2 = calCountMap(nums2);
    const arr = [...m1.keys()].reduce((res, k) => {
        const count2 = m2.get(k);
        if (count2) {
            res.push(...Array.from({ length: Math.min(m1.get(k), count2) }).fill(k))
        }
        return res
    }, []);
    return arr;
};


