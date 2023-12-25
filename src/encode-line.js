const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let answer = '';
  let num = 1;
  for(let i = 1; i <= str.length; i++) {
    if(str[i] === str[i-1]) {
      num++
    } else {
      answer += (num > 1 ? num : '') + str[i-1];
      num = 1;
    }
  }
  return answer;
}

module.exports = {
  encodeLine
};
