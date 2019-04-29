/**
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = function(moves) {
    /** 获取某个方向的移动次数 */
  const directNum = (direct) => {
      return (moves.match(new RegExp(direct, 'g')) || []).length
  }
  return directNum('U') === directNum('D') && directNum('L') === directNum('R')
};