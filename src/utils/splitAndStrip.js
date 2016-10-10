'use strict';

/**
 * @description alliteration. split a str according to re, and filter out empty indexes
 * @param {Object} [re] regex object for splitting
 * @param {string} [line] curr line being linted
 * @returns {Array} split and filtered array
*/
const splitAndStrip = function (re, line) {
  return line.split(re).filter(str => {
    return str.length > 0;
  });
};

module.exports = splitAndStrip;
