/*jshint node:true */

'use strict';

var R = require('./R');
var U = require('./U');

var translate = R.curryN(3, function(oldSymbols, newSymbols, str) {
  return R.pipe(
    R.map(U.translateCharacter(oldSymbols, newSymbols)),
    U.joinWithoutSep
  )(str);
});

module.exports = translate;
