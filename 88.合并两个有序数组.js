/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function (nums1, m, nums2, n) {
//     if (m === 0) {
//         for (let i = 0; i < nums2.length; i++) {
//             nums1[i] = nums2[i]
//         }
//     } else {
//         let length = m;// 当前nums1中的有效长度
//         let num1index = 0;// 当前num1的比较起始索引
//         for (let i = 0; i < n; i++) {
//             const ele2 = nums2[i];//
//             for (let j = num1index; j < length; j++) {
//                 const ele1 = nums1[j];
//                 if (ele2 < ele1) {
//                     // ele1后移
//                     for (let k = length; k > j; k--) {
//                         nums1[k] = nums1[k - 1]
//                     }
//                     // ele2 放在当前ele1的位置 nums2的元素合并到num1
//                     nums1[j] = ele2;
//                     num1index = j + 1;
//                     length++;
//                     break;// 插入一个元素后 迭代num2的下一个元素
//                 } else if (j === length - 1) {// num2中的当前元素大于num1中最后一个元素
//                     //num2中的剩余元素全部放入num1后续索引
//                     for (let m = i; m < nums2.length; m++) {
//                         nums1[length++] = nums2[m];
//                     }
//                     return
//                 }
//             }
//         }
//     }
// };
// merge([0], 0, [1], 1);

var merge = function (nums1, m, nums2, n) {
    let index1 = m - 1;
    let index2 = n - 1;
    let index = m + n - 1;
    while (index1 >= 0 && index2 >= 0) {
        if (nums2[index2] > nums1[index1]) {
            nums1[index--] = nums2[index2--]
        } else {
            nums1[index--] = nums1[index1--]
        }
    }
    while (index2 >= 0) {
        nums1[index--] = nums2[index2--]
    }
} 
