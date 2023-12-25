const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const answer = {};
  for (let i = 0; i < domains.length; i++) {
    const words = domains[i].split('.');
    const revDomain = words.reverse();
    let k = '';

    for(let j = 0; j < revDomain.length; j++) {
      k += `.${revDomain[j]}`;

      if (answer[k]) {
        answer[k]++;
      } else {
        answer[k] = 1;
      }
    }
  }
  return answer;
}

module.exports = {
  getDNSStats
};
