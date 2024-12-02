const isUpperCase = require('../utils/esmayuscula');

describe('Comprobar mayuscula', () => {
    test.each`
      text         | expectedResult    
      ${"HOLA"}    | ${true}
      ${"hola"}    | ${false}
      
    `('$text should return $expectedResult', ({text, expectedResult}) => {
      expect(isUpperCase(text)).toBe(expectedResult);
    });
  });