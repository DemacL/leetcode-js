/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    let xbin = x.toString(2);
    let ybin = y.toString(2);
    const maxlen = Math.max(xbin.length, y.length)
    xbin = xbin.padStart(maxlen, '0')
    ybin = ybin.padStart(maxlen, '0')
    return [...xbin].filter((x, index) => x !== ybin[index]).length
};
/**
 * 异或后算1的个数即可
 */

