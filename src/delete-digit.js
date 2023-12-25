const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  const figures = n.toString().split('');
  let maximal = 0;

  for (let i = 0; i < figures.length; i++) {
    const rowFigures = [...figures];
    rowFigures.splice(i, 1);
    const num = Number(rowFigures.join(''));

    if (num > maximal) {
      maximal = num;
    }
  }
  return maximal;
}

module.exports = {
  deleteDigit
};
