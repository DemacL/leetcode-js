/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */
/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.arr = [];// 用数组实现栈
    this.min = 0; // 最小元素
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.arr[this.arr.length] = x;
    this.min = Math.min(...this.arr)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.arr.length = this.arr.length - 1;
    this.min = Math.min(...this.arr)
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.arr[this.arr.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

