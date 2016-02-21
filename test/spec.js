/*jshint node:true, mocha:true */

'use strict';

require('should');

var fn = require('../src/');

describe('string translate', function() {
  it('translates a string based on 2 sets of symbols', function() {
    fn('abc', '123', 'abc')
      .should.be.exactly('123');

    fn('abc', '567', 'abc')
      .should.be.exactly('567');
  });

  it('should be case sensitive', function() {
    fn('abB', 'aBb', 'abcB')
      .should.be.exactly('aBcb');
  });

  it('should support ignore unmapped characters', function() {
    fn('ÁÉÍÓÚáéíóúñ', 'AEIOUaeioun', 'Álvaro García Goñi')
      .should.be.exactly('Alvaro Garcia Goni');
  });

  it('should support arrays of symbols', function() {
    fn(['ñ', 'í'], ['n', 'i'], 'gruñí')
      .should.be.exactly('gruni');
  });

  it('should support mutiple character replacemens', function() {
    fn(['ß'], ['ss'], 'abcßefg')
      .should.be.exactly('abcssefg');
  });

  it('should NOT support mutiple character origins', function() {
    fn(['ss', '?'], ['ß', '!'], 'abcssefg?')
      .should.not.be.exactly('abcßefg!');

    // alternative
    fn(['?'], ['!'], 'abcssefssg?'.replace(/ss/g, 'ß'))
      .should.be.exactly('abcßefßg!');
  });
});
