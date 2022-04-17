const reverse = require('../exercises/reverse');

test('reverses array with numbers', () => {
  expect(reverse([1,2,3,4])).toEqual([4,3,2,1]);
});


test('reverses array with letters', () => {
  expect(reverse(['a','b','c'])).toEqual(['c','b','a']);
});
