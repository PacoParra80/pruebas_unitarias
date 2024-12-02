const palindromo = require('../utils/palindromo');

describe('palindromo', () => {
    test.each`
      text            | expectedResult    
      ${"hola"}       | ${"aloh"}
      ${"hola mundo"} | ${"odnum aloh"}
      
    `('$text should return $expectedResult', ({text, expectedResult}) => {
      expect(palindromo(text)).toBe(expectedResult);
    });
  });