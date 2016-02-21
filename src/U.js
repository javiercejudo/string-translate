/*jshint node:true */

'use strict';

var R = require('./R');

var contains = R.memoize(function(symbols) {
  return R.memoize(R.contains(R.__, symbols));
});

var indexOfSymbol = R.memoize(function(symbols) {
  return R.memoize(R.indexOf(R.__, symbols));
});

var nthSymbol = R.memoize(function(symbols) {
  return R.memoize(R.nth(R.__, symbols));
});

module.exports = Object.freeze({
  joinWithoutSep: R.join(''),
  indexOrValue: R.memoize(function(symbols) {
    return R.memoize(R.ifElse(contains(symbols), indexOfSymbol(symbols), R.identity));
  }),
  nthOrValue: R.memoize(function(symbols) {
    return R.memoize(R.ifElse(R.is(Number), nthSymbol(symbols), R.identity));
  })
});
