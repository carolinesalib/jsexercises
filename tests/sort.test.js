const sorts = require('../sort');

test('sorts array with numbers', () => {
  expect(sorts([3,1,2])).toEqual([1,2,3]);
});

test('sorts array with numbers already sorted', () => {
  expect(sorts([1,2,3])).toEqual([1,2,3]);
});

test('sorts array with letters', () => {
  expect(sorts(['c','b','a','d'])).toEqual(['a','b','c','d']);
});
