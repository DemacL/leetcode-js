/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */
/**
 * @param {string} s
 * @return {boolean}
 */
//  正则较慢 
var isValid1 = function (s) {
  while (/\(\)|\[\]|\{\}/.test(s)) {
    s = s.replace(/\(\)|\[\]|\{\}/, '')
  }
  return s.length === 0;
};

//  代码不够简洁
var isValid2 = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
      case '[':
      case '{':
        stack.push(s[i]);
        break;
      case ')':
        if (stack[stack.length - 1] === '(') {
          stack.pop();
        } else {
          stack.push(')');
        }
        break;
      case ']':
        if (stack[stack.length - 1] === '[') {
          stack.pop();
        } else {
          stack.push(']');
        }
        break;
      case '}':
        if (stack[stack.length - 1] === '{') {
          stack.pop();
        } else {
          stack.push('{');
        }
        break;
    }
  }
  return stack.length === 0;
};

var isValid = function (s) {
  const map = new Map([
    [']', '['],
    ['}', '{'],
    [')', '(']
  ])
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (!map.has(char)) {//  左括号压入
      stack.push(char);
    } else { //  右括号判断是否成对
      if (stack[stack.length - 1] === map.get(char)) {
        stack.pop();
      } else {
        stack.push(char);
      }
    }
  }
  return stack.length === 0;
};

